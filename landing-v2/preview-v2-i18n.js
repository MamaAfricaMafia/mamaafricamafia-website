(() => {
  "use strict";
  // Each row is [English source, Italian, French, German].
  const rows = [
    ["Mama Africa Mafia | Island experiences, created by local women", "Mama Africa Mafia | Esperienze sull'isola, create da donne del posto", "Mama Africa Mafia | Expériences insulaires créées par des femmes de l'île", "Mama Africa Mafia | Inselerlebnisse von einheimischen Frauen"],
    ["Skip to content", "Vai al contenuto", "Aller au contenu", "Zum Inhalt springen"],
    ["Our experiences", "Le nostre esperienze", "Nos expériences", "Unsere Erlebnisse"],
    ["Our story", "La nostra storia", "Notre histoire", "Unsere Geschichte"],
    ["Language", "Lingua", "Langue", "Sprache"],
    ["Explore Mafia Island.", "Esplora l'isola di Mafia.", "Explorez l'île de Mafia.", "Entdecke Mafia Island."],
    ["Empower Local Women.", "Sostieni le donne del posto.", "Soutenez les femmes de l'île.", "Stärke die Frauen vor Ort."],
    ["Discover Mafia Island through authentic experiences organized by the women who call it home.", "Scopri l'isola di Mafia con esperienze autentiche organizzate dalle donne che la chiamano casa.", "Découvrez l'île de Mafia à travers des expériences authentiques organisées par les femmes qui y vivent.", "Entdecke Mafia Island bei authentischen Erlebnissen, die von den Frauen der Insel organisiert werden."],
    ["on Tripadvisor ↗", "su Tripadvisor ↗", "sur Tripadvisor ↗", "auf Tripadvisor ↗"],
    ["Find your island experience", "Trova la tua esperienza sull'isola", "Trouvez votre expérience sur l'île", "Finde dein Inselerlebnis"],
    ["Meet the story behind Mama Africa", "Scopri la storia di Mama Africa", "Découvrez l'histoire de Mama Africa", "Entdecke die Geschichte von Mama Africa"],
    ["Mafia Island, Tanzania", "Isola di Mafia, Tanzania", "Île de Mafia, Tanzanie", "Mafia Island, Tansania"],
    ["Created on the island.", "Nata sull'isola.", "Née sur l'île.", "Auf der Insel entstanden."],
    ["Built and run by its women.", "Creata e gestita dalle sue donne.", "Créée et dirigée par ses femmes.", "Von den Frauen der Insel aufgebaut und geführt."],
    ["Choose an experience.", "Scegli un'esperienza.", "Choisissez une expérience.", "Wähle ein Erlebnis."],
    ["Plan it directly with our team.", "Organizzala direttamente con il nostro team.", "Organisez-la directement avec notre équipe.", "Plane es direkt mit unserem Team."],
    ["A local business with a story to share", "Un'impresa locale con una storia da raccontare", "Une entreprise locale avec une histoire à raconter", "Ein lokales Unternehmen mit einer Geschichte"],
    ["Island experiences to explore", "Esperienze da vivere sull'isola", "Des expériences à vivre sur l'île", "Erlebnisse auf der Insel"],
    ["Find your kind", "Trova la tua", "Trouvez votre", "Finde deinen"],
    ["of island day.", "giornata sull'isola.", "journée sur l'île.", "perfekten Inseltag."],
    ["From ocean encounters to island communities, there is more to Mafia than a day at the beach. Open an experience to explore its description and a suggested itinerary.", "Dagli incontri in mare alla vita delle comunità locali, Mafia offre molto più di una giornata in spiaggia. Apri un'esperienza per leggere la descrizione e un itinerario suggerito.", "Des rencontres en mer à la vie des communautés locales, Mafia offre bien plus qu'une journée à la plage. Ouvrez une expérience pour découvrir sa description et un itinéraire suggéré.", "Von Begegnungen im Meer bis zum Leben der Inselgemeinschaften bietet Mafia mehr als einen Tag am Strand. Öffne ein Erlebnis, um die Beschreibung und einen Routenvorschlag zu lesen."],
    ["All experiences", "Tutte le esperienze", "Toutes les expériences", "Alle Erlebnisse"],
    ["Ocean & reefs", "Mare e barriere coralline", "Mer et récifs", "Meer und Riffe"],
    ["Wildlife", "Fauna selvatica", "Faune sauvage", "Tierwelt"],
    ["Culture & villages", "Cultura e villaggi", "Culture et villages", "Kultur und Dörfer"],
    ["Island & nature", "Isola e natura", "Île et nature", "Insel und Natur"],
    ["Sort by", "Ordina per", "Trier par", "Sortieren nach"],
    ["Featured", "In evidenza", "À la une", "Empfohlen"],
    ["Price: low to high", "Prezzo: dal più basso", "Prix : croissant", "Preis: aufsteigend"],
    ["Price: high to low", "Prezzo: dal più alto", "Prix : décroissant", "Preis: absteigend"],
    ["Prices in USD · Confirm availability on WhatsApp", "Prezzi in USD · Verifica la disponibilità su WhatsApp", "Prix en USD · Confirmez les disponibilités sur WhatsApp", "Preise in USD · Verfügbarkeit per WhatsApp bestätigen"],
    ["No experiences match this filter. Choose another category.", "Nessuna esperienza corrisponde a questo filtro. Scegli un'altra categoria.", "Aucune expérience ne correspond à ce filtre. Choisissez une autre catégorie.", "Keine Erlebnisse für diesen Filter. Wähle eine andere Kategorie."],
    ["Previous", "Precedente", "Précédent", "Zurück"],
    ["Next", "Successiva", "Suivant", "Weiter"],
    ["Enable JavaScript to open the tour cards. You can reach Mama Africa Mafia on WhatsApp at +255 692 844 498.", "Attiva JavaScript per aprire le schede delle escursioni. Puoi contattare Mama Africa Mafia su WhatsApp al +255 692 844 498.", "Activez JavaScript pour ouvrir les fiches des excursions. Vous pouvez contacter Mama Africa Mafia sur WhatsApp au +255 692 844 498.", "Aktiviere JavaScript, um die Tourenkarten zu öffnen. Du erreichst Mama Africa Mafia per WhatsApp unter +255 692 844 498."],
    ["The women behind Mama Africa", "Le donne dietro Mama Africa", "Les femmes derrière Mama Africa", "Die Frauen hinter Mama Africa"],
    ["She began", "Lei ha iniziato", "Elle a commencé", "Sie begann"],
    ["on the beach.", "sulla spiaggia.", "sur la plage.", "am Strand."],
    ["They built", "Insieme hanno creato", "Ensemble, elles ont bâti", "Gemeinsam bauten sie"],
    ["a business.", "un'impresa.", "une entreprise.", "ein Unternehmen auf."],
    ["Come and be part of the next chapter", "Entra a far parte del prossimo capitolo", "Prenez part au prochain chapitre", "Sei beim nächsten Kapitel dabei"],
    ["Zuby · Founder of Mama Africa Mafia", "Zuby · Fondatrice di Mama Africa Mafia", "Zuby · Fondatrice de Mama Africa Mafia", "Zuby · Gründerin von Mama Africa Mafia"],
    ["Mama Africa Mafia was created by Zuby and is run by local women. Their work is rooted in the island, its community and a determination to build something of their own.", "Mama Africa Mafia è stata fondata da Zuby ed è gestita da donne del posto. Il loro lavoro nasce dall'isola, dalla sua comunità e dalla volontà di costruire qualcosa di proprio.", "Mama Africa Mafia a été fondée par Zuby et est dirigée par des femmes de l'île. Leur activité est ancrée dans l'île, sa communauté et leur volonté de construire quelque chose qui leur appartienne.", "Mama Africa Mafia wurde von Zuby gegründet und wird von Frauen der Insel geführt. Ihre Arbeit ist in der Insel und ihrer Gemeinschaft verwurzelt und entspringt dem Wunsch, etwas Eigenes aufzubauen."],
    ["After years in tourist hospitality, Zuby lost her job during the pandemic. With her family relying on her income, she began selling food and drinks on the beach.", "Dopo anni nel settore dell'ospitalità turistica, Zuby ha perso il lavoro durante la pandemia. La sua famiglia dipendeva dal suo reddito, così ha iniziato a vendere cibo e bevande sulla spiaggia.", "Après des années dans l'accueil touristique, Zuby a perdu son emploi pendant la pandémie. Sa famille dépendait de ses revenus ; elle a alors commencé à vendre de la nourriture et des boissons sur la plage.", "Nach Jahren in der Tourismusbranche verlor Zuby während der Pandemie ihre Arbeit. Da ihre Familie auf ihr Einkommen angewiesen war, begann sie, am Strand Essen und Getränke zu verkaufen."],
    ["That beginning grew into a local restaurant, with other women joining the work. When guests started asking about island excursions, Zuby sought funding, invested in a boat and opened a new chapter on the water.", "Da quell'inizio è nato un ristorante locale, al quale si sono unite altre donne. Quando gli ospiti hanno iniziato a chiedere escursioni sull'isola, Zuby ha cercato finanziamenti, investito in una barca e avviato un nuovo capitolo in mare.", "Ces débuts ont donné naissance à un restaurant local, rejoint par d'autres femmes. Lorsque les visiteurs ont commencé à demander des excursions, Zuby a cherché des financements, investi dans un bateau et ouvert un nouveau chapitre en mer.", "Aus diesem Anfang entstand ein lokales Restaurant, in dem weitere Frauen mitarbeiteten. Als Gäste nach Inselausflügen fragten, suchte Zuby nach Finanzierung, investierte in ein Boot und begann ein neues Kapitel auf dem Wasser."],
    ["Today, Mama Africa brings together a local network of women and other people across the community. The ambition is simple: build an independent business, create opportunity and welcome visitors to Mafia Island.", "Oggi Mama Africa riunisce una rete locale di donne e altre persone della comunità. L'obiettivo è semplice: costruire un'impresa indipendente, creare opportunità e accogliere i visitatori sull'isola di Mafia.", "Aujourd'hui, Mama Africa réunit un réseau local de femmes et d'autres membres de la communauté. Son ambition est simple : bâtir une entreprise indépendante, créer des opportunités et accueillir les visiteurs sur l'île de Mafia.", "Heute verbindet Mama Africa ein lokales Netzwerk aus Frauen und weiteren Menschen der Gemeinschaft. Das Ziel ist einfach: ein unabhängiges Unternehmen aufbauen, Chancen schaffen und Gäste auf Mafia Island willkommen heißen."],
    ["Local roots", "Radici locali", "Racines locales", "Lokale Wurzeln"],
    ["Women-led enterprise", "Impresa guidata da donne", "Entreprise dirigée par des femmes", "Von Frauen geführtes Unternehmen"],
    ["A personal welcome", "Un'accoglienza personale", "Un accueil chaleureux", "Persönlicher Empfang"],
    ["Guest experiences", "Esperienze degli ospiti", "Expériences des visiteurs", "Erlebnisse unserer Gäste"],
    ["Island days,", "Giornate sull'isola,", "Des journées sur l'île,", "Inseltage,"],
    ["remembered.", "da ricordare.", "inoubliables.", "die in Erinnerung bleiben."],
    ["Snorkelling, sandbanks and island adventures, through the experiences guests shared about Zuby’s team.", "Snorkeling, banchi di sabbia e avventure sull'isola raccontati dagli ospiti del team di Zuby.", "Snorkeling, bancs de sable et aventures insulaires racontés par les visiteurs de l'équipe de Zuby.", "Schnorcheln, Sandbänke und Inselabenteuer, wie Gäste sie mit Zubys Team erlebt haben."],
    ["Read source", "Leggi la fonte", "Lire la source", "Quelle lesen"],
    ["Rating not available", "Valutazione non disponibile", "Note indisponible", "Bewertung nicht verfügbar"],
    ["Kitutia reef & sandbank", "Barriera di Kitutia e banco di sabbia", "Récif de Kitutia et banc de sable", "Kitutia-Riff und Sandbank"],
    ["A private outing to Kitutia and the reef featured vibrant snorkeling and a freshly grilled fish lunch on an isolated sandbank.", "Un'escursione privata a Kitutia e alla barriera corallina, con snorkeling tra i pesci e pranzo di pesce appena grigliato su un banco di sabbia isolato.", "Une sortie privée à Kitutia et sur le récif, avec snorkeling parmi les poissons et déjeuner de poisson fraîchement grillé sur un banc de sable isolé.", "Ein privater Ausflug nach Kitutia und zum Riff mit lebendigem Schnorchelerlebnis und frisch gegrilltem Fisch auf einer abgelegenen Sandbank."],
    ["Lagoon, ruins & Chole", "Laguna, rovine e Chole", "Lagon, ruines et Chole", "Lagune, Ruinen und Chole"],
    ["Visited Blue Lagoon, Kua ruins and Chole village, followed by grilled fish on an ocean sandbank; praises Zuby’s reliability.", "Visita alla Blue Lagoon, alle rovine di Kua e al villaggio di Chole, seguita da pesce grigliato su un banco di sabbia; l'ospite apprezza l'affidabilità di Zuby.", "Visite du Blue Lagoon, des ruines de Kua et du village de Chole, suivie d'un poisson grillé sur un banc de sable ; le visiteur souligne la fiabilité de Zuby.", "Besuch der Blue Lagoon, der Kua-Ruinen und des Dorfes Chole, gefolgt von gegrilltem Fisch auf einer Sandbank; der Gast lobt Zubys Zuverlässigkeit."],
    ["Snorkelling & Chole Island", "Snorkeling e isola di Chole", "Snorkeling et île de Chole", "Schnorcheln und Chole Island"],
    ["Snorkeling, a sandbank lunch and a Chole Island visit delivered good value while supporting the local community.", "Snorkeling, pranzo su un banco di sabbia e visita all'isola di Chole hanno offerto un buon rapporto qualità-prezzo sostenendo la comunità locale.", "Snorkeling, déjeuner sur un banc de sable et visite de l'île de Chole : un bon rapport qualité-prix tout en soutenant la communauté locale.", "Schnorcheln, ein Mittagessen auf einer Sandbank und ein Besuch auf Chole Island boten ein gutes Preis-Leistungs-Verhältnis und unterstützten die lokale Gemeinschaft."],
    ["Local boat adventures", "Avventure in barca con guide locali", "Aventures en bateau avec des guides locaux", "Bootsabenteuer mit Einheimischen"],
    ["Recommends the local boat team for fishing, snorkeling, sunset cruises and marine adventures, with personal attention and local knowledge.", "Consiglia il team locale per pesca, snorkeling, crociere al tramonto e avventure in mare, per l'attenzione personale e la conoscenza del luogo.", "Recommande l'équipe locale pour la pêche, le snorkeling, les croisières au coucher du soleil et les sorties en mer, saluant son accueil personnalisé et sa connaissance des lieux.", "Empfiehlt das lokale Bootsteam für Angeln, Schnorcheln, Sonnenuntergangsfahrten und Ausflüge auf dem Meer sowie seine persönliche Betreuung und Ortskenntnis."],
    ["A tailored island day", "Una giornata su misura sull'isola", "Une journée sur l'île sur mesure", "Ein Inseltag nach Wunsch"],
    ["A tailored day combined snorkeling, Chole Island, Blue Lagoon, a sandbank meal and a sunset cruise with local guides.", "Una giornata su misura tra snorkeling, isola di Chole, Blue Lagoon, pranzo su un banco di sabbia e crociera al tramonto con guide locali.", "Une journée sur mesure associant snorkeling, île de Chole, Blue Lagoon, repas sur un banc de sable et croisière au coucher du soleil avec des guides locaux.", "Ein Tag nach Wunsch mit Schnorcheln, Chole Island, Blue Lagoon, einer Mahlzeit auf einer Sandbank und einer Sonnenuntergangsfahrt mit lokalen Guides."],
    ["Guided snorkelling", "Snorkeling guidato", "Snorkeling guidé", "Geführtes Schnorcheln"],
    ["Recalls a memorable guided snorkeling excursion arranged by the Mafia Mammas.", "Ricorda una memorabile escursione guidata di snorkeling organizzata dalle Mafia Mammas.", "Évoque une sortie de snorkeling guidée mémorable organisée par les Mafia Mammas.", "Erinnert sich an einen unvergesslichen geführten Schnorchelausflug mit den Mafia Mammas."],
    ["Snorkelling & sunsets", "Snorkeling e tramonti", "Snorkeling et couchers de soleil", "Schnorcheln und Sonnenuntergänge"],
    ["Recommends snorkeling and sunset-cruise trips organized at fair prices by Zuby’s team.", "Consiglia lo snorkeling e le crociere al tramonto organizzati a prezzi equi dal team di Zuby.", "Recommande les sorties de snorkeling et les croisières au coucher du soleil proposées à des prix justes par l'équipe de Zuby.", "Empfiehlt die Schnorchel- und Sonnenuntergangsfahrten, die Zubys Team zu fairen Preisen organisiert."],
    ["Whale shark encounter", "Incontro con lo squalo balena", "Rencontre avec un requin-baleine", "Begegnung mit einem Walhai"],
    ["Describes a whale-shark excursion arranged by Zuby, with six swims and a boat away from other operators.", "Descrive un'escursione alla ricerca degli squali balena organizzata da Zuby, con sei entrate in acqua e una barca lontana dagli altri operatori.", "Décrit une excursion à la recherche des requins-baleines organisée par Zuby, avec six mises à l'eau et un bateau éloigné des autres opérateurs.", "Beschreibt einen von Zuby organisierten Walhai-Ausflug mit sechs Badegängen und einem Boot abseits anderer Anbieter."],
    ["Lighthouse tour", "Escursione al faro", "Excursion au phare", "Ausflug zum Leuchtturm"],
    ["Highly recommends the Lighthouse Tour and the good value of locally organized activities.", "Consiglia vivamente l'escursione al faro e il buon rapporto qualità-prezzo delle attività organizzate localmente.", "Recommande vivement l'excursion au phare et le bon rapport qualité-prix des activités organisées localement.", "Empfiehlt den Ausflug zum Leuchtturm und das gute Preis-Leistungs-Verhältnis der vor Ort organisierten Aktivitäten sehr."],
    ["Whale shark outing", "Escursione con gli squali balena", "Sortie aux requins-baleines", "Walhai-Ausflug"],
    ["Recalls an exciting, good-value whale-shark outing arranged through the team.", "Ricorda un'entusiasmante escursione con gli squali balena organizzata dal team, con un buon rapporto qualità-prezzo.", "Évoque une sortie passionnante à la rencontre des requins-baleines, organisée par l'équipe à un bon rapport qualité-prix.", "Erinnert sich an einen spannenden, preiswerten Walhai-Ausflug, den das Team organisiert hat."],
    ["Two island trips", "Due escursioni sull'isola", "Deux excursions sur l'île", "Zwei Inselausflüge"],
    ["Booked two trips with Zuby and praises their organization and her flexible approach.", "Ha prenotato due escursioni con Zuby e ne apprezza l'organizzazione e la flessibilità.", "A réservé deux excursions avec Zuby et apprécie leur organisation ainsi que sa flexibilité.", "Buchte zwei Ausflüge bei Zuby und lobt die Organisation und ihre Flexibilität."],
    ["11 tour review summaries", "11 riepiloghi di recensioni sulle escursioni", "11 résumés d'avis sur les excursions", "11 Zusammenfassungen von Tourbewertungen"],
    ["Reviews were posted for", "Le recensioni sono state pubblicate per", "Les avis ont été publiés pour", "Die Bewertungen wurden veröffentlicht für"],
    [". These are editorial summaries; open each source to read the original feedback.", ". Questi sono riepiloghi redazionali; apri ciascuna fonte per leggere il commento originale.", ". Il s'agit de résumés éditoriaux ; ouvrez chaque source pour lire l'avis original.", ". Dies sind redaktionelle Zusammenfassungen; öffne die jeweilige Quelle, um die ursprüngliche Bewertung zu lesen."],
    ["A conversation away", "Basta un messaggio", "À un message de vous", "Nur eine Nachricht entfernt"],
    ["Your island day", "La tua giornata sull'isola", "Votre journée sur l'île", "Dein Tag auf der Insel"],
    ["starts with a hello.", "inizia con un saluto.", "commence par un bonjour.", "beginnt mit einem Hallo."],
    ["Tell us your dates, who you’re travelling with and the experience you have in mind. We’ll talk through the details with you on WhatsApp.", "Dicci quando viaggi, con chi e quale esperienza vorresti fare. Definiremo insieme i dettagli su WhatsApp.", "Indiquez-nous vos dates, avec qui vous voyagez et l'expérience qui vous intéresse. Nous en discuterons ensemble sur WhatsApp.", "Sag uns, wann und mit wem du reist und welches Erlebnis du dir vorstellst. Wir besprechen die Einzelheiten mit dir per WhatsApp."],
    ["Plan my day on WhatsApp", "Organizza la giornata su WhatsApp", "Organiser ma journée sur WhatsApp", "Meinen Tag per WhatsApp planen"],
    ["Details and availability are confirmed directly with the team.", "Dettagli e disponibilità vengono confermati direttamente dal team.", "Les détails et les disponibilités sont confirmés directement par l'équipe.", "Details und Verfügbarkeit bestätigt dir das Team direkt."],
    ["Explore the island.", "Esplora l'isola.", "Explorez l'île.", "Entdecke die Insel."],
    ["Support a locally run, women-led business.", "Sostieni un'impresa locale guidata da donne.", "Soutenez une entreprise locale dirigée par des femmes.", "Unterstütze ein lokales Unternehmen, das von Frauen geführt wird."],
    ["Back to the top ↑", "Torna all'inizio ↑", "Retour en haut ↑", "Nach oben ↑"],
    ["Powered by Rosetta Ventures Digital Solutions", "Con il supporto di Rosetta Ventures Digital Solutions", "Avec le soutien de Rosetta Ventures Digital Solutions", "Unterstützt von Rosetta Ventures Digital Solutions"],
    ["Hi, how can I help you?", "Ciao, come posso aiutarti?", "Bonjour, comment puis-je vous aider ?", "Hallo, wie kann ich dir helfen?"],
    ["Book Now", "Prenota ora", "Réserver", "Jetzt buchen"],
    ["Seasonal", "Stagionale", "Saisonnier", "Saisonal"],
    ["Explore this tour", "Scopri l'escursione", "Découvrir cette excursion", "Tour entdecken"],
    ["About this tour", "Informazioni sull'escursione", "À propos de cette excursion", "Über diese Tour"],
    ["Your day, step by step", "La giornata, passo dopo passo", "Votre journée, étape par étape", "Dein Tag, Schritt für Schritt"],
    ["A suggested day on the water", "Un itinerario suggerito in mare", "Un programme suggéré en mer", "Ein Vorschlag für deinen Tag auf dem Wasser"],
    ["Continue the conversation on WhatsApp", "Continua la conversazione su WhatsApp", "Poursuivre la conversation sur WhatsApp", "Gespräch per WhatsApp fortsetzen"],
    ["WhatsApp contact to be confirmed.", "Contatto WhatsApp da confermare.", "Contact WhatsApp à confirmer.", "WhatsApp-Kontakt noch zu bestätigen."]
  ];

  const localeIndex = { en: 0, it: 1, fr: 2, de: 3 };
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang");
  let saved = "";
  try { saved = window.localStorage.getItem("mama-africa-language") || ""; } catch (_) {}
  const lang = Object.hasOwn(localeIndex, requested) ? requested : Object.hasOwn(localeIndex, saved) ? saved : "en";
  const dictionary = new Map(rows.map((row) => [row[0], row[localeIndex[lang]]]));
  const tr = (source) => dictionary.get(source) || source;
  document.documentElement.lang = lang;
  const picker = document.querySelector("#site-language");
  if (picker) {
    picker.value = lang;
    picker.setAttribute("aria-label", tr("Language"));
    picker.addEventListener("change", () => {
      const selected = picker.value;
      if (!Object.hasOwn(localeIndex, selected)) return;
      try { window.localStorage.setItem("mama-africa-language", selected); } catch (_) {}
      const next = new URL(window.location.href);
      if (selected === "en") next.searchParams.delete("lang");
      else next.searchParams.set("lang", selected);
      window.location.assign(next.href);
    });
  }

  const templates = {
    en: {
      general: "Hello Mama Africa! I'm planning a visit to Mafia Island. Could you please help me choose an experience and share availability and booking details?",
      booking: (name) => `Hello Mama Africa! I'm interested in booking the ${name} experience. Could you please share availability, the final itinerary and price?`,
      bookLabel: (name) => `Book ${name} on WhatsApp`,
      cardLabel: (expanded, name) => `${expanded ? "Close" : "Open"} ${name} tour details`,
      count: (n) => `${n} ${n === 1 ? "experience" : "experiences"}`,
      showing: (a, b, n) => `Showing ${a}–${b} of ${n} experiences`,
      page: (a, n) => `Page ${a} of ${n}`,
      reviews: (a, b, n) => `${a}–${b} of ${n} tour review summaries`,
      noMatch: "No experiences match this filter.",
      previousPage: "Previous page of experiences",
      nextPage: "Next page of experiences",
      reviewSource: (name) => `Read the source review by ${name}`,
      image: (name) => `Illustrative preview image for ${name}`
    },
    it: {
      general: "Ciao Mama Africa! Sto organizzando una visita all'isola di Mafia. Potete aiutarmi a scegliere un'esperienza e indicarmi disponibilità e dettagli di prenotazione?",
      booking: (name) => `Ciao Mama Africa! Vorrei prenotare l'esperienza ${name}. Potete indicarmi disponibilità, itinerario definitivo e prezzo?`,
      bookLabel: (name) => `Prenota ${name} su WhatsApp`,
      cardLabel: (expanded, name) => `${expanded ? "Chiudi" : "Apri"} i dettagli di ${name}`,
      count: (n) => `${n} ${n === 1 ? "esperienza" : "esperienze"}`,
      showing: (a, b, n) => `Esperienze ${a}–${b} di ${n}`,
      page: (a, n) => `Pagina ${a} di ${n}`,
      reviews: (a, b, n) => `Riepiloghi ${a}–${b} di ${n}`,
      noMatch: "Nessuna esperienza corrisponde a questo filtro.",
      previousPage: "Pagina precedente delle esperienze",
      nextPage: "Pagina successiva delle esperienze",
      reviewSource: (name) => `Leggi la recensione originale di ${name}`,
      image: (name) => `Immagine illustrativa per ${name}`
    },
    fr: {
      general: "Bonjour Mama Africa ! Je prépare une visite sur l'île de Mafia. Pouvez-vous m'aider à choisir une expérience et m'indiquer les disponibilités et les détails de réservation ?",
      booking: (name) => `Bonjour Mama Africa ! Je souhaite réserver l'expérience ${name}. Pouvez-vous m'indiquer les disponibilités, l'itinéraire définitif et le prix ?`,
      bookLabel: (name) => `Réserver ${name} sur WhatsApp`,
      cardLabel: (expanded, name) => `${expanded ? "Fermer" : "Ouvrir"} les détails de ${name}`,
      count: (n) => `${n} expérience${n > 1 ? "s" : ""}`,
      showing: (a, b, n) => `Expériences ${a}–${b} sur ${n}`,
      page: (a, n) => `Page ${a} sur ${n}`,
      reviews: (a, b, n) => `Résumés ${a}–${b} sur ${n}`,
      noMatch: "Aucune expérience ne correspond à ce filtre.",
      previousPage: "Page précédente des expériences",
      nextPage: "Page suivante des expériences",
      reviewSource: (name) => `Lire l'avis original de ${name}`,
      image: (name) => `Image illustrative pour ${name}`
    },
    de: {
      general: "Hallo Mama Africa! Ich plane einen Besuch auf Mafia Island. Könnt ihr mir helfen, ein Erlebnis auszuwählen und mir Verfügbarkeit und Buchungsdetails mitteilen?",
      booking: (name) => `Hallo Mama Africa! Ich interessiere mich für ${name}. Könnt ihr mir Verfügbarkeit, den endgültigen Ablauf und den Preis mitteilen?`,
      bookLabel: (name) => `${name} per WhatsApp buchen`,
      cardLabel: (expanded, name) => `Tourdetails zu ${name} ${expanded ? "schließen" : "öffnen"}`,
      count: (n) => `${n} ${n === 1 ? "Erlebnis" : "Erlebnisse"}`,
      showing: (a, b, n) => `Erlebnisse ${a}–${b} von ${n}`,
      page: (a, n) => `Seite ${a} von ${n}`,
      reviews: (a, b, n) => `Zusammenfassungen ${a}–${b} von ${n}`,
      noMatch: "Keine Erlebnisse für diesen Filter.",
      previousPage: "Vorherige Erlebnisseite",
      nextPage: "Nächste Erlebnisseite",
      reviewSource: (name) => `Originalbewertung von ${name} lesen`,
      image: (name) => `Beispielbild für ${name}`
    }
  };
  window.MAMA_AFRICA_I18N = { lang, tr, ...templates[lang] };

  if (lang !== "en") {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement?.closest("script, style")) continue;
      const source = node.nodeValue.trim();
      if (dictionary.has(source)) node.nodeValue = node.nodeValue.replace(source, tr(source));
    }
    document.title = tr(document.title);
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content = {
        it: "Esplora l'isola di Mafia con Mama Africa Mafia, un'impresa creata e gestita da donne del posto. Scopri snorkeling, banchi di sabbia e lagune. Organizza la tua giornata su WhatsApp.",
        fr: "Explorez l'île de Mafia avec Mama Africa Mafia, une entreprise créée et dirigée par des femmes de l'île. Découvrez snorkeling, bancs de sable et lagunes. Organisez votre journée sur WhatsApp.",
        de: "Entdecke Mafia Island mit Mama Africa Mafia, einem Unternehmen von Frauen der Insel. Erlebe Schnorcheln, Sandbänke und Lagunen. Plane deinen Tag per WhatsApp."
      }[lang];
    }
    const attributes = {
      "Mama Africa Mafia home": { it: "Pagina iniziale di Mama Africa Mafia", fr: "Accueil Mama Africa Mafia", de: "Startseite Mama Africa Mafia" },
      "Main navigation": { it: "Navigazione principale", fr: "Navigation principale", de: "Hauptnavigation" },
      "Our approach": { it: "Il nostro approccio", fr: "Notre approche", de: "Unser Ansatz" },
      "Filter experiences": { it: "Filtra le esperienze", fr: "Filtrer les expériences", de: "Erlebnisse filtern" },
      "Experience pages": { it: "Pagine delle esperienze", fr: "Pages des expériences", de: "Erlebnisseiten" },
      "Tour review summaries": { it: "Riepiloghi delle recensioni", fr: "Résumés des avis", de: "Zusammenfassungen der Tourbewertungen" },
      "Previous tour reviews": { it: "Recensioni precedenti", fr: "Avis précédents", de: "Vorherige Bewertungen" },
      "Next tour reviews": { it: "Recensioni successive", fr: "Avis suivants", de: "Nächste Bewertungen" },
      "Rated 5 out of 5": { it: "Valutazione: 5 su 5", fr: "Note : 5 sur 5", de: "Bewertung: 5 von 5" },
      "Chat with Zuby on WhatsApp": { it: "Scrivi a Zuby su WhatsApp", fr: "Écrire à Zuby sur WhatsApp", de: "Zuby per WhatsApp kontaktieren" },
      "Zuby, founder of Mama Africa Mafia, beside the sea": { it: "Zuby, fondatrice di Mama Africa Mafia, vicino al mare", fr: "Zuby, fondatrice de Mama Africa Mafia, au bord de la mer", de: "Zuby, Gründerin von Mama Africa Mafia, am Meer" },
      "Mama Africa — Mafia Island, Tanzania": { it: "Mama Africa — Isola di Mafia, Tanzania", fr: "Mama Africa — île de Mafia, Tanzanie", de: "Mama Africa — Mafia Island, Tansania" },
      "Swahili Local Restaurants on Tripadvisor, rated 4.9 out of 5": { it: "Swahili Local Restaurants su Tripadvisor, valutazione 4,9 su 5", fr: "Swahili Local Restaurants sur Tripadvisor, note de 4,9 sur 5", de: "Swahili Local Restaurants auf Tripadvisor, bewertet mit 4,9 von 5" }
    };
    document.querySelectorAll("[aria-label], [title], [alt]").forEach((element) => {
      ["aria-label", "title", "alt"].forEach((attribute) => {
        const source = element.getAttribute(attribute);
        if (!source) return;
        let localized = attributes[source]?.[lang];
        if (!localized && source.startsWith("Read the source review by ")) localized = templates[lang].reviewSource(source.slice(26));
        if (localized) element.setAttribute(attribute, localized);
      });
    });
    document.querySelectorAll(".review-card time[datetime]").forEach((time) => {
      const date = new Date(`${time.dateTime}T12:00:00Z`);
      if (!Number.isNaN(date.getTime())) time.textContent = new Intl.DateTimeFormat(lang, { month: "short", year: "numeric", timeZone: "UTC" }).format(date);
    });
    const config = window.MAMA_AFRICA_PREVIEW_V2;
    if (config) {
      config.generalMessage = templates[lang].general;
      const translatedTours = window.MAMA_AFRICA_TOUR_TRANSLATIONS?.[lang] || {};
      config.tours.forEach((tour) => {
        const translated = translatedTours[tour.id];
        if (!translated) return;
        tour.subtitle = translated.subtitle;
        tour.description = translated.description;
        tour.planningNote = translated.planningNote;
        tour.steps = translated.steps.map(([title, text]) => ({ title, text }));
        tour.alt = templates[lang].image(tour.name);
      });
    }
  }
})();
