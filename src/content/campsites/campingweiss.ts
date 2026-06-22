import type { CampsiteConfig } from "../types";

const IMG = "/campsites/campingweiss";

const campingweiss: CampsiteConfig = {
  name: "Camping Weiss am Bodensee",
  shortName: "Weiss",
  slug: "campingweiss",
  ort: "Bregenz",
  region: "Vorarlberg",
  brandKind: "Camping",
  // KEIN see-Feld: der Platz liegt fünf Gehminuten vom Bodensee, nicht direkt am Ufer (near ≠ on).
  regionLong: "Bodensee · Bregenz · Vorarlberg · Österreich",

  heroVariant: "center",

  claim: "Seit 1965 dein Zuhause am Rande des Bodensees",
  claimEmphasis: "am Rande des Bodensees",
  emailDetail: "euer eigener Bauernhof mit Tieren direkt am Platz",
  intro:
    "Ein traditionsreicher Familienplatz am Rande des Bodensees: ebene Stellplätze, ein eigener Bauernhof mit Tieren und das Stüble s’Annele mit Most und Schnaps vom eigenen Hof — und in fünf Gehminuten stehst du am Seeufer.",

  logo: { src: `${IMG}/logo.png`, alt: "Camping Weiss Logo" },

  statement: {
    text: "Seit 1965 führt unsere Familie den Platz — mit eigenem Hof, eigenem Stüble und dem Bodensee gleich um die Ecke.",
    emphasis: "Seit 1965",
  },

  pillars: [
    {
      title: "Tradition seit 1965",
      text: "Schon 1965 begrüßte unsere Familie hier die ersten Gäste — die Lage am Bodensee ist geblieben.",
      image: { src: `${IMG}/pillar-tradition.webp`, alt: "Historische Luftaufnahme von Camping Weiss am Bodensee" },
    },
    {
      title: "Persönlich empfangen",
      text: "An unserer Anmeldung wirst du persönlich begrüßt — familiär geführt wie schon vor Jahrzehnten.",
      image: { src: `${IMG}/pillar-empfang.webp`, alt: "Anmeldung und Empfang von Camping Weiss" },
    },
    {
      title: "Bodensee & Pfänder",
      text: "Fünf Gehminuten zum Seeufer und der Pfänder als Hausberg — Natur liegt direkt vorm Vorzelt.",
      image: { src: `${IMG}/pillar-pfaender.webp`, alt: "Blick vom Pfänder über Bregenz und den Bodensee" },
    },
  ],

  usps: [
    "Seit 1965 familiengeführt",
    "Eigener Bauernhof mit Tieren",
    "Stüble mit Hofprodukten",
    "Warmwasser & Strom inklusive",
    "5 Gehminuten zum Bodensee",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Bald 60 Jahre Gastfreundschaft am See",
    headingEmphasis: "60 Jahre",
    intro:
      "Was 1965 begann, führen wir bis heute mit Herz: ein ruhiger, gepflegter Platz, kurze Wege zum Bodensee und in die Bregenzer Altstadt, freier Strom und gratis Warmwasser — und Tiere, über die sich deine Kinder freuen.",
  },

  awards: [],

  saison: { von: "März", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero.webp`, alt: "Gastgarten und Campingplatz von Camping Weiss am Bodensee" },
  },

  camping: {
    heading: "Der Platz und sein Stüble",
    intro:
      "Ein familiärer Platz von März bis Oktober mit ebenen Stellplätzen, zwei modernen Sanitärhäusern und gratis Warmwasser — mittendrin das Stüble s’Annele mit Hofprodukten.",
    features: [
      {
        title: "Gaststube s’Annele",
        text: "In gemütlicher Selbstbedienungs-Stube genießt du kalte und warme Snacks sowie kühle Getränke.",
        image: { src: `${IMG}/stueble.webp`, alt: "Gemütliche Sitzecke in der Gaststube s’Annele" },
      },
      {
        title: "Most & Schnaps vom Hof",
        text: "An der Theke gibt es Most, Schnaps und Mostessig aus unserer eigenen Landwirtschaft.",
        image: { src: `${IMG}/theke.webp`, alt: "Theke im Stüble mit hofeigenen Produkten" },
      },
      {
        title: "Lauschiger Gastgarten",
        text: "Im überdachten Gastgarten lässt du den Tag am See bei einem kühlen Bier ausklingen.",
        image: { src: `${IMG}/gastgarten.webp`, alt: "Überdachter Gastgarten beim Stüble s’Annele" },
      },
    ],
  },

  anreise: {
    heading: "Anreise nach Bregenz",
    modes: [
      { title: "Mit dem Auto", text: "Über die A14 bis Bregenz, dann Richtung Seeufer zum Brachsenweg — Parken direkt am Platz." },
      { title: "Mit Bahn & Bus", text: "Bahnhof Bregenz, von dort wenige Minuten zum Platz — die Bushaltestelle liegt direkt am Campingplatz." },
      { title: "Mit dem Rad", text: "Der Bodensee-Radweg führt nahe am Platz vorbei — Bregenz und Lindau erreichst du bequem mit dem Rad." },
    ],
  },

  galerie: {
    heading: "Camping Weiss in Bildern",
    headingEmphasis: "in Bildern",
    intro: "Vom Stüble bis zum Hofeingang — ein paar Eindrücke von unserem Platz am Rande des Bodensees.",
    tag: "März bis Oktober",
    images: [
      { src: `${IMG}/galerie-stube.webp`, alt: "Gastraum des Stüble s’Annele mit Holztischen und rustikalem Ambiente" },
      { src: `${IMG}/galerie-tafel.webp`, alt: "Festlich gedeckter Tisch im s'Annele" },
      { src: `${IMG}/galerie-hof.webp`, alt: "Rustikaler Hofeingang mit altem Wagenrad" },
      { src: `${IMG}/galerie-sanitaer.webp`, alt: "Kind streichelt Zicklein am Bauernhof von Camping Weiss" },
    ],
  },

  booking: {
    heading: "Lust auf Urlaub am Bodensee?",
    headingEmphasis: "am Bodensee",
    intro:
      "Reservierungen nehmen wir telefonisch entgegen — ruf uns an oder schreib uns eine Mail, wir melden uns mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise für 2 Erwachsene (je € 13) inkl. Stellplatz · zzgl. € 5 Ortstaxe je Erwachsener/Nacht · Kinder 5–14 J. € 8 · Warmwasser, Strom & Hund kostenlos · Stand 2026",
    highlight: { title: "Alles inklusive", text: "Warmwasser, Dusche, Strom und dein Hund sind bei uns kostenlos." },
    categories: [
      { id: "stellplatz", label: "Zelt / Wohnwagen", perNight: 38, perExtraGuest: 13 },
      { id: "wohnmobil8", label: "Wohnmobil bis 8 m", perNight: 45, perExtraGuest: 13 },
      { id: "wohnmobilxl", label: "Wohnmobil ab 8 m", perNight: 47, perExtraGuest: 13 },
    ],
  },

  kontakt: {
    tel: "+43 664 132 55 48",
    telHref: "tel:+436641325548",
    mail: "anfrage@campingweiss.at",
    adresse: "Brachsenweg 4 · 6900 Bregenz · Vorarlberg",
    coords: { lat: 47.503002, lng: 9.708953 },
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Der Platz", href: "#camping", children: [
      { label: "Stüble s’Annele", href: "#camping" },
      { label: "Galerie", href: "#galerie" },
    ]},
    { label: "Preise", href: "#booking" },
    { label: "Anreise", href: "#anreise" },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default campingweiss;
