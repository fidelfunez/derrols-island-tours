import type { Locale } from "./i18n";

/** All user-visible copy per locale — single source of truth. */
export const content = {
  en: {
    nav: {
      home: "Home",
      tours: "Tours",
      about: "About",
      bookNow: "Book Now",
    },
    hero: {
      label: "Roatán Island, Honduras",
      headline: "Where the Caribbean Begins",
      sub: "Authentic island tours led by a born-and-raised local captain and crew — 14 years on the water",
      cta: "Explore Our Tours",
    },
    toursSection: {
      title: "Our Tours 🗺️",
      sub: "Every tour is private, flexible, and led by Capt. Derrol and crew",
      bookThisTour: "Book This Tour",
      contactPricing: "Contact for pricing", // TODO: replace with real pricing when available
    },
    about: {
      label: "Your Guide",
      headline: "Born Here. Raised Here. Ready to Show You Everything.",
      portraitAlt:
        "Derrol Jackson, Roatán tour guide and captain of Derrol's Island Tours, Honduras",
      body: "I'm Derrol Jackson, and Roatán is my home. I've spent 14 years in tourism — not behind a desk, but on the water, on the trails, and at the local spots that don't make it into the guidebooks. Now I have my own boat and a solid crew behind me — we run things the right way: small groups, real experiences, no shortcuts.",
      stats: {
        years: "14 Years Experience",
        private: "Private Tours Only",
        boat: "25ft Private Boat",
      },
    },
    why: {
      label: "Why choose us",
      title: "The island, the way locals live it",
      sub: "No middlemen — a local captain and crew, raised on Roatán, who run every tour together.",
      cards: [
        {
          title: "Local Knowledge",
          body: "Every reef, cay, and hidden beach — we know them all.",
        },
        {
          title: "Small & Private",
          body: "No crowds. Custom schedules. Your trip, your way.",
        },
        {
          title: "Safe & Trusted",
          body: "Modern boat, experienced captain and crew, 14 years of happy guests.",
        },
      ],
    },
    gallery: {
      label: "Gallery",
      title: "Moments from the Island 🏝️",
      sub: "Real photos from the water, the trails, and the experiences we share with guests — no stock, no filters.",
      empty: "Fresh island photos are on the way — check back soon.",
      imageAlt: "Roatán tour gallery photo",
      loadMore: "Load more photos",
      swipeHint: "Swipe sideways to browse photos",
    },
    booking: {
      title: "Ready to Explore Roatán?",
      sub: "Skip the travel agencies. Book directly with Derrol on WhatsApp — fast, easy, and personal.",
      mapCardTitle: "Your starting point is the island",
      mapCardSub:
        "See where we’re based, then reach out — Derrol and the crew will help with meeting points and pickup for your tour.",
      waCta: "Chat with Derrol on WhatsApp",
      locationLine: "Roatán Island, Honduras 🇭🇳",
      mapLoadCta: "Load map",
      mapLoadAria: "Load interactive map of Roatán",
    },
    footer: {
      rights: "© 2026 Derrol's Island Tours · All rights reserved",
      inspireLine: "See the island we call home — one adventure at a time.",
      creditBefore: "Made with love 🤍 by ",
      localeLine: "Roatán, Honduras 🐠",
    },
    backToTop: {
      label: "Back to top",
      aria: "Back to top",
    },
    meta: {
      title: "Derrol's Island Tours | Roatán Tours & Adventures",
      description:
        "Book authentic tours in Roatán, Honduras directly with Derrol — local captain and crew, 14 years of experience. Mangrove tours, shark snorkeling, island excursions and more. WhatsApp booking.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      tours: "Tours",
      about: "Nosotros",
      bookNow: "Reservar",
    },
    hero: {
      label: "Isla de Roatán, Honduras",
      headline: "Dónde empieza el Caribe",
      sub: "Tours auténticos con capitán y tripulación de Roatán — 14 años en el agua",
      cta: "Explorar Nuestros Tours",
    },
    toursSection: {
      title: "Nuestros Tours 🗺️",
      sub: "Cada tour es privado y flexible; lo llevan el capitán Derrol y su tripulación",
      bookThisTour: "Reservar Este Tour",
      contactPricing: "Consultar precio", // TODO: precios reales
    },
    about: {
      label: "Tu Guía",
      headline: "Nacido aquí. Criado aquí. Listo para mostrarte todo.",
      portraitAlt:
        "Derrol Jackson, guía de tours en Roatán y capitán de Derrol's Island Tours, Honduras",
      body: "Soy Derrol Jackson, y Roatán es mi hogar. Llevo 14 años en turismo — no detrás de un escritorio, sino en el agua, en los senderos y en los rincones locales que no aparecen en las guías. Ahora tengo mi propio bote y un equipo de confianza — hacemos las cosas bien: grupos pequeños, experiencias reales, sin atajos.",
      stats: {
        years: "14 Años de Experiencia",
        private: "Solo Tours Privados",
        boat: "Bote Privado 25 ft",
      },
    },
    why: {
      label: "Por qué con nosotros",
      title: "La isla, como la viven quienes nacieron aquí",
      sub: "Sin intermediarios — capitán y tripulación de Roatán que llevan cada tour juntos.",
      cards: [
        {
          title: "Conocimiento Local",
          body: "Cada arrecife, cayo y playa escondida — los conocemos todos.",
        },
        {
          title: "Pequeño y Privado",
          body: "Sin multitudes. Horarios a medida. Tu viaje, a tu manera.",
        },
        {
          title: "Seguro y Confiable",
          body: "Bote moderno, capitán y tripulación experimentados, 14 años de clientes felices.",
        },
      ],
    },
    gallery: {
      label: "Galería",
      title: "Momentos en la Isla 🏝️",
      sub: "Fotos reales del mar, los senderos y las experiencias que compartimos con quienes nos visitan — sin banco de imágenes.",
      empty: "Pronto añadiremos más fotos de la isla.",
      imageAlt: "Foto de galería de tours en Roatán",
      loadMore: "Ver más fotos",
      swipeHint: "Desliza hacia los lados para ver más fotos",
    },
    booking: {
      title: "¿Listo para Explorar Roatán?",
      sub: "Olvídate de las agencias. Reserva directamente con Derrol por WhatsApp — rápido, fácil y personal.",
      mapCardTitle: "Todo empieza en la isla",
      mapCardSub:
        "Mira Roatán en el mapa y escríbenos. Derrol y la tripulación te ayudan con el punto de encuentro y la logística del tour.",
      waCta: "Escríbele a Derrol por WhatsApp",
      locationLine: "Isla de Roatán, Honduras 🇭🇳",
      mapLoadCta: "Cargar mapa",
      mapLoadAria: "Cargar mapa interactivo de Roatán",
    },
    footer: {
      rights: "© 2026 Derrol's Island Tours · Todos los derechos reservados",
      inspireLine: "Conoce la isla que llamamos hogar — una aventura a la vez.",
      creditBefore: "Hecho con amor 🤍 por ",
      localeLine: "Roatán, Honduras 🐠",
    },
    backToTop: {
      label: "Volver arriba",
      aria: "Volver al inicio de la página",
    },
    meta: {
      title: "Derrol's Island Tours | Tours y Aventuras en Roatán",
      description:
        "Reserva tours auténticos en Roatán, Honduras directamente con Derrol — capitán y tripulación locales, 14 años de experiencia. Manglares, tiburones, excursiones y más. Reserva por WhatsApp.",
    },
  },
} as const;

