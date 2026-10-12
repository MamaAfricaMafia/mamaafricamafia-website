(() => {
  "use strict";

  const hero = document.querySelector(".hero");
  const media = hero?.querySelector(".hero-media");
  const images = media ? [...media.querySelectorAll(".hero-image")] : [];
  if (!hero || !media || images.length < 2) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const interval = 12000;
  const fadeDuration = 2200;
  const leavingTimers = new Map();
  let activeIndex = Math.max(0, images.findIndex((image) => image.classList.contains("is-active")));
  let playing = false;
  let remaining = interval;
  let deadline = 0;
  let rotationTimer = null;
  let waitingImage = null;

  function scheduleNext() {
    if (!playing || rotationTimer !== null || waitingImage) return;
    deadline = performance.now() + remaining;
    rotationTimer = window.setTimeout(() => {
      rotationTimer = null;
      remaining = 0;
      advance();
    }, remaining);
  }

  function waitForImage(image) {
    waitingImage = image;
    const settled = () => {
      image.removeEventListener("load", settled);
      image.removeEventListener("error", settled);
      waitingImage = null;
      scheduleNext();
    };
    image.addEventListener("load", settled);
    image.addEventListener("error", settled);
    if (image.complete) settled();
  }

  function advance() {
    if (!playing) return;

    // Keep the current photograph visible until the next usable one is ready.
    for (let offset = 1; offset < images.length; offset += 1) {
      const nextIndex = (activeIndex + offset) % images.length;
      const incoming = images[nextIndex];
      if (!incoming.complete) {
        waitForImage(incoming);
        return;
      }
      if (!incoming.naturalWidth) continue;

      const outgoing = images[activeIndex];
      const oldTimer = leavingTimers.get(incoming);
      if (oldTimer !== undefined) {
        window.clearTimeout(oldTimer);
        leavingTimers.delete(incoming);
      }
      incoming.classList.remove("is-leaving");
      incoming.classList.add("is-active");
      outgoing.classList.add("is-leaving");
      outgoing.classList.remove("is-active");
      leavingTimers.set(outgoing, window.setTimeout(() => {
        outgoing.classList.remove("is-leaving");
        leavingTimers.delete(outgoing);
      }, fadeDuration));
      activeIndex = nextIndex;
      remaining = interval;
      scheduleNext();
      return;
    }

    remaining = interval;
    scheduleNext();
  }

  function updatePlayback() {
    playing = !reducedMotion.matches;
    media.classList.toggle("is-paused", !playing);
    if (!playing && rotationTimer !== null) {
      remaining = Math.max(0, deadline - performance.now());
      window.clearTimeout(rotationTimer);
      rotationTimer = null;
    }
    scheduleNext();
  }

  if (typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", updatePlayback);
  } else {
    reducedMotion.addListener(updatePlayback);
  }

  updatePlayback();
})();
