(() => {
  "use strict";

  const measurementId = "G-2BJVMMJYWZ";
  const storageKey = "mama-africa-analytics-consent-v1";
  const language = ["en", "it", "fr", "de"].includes(document.documentElement.lang) ? document.documentElement.lang : "en";
  const copy = {
    en: {
      title: "Help us understand visits",
      text: "With your permission, Google Analytics uses analytics cookies to measure page visits and interactions, including clicks to WhatsApp. You can change your choice at any time.",
      accept: "Accept analytics",
      decline: "Decline analytics",
      settings: "Analytics preferences",
      provider: "Google privacy information"
    },
    it: {
      title: "Aiutaci a capire le visite",
      text: "Con il tuo consenso, Google Analytics usa cookie statistici per misurare visite e interazioni, inclusi i clic verso WhatsApp. Puoi cambiare scelta in qualsiasi momento.",
      accept: "Accetta analitica",
      decline: "Rifiuta analitica",
      settings: "Preferenze analitiche",
      provider: "Informazioni sulla privacy di Google"
    },
    fr: {
      title: "Aidez-nous à comprendre les visites",
      text: "Avec votre accord, Google Analytics utilise des cookies de mesure pour analyser les visites et les interactions, y compris les clics vers WhatsApp. Vous pouvez modifier votre choix à tout moment.",
      accept: "Accepter la mesure",
      decline: "Refuser la mesure",
      settings: "Préférences de mesure",
      provider: "Informations de Google sur la confidentialité"
    },
    de: {
      title: "Hilf uns, Besuche zu verstehen",
      text: "Mit deiner Einwilligung verwendet Google Analytics Analyse-Cookies, um Besuche und Interaktionen zu messen, auch Klicks zu WhatsApp. Du kannst deine Entscheidung jederzeit ändern.",
      accept: "Analyse zulassen",
      decline: "Analyse ablehnen",
      settings: "Analyse-Einstellungen",
      provider: "Datenschutzinformationen von Google"
    }
  }[language];

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  const denied = {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied"
  };
  gtag("consent", "default", denied);

  function preference() {
    try { return window.localStorage.getItem(storageKey); } catch (_) { return null; }
  }

  function savePreference(value) {
    try { window.localStorage.setItem(storageKey, value); } catch (_) {}
  }

  function loadAnalytics() {
    if (document.querySelector('script[data-mama-africa-analytics]')) return;
    gtag("consent", "update", { ...denied, analytics_storage: "granted" });
    gtag("js", new Date());
    gtag("config", measurementId);
    const script = document.createElement("script");
    script.async = true;
    script.dataset.mamaAfricaAnalytics = "";
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.append(script);
  }

  function removeAnalyticsCookies() {
    document.cookie.split(";").forEach((item) => {
      const name = item.split("=")[0].trim();
      if (!/^_ga(?:_|$)/.test(name)) return;
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.${window.location.hostname}; SameSite=Lax`;
    });
  }

  const banner = document.createElement("aside");
  banner.className = "analytics-consent";
  banner.setAttribute("role", "region");
  banner.setAttribute("aria-label", copy.title);
  banner.hidden = true;
  const title = document.createElement("strong");
  title.textContent = copy.title;
  const description = document.createElement("p");
  description.textContent = copy.text;
  const provider = document.createElement("a");
  provider.href = "https://policies.google.com/privacy";
  provider.target = "_blank";
  provider.rel = "noopener noreferrer";
  provider.textContent = copy.provider;
  const actions = document.createElement("div");
  actions.className = "analytics-consent-actions";
  const decline = document.createElement("button");
  decline.type = "button";
  decline.textContent = copy.decline;
  const accept = document.createElement("button");
  accept.type = "button";
  accept.textContent = copy.accept;
  actions.append(decline, accept);
  banner.append(title, description, provider, actions);
  document.body.append(banner);

  decline.addEventListener("click", () => {
    const wasGranted = preference() === "granted";
    savePreference("denied");
    gtag("consent", "update", denied);
    removeAnalyticsCookies();
    banner.hidden = true;
    if (wasGranted) window.location.reload();
  });
  accept.addEventListener("click", () => {
    savePreference("granted");
    loadAnalytics();
    banner.hidden = true;
  });

  const settings = document.createElement("button");
  settings.type = "button";
  settings.className = "analytics-settings";
  settings.textContent = copy.settings;
  settings.addEventListener("click", () => {
    banner.hidden = false;
    accept.focus();
  });
  (document.querySelector(".footer-small") || document.body).append(settings);

  if (preference() === "granted") loadAnalytics();
  else if (preference() !== "denied") banner.hidden = false;
})();
