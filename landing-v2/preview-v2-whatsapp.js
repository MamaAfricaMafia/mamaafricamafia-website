(() => {
  "use strict";
  const button = document.querySelector(".whatsapp-float");
  if (!button) return;
  const firstDelay = 5000;
  const visibleDuration = 4500;
  const repeatDelay = 30000;
  let openTimer = null;
  let closeTimer = null;
  let repeatTimer = null;
  let isOpen = false;

  function closeHint() {
    if (!isOpen) return;
    isOpen = false;
    button.classList.remove("is-expanded", "is-personal");
    closeTimer = null;
    repeatTimer = window.setTimeout(openHint, repeatDelay);
  }

  function openHint() {
    repeatTimer = null;
    if (document.visibilityState !== "visible") {
      openTimer = window.setTimeout(openHint, 10000);
      return;
    }
    openTimer = null;
    isOpen = true;
    button.classList.add("is-personal", "is-expanded");
    closeTimer = window.setTimeout(closeHint, visibleDuration);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && !isOpen && openTimer === null && repeatTimer === null) {
      openTimer = window.setTimeout(openHint, firstDelay);
    }
  });

  openTimer = window.setTimeout(openHint, firstDelay);
})();