export type Content = (typeof content)[Locale];

export const tours = [
  {
    id: "mangrove",
    tagKey: "Nature" as const,
    coverImage: "/Photos/tour-card-covers/roatan-mangrove-boat-tour-cover.webp",
    names: { en: "Mangrove Tour", es: "Tour de Manglar" },
    desc: {
      en: "Glide through Roatán's mangrove tunnels — nature at its calmest, up close.",
      es: "Surca los túneles de manglar de Roatán — la naturaleza más tranquila, de cerca.",
    },
  },
  {
    id: "shark",
    tagKey: "Adventure" as const,
    coverImage: "/Photos/tour-card-covers/roatan-marine-life-shallow-snorkel-cover.webp",
    names: { en: "Shark Tour", es: "Tour de Tiburones" },
    desc: {
      en: "Snorkel alongside nurse sharks in crystal-clear shallows — a bucket-list experience.",
      es: "Nada junto a tiburones nodriza en aguas cristalinas — una experiencia única en la vida.",
    },
  },
  {
    id: "island",
    tagKey: "Exploration" as const,
    coverImage: "/Photos/tour-card-covers/roatan-island-aerial-coastline-cover.webp",
    names: { en: "Island Tour", es: "Tour de la Isla" },
    desc: {
      en: "Explore the best of Roatán by land and sea — beaches, culture, and hidden gems only a local knows.",
      es: "Explora lo mejor de Roatán por tierra y mar — playas, cultura y rincones secretos que solo un local conoce.",
    },
  },
  {
    id: "food",
    tagKey: "Culture" as const,
    coverImage: "/Photos/tour-card-covers/roatan-local-food-caribbean-plate-cover.webp",
    names: { en: "Local Food & Sandy Bay", es: "Comida Local y Sandy Bay" },
    desc: {
      en: "Taste authentic Caribbean flavors and unwind at the stunning Sandy Bay beach.",
      es: "Prueba los sabores auténticos del Caribe y relájate en la impresionante playa de Sandy Bay.",
    },
  },
  {
    id: "wildlife",
    tagKey: "Wildlife" as const,
    coverImage: "/Photos/tour-card-covers/roatan-wildlife-capuchin-monkeys-cover.webp",
    names: { en: "Animal Park & Nature", es: "Parque Animal y Naturaleza" },
    desc: {
      en: "Get up close with Roatán's exotic wildlife — monkeys, sloths, parrots, and more in their natural habitat.",
      es: "Conoce de cerca la fauna exótica de Roatán — monos, perezosos, loros y más en su hábitat natural.",
    },
  },
  {
    id: "atv",
    tagKey: "Thrill" as const,
    coverImage: "/Photos/tour-card-covers/roatan-atv-quads-tour-cover.webp",
    names: { en: "ATV Adventure", es: "Aventura en ATV" },
    desc: {
      en: "Hit the island's rugged trails on an ATV and discover Roatán's wild interior from a whole new angle.",
      es: "Recorre los senderos de la isla en ATV y descubre el interior salvaje de Roatán desde una nueva perspectiva.",
    },
  },
] as const;

const tagLabels: Record<(typeof tours)[number]["tagKey"], Record<Locale, string>> = {
  Nature: { en: "Nature", es: "Naturaleza" },
  Adventure: { en: "Adventure", es: "Aventura" },
  Exploration: { en: "Exploration", es: "Exploración" },
  Culture: { en: "Culture", es: "Cultura" },
  Wildlife: { en: "Wildlife", es: "Fauna" },
  Thrill: { en: "Thrill", es: "Adrenalina" },
};

export function getTourTag(tour: (typeof tours)[number], locale: Locale) {
  return tagLabels[tour.tagKey][locale];
}
