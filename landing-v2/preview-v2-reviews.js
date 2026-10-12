(() => {
  "use strict";
  const list = document.querySelector("#review-list");
  const previous = document.querySelector("#review-previous");
  const next = document.querySelector("#review-next");
  const position = document.querySelector("#review-position");
  if (!list || !previous || !next || !position) return;
  const cards = [...list.querySelectorAll(".review-card")];
  if (!cards.length) return;
  const mobile = window.matchMedia("(max-width: 760px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0;

  function metrics() {
    return {
      visible: mobile.matches ? 1 : 3,
      step: cards[0].getBoundingClientRect().width + (parseFloat(getComputedStyle(list).columnGap) || 0),
      maximum: Math.max(0, list.scrollWidth - list.clientWidth)
    };
  }
  function update() {
    frame = 0;
    const { visible, step, maximum } = metrics();
    const first = Math.min(Math.max(0, cards.length - visible), Math.max(0, Math.round(list.scrollLeft / step)));
    position.textContent = `${first + 1}–${Math.min(first + visible, cards.length)} of ${cards.length} tour review summaries`;
    previous.disabled = list.scrollLeft <= 1;
    next.disabled = list.scrollLeft >= maximum - 1;
  }
  function queueUpdate() {
    if (!frame) frame = requestAnimationFrame(update);
  }
  function move(direction) {
    const { visible, step, maximum } = metrics();
    list.scrollTo({ left: Math.max(0, Math.min(maximum, list.scrollLeft + direction * visible * step)), behavior: reducedMotion.matches ? "auto" : "smooth" });
  }
  previous.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  list.addEventListener("scroll", queueUpdate, { passive: true });
  window.addEventListener("resize", queueUpdate, { passive: true });
  document.querySelector(".review-arrows").hidden = false;
  update();
})();
