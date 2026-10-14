(() => {
  "use strict";
  const button = document.querySelector(".whatsapp-float");
  const teaser = document.querySelector("#whatsapp-teaser");
  const closeButton = teaser?.querySelector(".whatsapp-teaser-close");
  if (!button || !teaser || !closeButton) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const firstDelay = 5000;
  const visibleDuration = 7500;
  const repeatDelay = 150000;
  let openTimer = null;
  let closeTimer = null;
  let repeatTimer = null;
  let isOpen = false;

  function showAgain(delay) {
    repeatTimer = window.setTimeout(openTeaser, delay);
  }
  function closeTeaser(force = false) {
    if (!isOpen) return;
    if (!force && (teaser.matches(":hover") || teaser.contains(document.activeElement))) {
      closeTimer = window.setTimeout(closeTeaser, 1200);
      return;
    }
    isOpen = false;
    teaser.setAttribute("aria-hidden", "true");
    teaser.classList.remove("is-expanded");
    if (reducedMotion.matches) {
      teaser.hidden = true;
      button.classList.remove("is-personal");
      showAgain(repeatDelay);
      return;
    }
    teaser.classList.add("is-closing");
    window.setTimeout(() => {
      teaser.hidden = true;
      teaser.classList.remove("is-closing");
      button.classList.remove("is-personal");
      showAgain(repeatDelay);
    }, 340);
  }
  function openTeaser() {
    repeatTimer = null;
    if (document.visibilityState !== "visible") {
      openTimer = window.setTimeout(openTeaser, 10000);
      return;
    }
    openTimer = null;
    teaser.hidden = false;
    teaser.setAttribute("aria-hidden", "false");
    teaser.classList.remove("is-closing");
    teaser.classList.add("is-expanded");
    button.classList.add("is-personal");
    isOpen = true;
    closeTimer = window.setTimeout(closeTeaser, visibleDuration);
  }
  closeButton.addEventListener("click", () => {
    closeTeaser(true);
    button.focus({preventScroll: true});
  });
  teaser.addEventListener("focusout", () => {
    if (isOpen && !teaser.contains(document.activeElement)) {
      window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(closeTeaser, 1800);
    }
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && !isOpen && openTimer === null && repeatTimer === null) {
      openTimer = window.setTimeout(openTeaser, 5000);
    }
  });
  openTimer = window.setTimeout(openTeaser, firstDelay);
})();
