import type { CampsiteConfig } from "../types";

const IMG = "/campsites/campingweiss";

const campingweiss: CampsiteConfig = {
  name: "Camping Weiss",
  shortName: "Weiss",
  slug: "campingweiss",
  ort: "Bregenz am Bodensee",
  region: "Vorarlberg",
  brandKind: "Camping & Bauernhof",
  regionLong: "Bodenseeregion · Bregenz · Vorarlberg · Österreich",

  heroVariant: "center",

  claim: "Ruhig campen am Rande des Bodensees",
  claimEmphasis: "am Rande des Bodensees",
  emailDetail: "euer eigener Bauernhof direkt am Campingplatz",
  intro:
    "Auf dem Hof der Familie Weiss campst du seit 1965 mitten im Grünen und doch nah an Bregenz — fünf Gehminuten zum Bodensee, Tiere zum Anfassen und im s'Annele Most und Schnaps aus eigener Ernte.",

  logo: { src: `${IMG}/logo-d501aa06b8.png`, alt: "Camping Weiss Logo" },

  statement: {
    text: "Fünf Gehminuten hinter deinem Vorzelt beginnt der Bodensee — dazwischen nur Wiese, Hof und Ruhe.",
    emphasis: "der Bodensee",
  },

  pillars: [
    {
      title: "Seit 1965 am Bodensee",
      text: "Seit fast 60 Jahren führt die Familie Weiss den Platz am Rande des Bodensees mit viel Herz.",
      image: { src: `${IMG}/hero-71ef6fe59b.webp`, alt: "Historische Luftaufnahme von Camping Weiss am Bodensee" },
    },
    {
      title: "s'Annele – unsere Gaststube",
      text: "In der gemütlichen Gaststube gibt es Most, Schnaps und Essig aus der eigenen Landwirtschaft.",
      image: { src: `${IMG}/amenity-e278707f2f.webp`, alt: "Gemütliche Gaststube s'Annele bei Camping Weiss" },
    },
    {
      title: "Persönlich empfangen",
      text: "An der Anmeldung kennt man sich noch — hier wirst du herzlich und ganz familiär begrüßt.",
      image: { src: `${IMG}/amenity-54a5c84e67.webp`, alt: "Anmeldung und Empfang am Camping Weiss" },
    },
  ],

  usps: [
    "Seit 1965 in Familienhand",
    "5 Gehminuten zum Bodensee",
    "Eigener Bauernhof",
    "Strom & Warmwasser gratis",
    "Hunde gratis willkommen",
    "Most & Schnaps vom Hof",
  ],

  trust: {
    heading: "Warum Gäste seit 1965 wiederkommen",
    headingEmphasis: "seit 1965",
    intro:
      "Ein Platz am Rande des Bodensees, geführt von der Familie Weiss: ruhige Wiesen statt Partytrubel, ein eigener Bauernhof für die Kinder und das s'Annele mit Most aus eigener Landwirtschaft.",
  },

  awards: [],

  saison: { von: "März", bis: "Oktober" },

  hero: {
    aerial: {
      src: `${IMG}/amenity-a44a3c1440.webp`,
      alt: "Gastgarten und Stellplätze von Camping Weiss am Rande des Bodensees",
    },
  },

  camping: {
    heading: "Einkehren im s'Annele",
    intro:
      "Unsere Gaststube mit Gastgarten — benannt nach Gründerin Anna Weiss — verwöhnt dich mit kleinen Köstlichkeiten und Hausgemachtem vom eigenen Hof.",
    features: [
      {
        title: "Selbstbedienung im Stüble",
        text: "Im Campingstüble holst du dir Pizza, Wienerle oder Wurstsalat ganz unkompliziert selbst.",
        image: { src: `${IMG}/amenity-38724143a2.webp`, alt: "Rustikale Gaststube s'Annele mit Selbstbedienung" },
      },
      {
        title: "Gedeckt für gesellige Abende",
        text: "An liebevoll gedeckten Tischen lässt du den Tag am See oder in Bregenz ausklingen.",
        image: { src: `${IMG}/amenity-f109641a70.webp`, alt: "Festlich gedeckter Tisch im s'Annele" },
      },
    ],
  },

  anreise: {
    heading: "Anreise nach Bregenz",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A14 bis Bregenz, dann Richtung Bodenseeufer zum Brachsenweg — geparkt wird direkt am Platz.",
      },
      {
        title: "Mit Bus & Bahn",
        text: "Der Bahnhof Bregenz liegt rund 3 km entfernt, die Bushaltestelle direkt am Campingplatz.",
      },
      {
        title: "Zu Fuß zum See",
        text: "In nur fünf Gehminuten stehst du am Ufer des Bodensees und an der Liegewiese.",
      },
    ],
  },

  galerie: {
    heading: "Platz, Stüble und Umgebung",
    headingEmphasis: "Stüble",
    intro: "Ein paar Eindrücke von unserem s'Annele, dem Platz und der Aussicht rundum.",
    tag: "März bis Oktober",
    images: [
      { src: `${IMG}/amenity-dc0658945e.webp`, alt: "Theke im s'Annele mit hausgemachten Getränken" },
      { src: `${IMG}/amenity-85f01564c6.webp`, alt: "Überdachter Gastgarten von Camping Weiss mit Bierbänken und Maisverzierung" },
      { src: `${IMG}/gallery-c7f4fc2218.webp`, alt: "Blick vom Pfänder über Bregenz und den Bodensee" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Bodensee",
    headingEmphasis: "am Bodensee",
    intro: "Sag uns Zeitraum und Stellplatz — Camping Weiss meldet sich persönlich mit der Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise: 2 Erwachsene (je € 13) + Stellplatz · Kinder 5–14 € 8 · Strom & Warmwasser inklusive · zzgl. Ortstaxe — bitte bestätigen.",
    highlight: {
      title: "Alles inklusive",
      text: "Warmwasser, Duschen und Strom kosten bei Camping Weiss nichts extra — auch dein Hund ist gratis dabei.",
    },
    categories: [
      { id: "stellplatz", label: "Zelt / Auto / Wohnwagen", perNight: 38, perExtraGuest: 13 },
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
    { label: "s'Annele", href: "#camping" },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default campingweiss;
