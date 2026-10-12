(() => {
  "use strict";
  const config = window.MAMA_AFRICA_PREVIEW_V2;
  const tourList = document.querySelector("#tour-list");
  if (!config || !tourList) return;

  const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const whatsappUrl = (message) => /^\d{8,15}$/.test(config.whatsappNumber)
    ? `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}` : "";
  const arrow = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const plus = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M12 5v14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>';
  const chevron = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  document.querySelectorAll('[data-booking="general"]').forEach((link) => {
    const url = whatsappUrl(config.generalMessage);
    if (url) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.textContent = "WhatsApp contact to be confirmed";
      link.setAttribute("aria-disabled", "true");
    }
  });

  tourList.innerHTML = config.tours.map((tour) => {
    const id = escape(tour.id);
    const priceLabel = Number.isFinite(tour.priceAmount)
      ? `${tour.priceCurrency === "USD" ? "$" : `${tour.priceCurrency} `}${new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(tour.priceAmount)}`
      : tour.price;
    const bookingMessage = `Hello Mama Africa! I'm interested in booking the ${tour.name} experience. Could you please share availability, the final itinerary and price?`;
    const url = whatsappUrl(bookingMessage);
    const book = url ? `<a class="button button-teal tour-book" href="${escape(url)}" target="_blank" rel="noopener noreferrer" aria-label="Book ${escape(tour.name)} on WhatsApp">Book Now ${arrow}</a>` : '<p class="missing-contact">WhatsApp contact to be confirmed.</p>';
    return `<article class="tour-card" id="tour-${id}" aria-labelledby="title-${id}">
      <div class="tour-cover">
        <img src="${escape(tour.image)}" srcset="${escape(tour.imageSmall)} ${tour.imageSmallWidth || 640}w, ${escape(tour.image)} ${tour.imageWidth || 1080}w" sizes="(max-width:760px) calc(100vw - 40px), calc((100vw - 140px) / 3)" alt="${escape(tour.alt)}" width="1448" height="1086" loading="lazy">
        <span class="tour-price">${Number.isFinite(tour.priceAmount) ? 'From ' : ''}${escape(priceLabel)}</span>
        ${tour.seasonal ? '<span class="tour-season">Seasonal</span>' : ''}
        <div class="tour-cover-copy"><h3 id="title-${id}">${escape(tour.name)}</h3><p>${escape(tour.subtitle)}</p><span class="tour-cover-action">Explore this tour <span class="tour-plus">${plus}</span></span></div>
        <button class="tour-toggle" type="button" data-card-toggle aria-expanded="false" aria-controls="content-${id}" aria-label="Open ${escape(tour.name)} tour details"></button>
      </div>
      <div class="tour-content" id="content-${id}" hidden>
        <button type="button" class="panel-toggle" id="about-button-${id}" data-panel-toggle="about" aria-expanded="true" aria-controls="about-${id}">About this tour ${chevron}</button>
        <div class="tour-panel" id="about-${id}" role="region" aria-labelledby="about-button-${id}"><p>${escape(tour.description)}</p></div>
        <button type="button" class="panel-toggle" id="steps-button-${id}" data-panel-toggle="steps" aria-expanded="false" aria-controls="steps-${id}">Your day, step by step ${chevron}</button>
        <div class="tour-panel steps-panel" id="steps-${id}" role="region" aria-labelledby="steps-button-${id}" hidden>
          <p class="itinerary-label">A suggested day on the water</p>
          <ol class="tour-steps">${tour.steps.map((step) => `<li><h4>${escape(step.title)}</h4><p>${escape(step.text)}</p></li>`).join("")}</ol>
        </div>
        <p class="planning-note">${escape(tour.planningNote)}</p>
        ${book}
        <span class="booking-hint">Continue the conversation on WhatsApp</span>
      </div>
    </article>`;
  }).join("");

  const mobileQuery = window.matchMedia("(max-width: 760px)");
  const filterControls = document.querySelector("#tour-filters");
  const sortControl = document.querySelector("#tour-sort");
  const tourCount = document.querySelector("#tour-count");
  const pagination = document.querySelector("#tour-pagination");
  const pageLabel = document.querySelector("#tour-page-label");
  const emptyState = document.querySelector("#tour-empty");
  const pageButtons = [...document.querySelectorAll("#tour-pagination [data-page-step]")];
  const cards = [...tourList.querySelectorAll(".tour-card")];
  const entries = config.tours.map((tour, index) => ({ tour, card: cards[index], index }));
  const pageSize = 4;
  let activeFilter = "all";
  let sortOrder = "featured";
  let currentPage = 1;
  let matchingEntries = entries.slice();

  function closeCards() {
    cards.forEach((card) => { if (card.classList.contains("is-open")) setCard(card, false); });
  }

  function updateMatches() {
    matchingEntries = entries.filter(({ tour }) => activeFilter === "all" || tour.categories?.includes(activeFilter));
    if (sortOrder !== "featured") {
      const direction = sortOrder === "price-desc" ? -1 : 1;
      matchingEntries.sort((a, b) => {
        const aKnown = Number.isFinite(a.tour.priceAmount);
        const bKnown = Number.isFinite(b.tour.priceAmount);
        if (aKnown !== bKnown) return aKnown ? -1 : 1;
        return aKnown ? direction * (a.tour.priceAmount - b.tour.priceAmount) || a.index - b.index : a.index - b.index;
      });
    }
    const matchingCards = new Set(matchingEntries.map(({ card }) => card));
    const orderedEntries = matchingEntries.concat(entries.filter(({ card }) => !matchingCards.has(card)));
    const fragment = document.createDocumentFragment();
    orderedEntries.forEach(({ card }) => fragment.append(card));
    tourList.append(fragment);
    filterControls?.querySelectorAll("[data-tour-filter]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.tourFilter === activeFilter));
    });
    applyVisibility();
  }

  function applyVisibility() {
    const total = matchingEntries.length;
    const pageCount = Math.max(1, Math.ceil(total / pageSize));
    currentPage = Math.min(Math.max(currentPage, 1), pageCount);
    const start = mobileQuery.matches ? (currentPage - 1) * pageSize : 0;
    const end = mobileQuery.matches ? Math.min(start + pageSize, total) : total;
    const visibleEntries = matchingEntries.slice(start, end);
    const visibleCards = new Set(visibleEntries.map(({ card }) => card));
    const focusedCard = document.activeElement?.closest(".tour-card");
    cards.forEach((card) => {
      const hide = !visibleCards.has(card);
      if (hide && card.classList.contains("is-open")) setCard(card, false);
      card.hidden = hide;
    });
    if (pagination) pagination.hidden = !mobileQuery.matches || total === 0;
    if (emptyState) emptyState.hidden = total !== 0;
    if (pageLabel) pageLabel.textContent = `Page ${total ? currentPage : 0} of ${total ? pageCount : 0}`;
    pageButtons.forEach((button) => {
      const isPrevious = Number(button.dataset.pageStep) < 0;
      button.disabled = total === 0 || (isPrevious ? currentPage === 1 : currentPage === pageCount);
      button.setAttribute("aria-label", isPrevious ? "Previous page of experiences" : "Next page of experiences");
    });
    if (tourCount) tourCount.textContent = total === 0
      ? "No experiences match this filter."
      : mobileQuery.matches ? `Showing ${start + 1}\u2013${end} of ${total} experiences` : `${total} ${total === 1 ? "experience" : "experiences"}`;
    if (focusedCard && focusedCard.hidden) {
      const focusTarget = visibleEntries[0]?.card.querySelector("[data-card-toggle]")
        || filterControls?.querySelector('[aria-pressed="true"]') || sortControl;
      focusTarget?.focus({ preventScroll: true });
    }
    return visibleEntries;
  }

  filterControls?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-tour-filter]");
    if (!button || !filterControls.contains(button)) return;
    button.focus({ preventScroll: true });
    activeFilter = button.dataset.tourFilter;
    currentPage = 1;
    closeCards();
    updateMatches();
  });
  filterControls?.addEventListener("wheel", (event) => {
    if (mobileQuery.matches || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
    const maxScroll = filterControls.scrollWidth - filterControls.clientWidth;
    const canScroll = event.deltaY > 0 ? filterControls.scrollLeft < maxScroll - 1 : filterControls.scrollLeft > 1;
    if (maxScroll <= 0 || !canScroll || event.ctrlKey) return;
    event.preventDefault();
    const distance = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaMode === 2 ? event.deltaY * filterControls.clientWidth : event.deltaY;
    filterControls.scrollLeft += distance;
  }, { passive: false });
  sortControl?.addEventListener("change", () => {
    sortOrder = sortControl.value;
    currentPage = 1;
    closeCards();
    updateMatches();
  });
  pageButtons.forEach((button) => button.addEventListener("click", () => {
    const pageCount = Math.max(1, Math.ceil(matchingEntries.length / pageSize));
    const nextPage = Math.min(Math.max(currentPage + Number(button.dataset.pageStep), 1), pageCount);
    if (nextPage === currentPage) return;
    currentPage = nextPage;
    closeCards();
    const firstCard = applyVisibility()[0]?.card;
    if (firstCard) {
      firstCard.querySelector("[data-card-toggle]").focus({ preventScroll: true });
      firstCard.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  }));
  mobileQuery.addEventListener("change", applyVisibility);
  updateMatches();

  function setPanel(card, selected, expand) {
    ["about", "steps"].forEach((name) => {
      const button = card.querySelector(`[data-panel-toggle="${name}"]`);
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      const active = name === selected && expand;
      button.setAttribute("aria-expanded", String(active));
      panel.hidden = !active;
    });
  }

  function setCard(card, expand) {
    const button = card.querySelector("[data-card-toggle]");
    const content = document.getElementById(button.getAttribute("aria-controls"));
    button.setAttribute("aria-expanded", String(expand));
    button.setAttribute("aria-label", `${expand ? "Close" : "Open"} ${card.querySelector("h3").textContent} tour details`);
    content.hidden = !expand;
    card.classList.toggle("is-open", expand);
    if (expand) setPanel(card, "about", true);
  }

  tourList.addEventListener("click", (event) => {
    const outer = event.target.closest("[data-card-toggle]");
    if (outer) {
      const card = outer.closest(".tour-card");
      const expand = outer.getAttribute("aria-expanded") !== "true";
      tourList.querySelectorAll(".tour-card").forEach((item) => { if (item !== card) setCard(item, false); });
      setCard(card, expand);
      return;
    }
    const inner = event.target.closest("[data-panel-toggle]");
    if (inner) setPanel(inner.closest(".tour-card"), inner.dataset.panelToggle, inner.getAttribute("aria-expanded") !== "true");
  });

  tourList.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const card = event.target.closest(".tour-card.is-open");
    if (card) { setCard(card, false); card.querySelector("[data-card-toggle]").focus(); }
  });
})();
