import type { Locale } from "./i18n";

/** All user-visible copy per locale — single source of truth. */
export const content = {
  en: {
    nav: {
      home: "Home",
      tours: "Tours",
      fleet: "Boats & rides",
      about: "About",
      bookNow: "Book Now",
    },
    hero: {
      label: "Roatán Island, Honduras",
      headline: "Where the Caribbean Begins",
      sub: "Authentic island tours led by a born-and-raised local captain and crew — 14 years on the water",
      cta: "Explore Our Tours",
      /** Shown when `prefers-reduced-motion` replaces video with the static hero image. */
      backgroundImageAlt:
        "Turquoise Caribbean waters and coastline of Roatán, Honduras — Derrol's Island Tours private boat excursions",
    },
    toursSection: {
      title: "Our Tours 🗺️",
      sub: "Every tour is private, flexible, and led by Capt. Derrol and crew",
      bookThisTour: "Book This Tour",
      contactPricing: "Contact for pricing", // TODO: replace with real pricing when available
      tourCardSwipeHint: "Swipe for more photos",
      tourCardPhotoCounter: "{current} of {total}",
      spotlight: {
        eyebrow: "East End favorites",
        title: "After the mangroves — or on their own",
        sub:
          "Most guests pair a mangrove tour with a stop at Hole in the Wall, or spend a full day on a private Tiki Boat. Both are boat-only East End icons — book either solo or stack them with your day on the water.",
        prevAria: "Previous experience",
        nextAria: "Next experience",
        dotHoleAria: "Show Hole in the Wall",
        dotTikiAria: "Show Tiki Boat Adventures",
        swipeHint: "Swipe the photo to switch",
      },
    },
    fleet: {
      label: "Our fleet",
      title: "Boats & wheels — what you actually ride",
      sub:
        "Private boats for mangrove runs, snorkel days, and the East End — plus vans or minibuses for island tours and our ATV lineup on jungle trails. Swipe each card on your phone to browse photos.",
      kindLabels: { boat: "Boats", land: "Land" },
      cardSwipeHint: "Swipe for more photos",
      cardPhotoCounter: "{current} of {total}",
      items: [
        {
          kind: "boat" as const,
          title: "Private tour boats",
          body:
            "Real shots of what we run on the water — private charters built around your group, not packed party boats. Mangrove tunnels, nurse-shark snorkel, and full days on the bay with Capt. Derrol and crew.",
          cardSwipeImages: [
            "/Photos/gallery/roatan-charter-boat-waterfront-landscape-roatan.webp",
            "/Photos/gallery/roatan-private-tour-boat-turquoise-lagoon.webp",
            "/Photos/gallery/white-tour-boat-suzuki-outboard-turquoise-harbor-roatan.webp",
            "/Photos/gallery/red-white-charter-boat-pirate-flags-wooden-pier-roatan.webp",
            "/Photos/gallery/tour-boat-approaching-tropical-beach-passengers-canopy.webp",
          ] as const,
          imageAlts: [
            "Private charter boat from above on clear turquoise water, Roatán",
            "Private tour boat in a calm turquoise lagoon, Roatán",
            "White tour boat with outboard motor in a turquoise harbor, Roatán",
            "Red and white charter boat with pirate flags at a wooden pier, Roatán",
            "Tour boat with canopy approaching a tropical beach with guests, Roatán",
          ] as const,
        },
        {
          kind: "land" as const,
          title: "Vans, rides & ATV fleet",
          body:
            "Island tours use a comfortable private van or minibus so pickups and stops stay easy. Our ATV adventure runs its own four-wheel lineup on jungle trails — helmets, quick briefing, and a pace that fits your group.",
          cardSwipeImages: [
            "/Photos/gallery/roatan-tour-boat-dock-guest-ready-roatan.webp",
            "/Photos/gallery/roatan-derrol-tour-vessel-turquoise-lagoon-honduras.webp",
            "/Photos/gallery/roatan-derrol-charter-boat-promo-graphic-wide.webp",
            "/Photos/gallery/roatan-private-boat-excursion-marketing-banner-roatan.webp",
            "/Photos/gallery/roatan-private-tour-boat-dock-portrait-caribbean.webp",
            "/Photos/gallery/atv-lineup-jungle-dirt-path-riders-helmets-roatan.webp",
          ] as const,
          imageAlts: [
            "Silver passenger van parked for island tours, Roatán",
            "Silver tour van with palm trees — private ground transport, Roatán",
            "Row of white transport vans on a brick-paved lot",
            "White tour van side view with passenger accessibility decals, Roatán",
            "Comfortable minibus interior with rows of seats for tour guests",
            "ATV tour lineup on a jungle dirt path in Roatán",
          ] as const,
        },
      ],
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
      lightboxCloseAria: "Close gallery viewer",
      lightboxPrevAria: "Previous photo",
      lightboxNextAria: "Next photo",
      lightboxDialogLabel: "Gallery photo viewer",
      lightboxOpenPhoto: "Open larger view",
      viewAllPhotos: "View all photos",
      lightboxCounter: "{current} of {total}",
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
      /** Lead with “Roatan tours” for English queries (with/without accent). */
      title: "Roatan Tours | Derrol's Island Tours — Roatán, Honduras",
      description:
        "Roatan tours with Capt. Derrol — mangroves, shark snorkel, island by car, food & ATV. Book direct on WhatsApp. Local crew, 14 years experience.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      tours: "Tours",
      fleet: "Botes y transporte",
      about: "Nosotros",
      bookNow: "Reservar",
    },
    hero: {
      label: "Isla de Roatán, Honduras",
      headline: "Dónde empieza el Caribe",
      sub: "Tours auténticos con capitán y tripulación de Roatán — 14 años en el agua",
      cta: "Explorar Nuestros Tours",
      backgroundImageAlt:
        "Aguas turquesas del Caribe y costa de Roatán, Honduras — excursiones en bote privado con Derrol's Island Tours",
    },
    toursSection: {
      title: "Nuestros Tours 🗺️",
      sub: "Cada tour es privado y flexible; lo llevan el capitán Derrol y su tripulación",
      bookThisTour: "Reservar Este Tour",
      contactPricing: "Consultar precio", // TODO: precios reales
      tourCardSwipeHint: "Desliza para ver más fotos",
      tourCardPhotoCounter: "{current} de {total}",
      spotlight: {
        eyebrow: "Favoritos del East End",
        title: "Después del manglar — o por su cuenta",
        sub:
          "Muchos invitados combinan el tour de manglar con una parada en Hole in the Wall, o dedican el día a un Tiki Boat privado. Ambos son solo en bote e iconos del East End — reserva cada uno solo o súmalos a tu día en el agua.",
        prevAria: "Experiencia anterior",
        nextAria: "Experiencia siguiente",
        dotHoleAria: "Ver Hole in the Wall",
        dotTikiAria: "Ver Tiki Boat Adventures",
        swipeHint: "Desliza la foto para cambiar",
      },
    },
    fleet: {
      label: "Nuestra flota",
      title: "Botes y ruedas — en qué te movés",
      sub:
        "Botes privados para manglar, snorkel y el East End — más van o minibus para el tour de isla y la fila de ATV en senderos de selva. En el celular, deslizá cada tarjeta para ver más fotos.",
      kindLabels: { boat: "Botes", land: "Tierra" },
      cardSwipeHint: "Desliza para ver más fotos",
      cardPhotoCounter: "{current} de {total}",
      items: [
        {
          kind: "boat" as const,
          title: "Botes privados de tour",
          body:
            "Fotos reales de lo que usamos en el agua — charters privados pensados para tu grupo, no lanchas llenas de gente. Manglar, tiburones nodriza y días enteros en la bahía con el capitán Derrol y la tripulación.",
          cardSwipeImages: [
            "/Photos/gallery/roatan-charter-boat-waterfront-landscape-roatan.webp",
            "/Photos/gallery/roatan-private-tour-boat-turquoise-lagoon.webp",
            "/Photos/gallery/white-tour-boat-suzuki-outboard-turquoise-harbor-roatan.webp",
            "/Photos/gallery/red-white-charter-boat-pirate-flags-wooden-pier-roatan.webp",
            "/Photos/gallery/tour-boat-approaching-tropical-beach-passengers-canopy.webp",
          ] as const,
          imageAlts: [
            "Bote charter privado visto desde arriba en agua turquesa clara, Roatán",
            "Bote de tour privado en laguna turquesa tranquila, Roatán",
            "Bote de tour blanco con motor fueraborda en puerto turquesa, Roatán",
            "Bote charter rojo y blanco con banderas pirata en muelle de madera, Roatán",
            "Bote de tour con toldo acercándose a playa tropical con huéspedes, Roatán",
          ] as const,
        },
        {
          kind: "land" as const,
          title: "Van, traslados y fila de ATV",
          body:
            "El tour de isla va en van o minibus privado cómodo para que traslados y paradas sean sencillos. El tour en ATV usa su propia fila de cuatrimotos en senderos de selva — cascos, briefing rápido y ritmo según el grupo.",
          cardSwipeImages: [
            "/Photos/gallery/roatan-tour-boat-dock-guest-ready-roatan.webp",
            "/Photos/gallery/roatan-derrol-tour-vessel-turquoise-lagoon-honduras.webp",
            "/Photos/gallery/roatan-derrol-charter-boat-promo-graphic-wide.webp",
            "/Photos/gallery/roatan-private-boat-excursion-marketing-banner-roatan.webp",
            "/Photos/gallery/roatan-private-tour-boat-dock-portrait-caribbean.webp",
            "/Photos/gallery/atv-lineup-jungle-dirt-path-riders-helmets-roatan.webp",
          ] as const,
          imageAlts: [
            "Van plateada estacionada para tours por la isla, Roatán",
            "Van de tour plateada con palmeras — transporte terrestre privado, Roatán",
            "Fila de vans blancos de transporte en calle empedrada",
            "Van de tour blanca de perfil con señales de accesibilidad para pasajeros, Roatán",
            "Interior cómodo de minibus con filas de asientos para huéspedes del tour",
            "Fila de ATV en sendero de selva, tour en Roatán",
          ] as const,
        },
      ],
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
      lightboxCloseAria: "Cerrar visor de galería",
      lightboxPrevAria: "Foto anterior",
      lightboxNextAria: "Foto siguiente",
      lightboxDialogLabel: "Visor de fotos de la galería",
      lightboxOpenPhoto: "Abrir vista ampliada",
      viewAllPhotos: "Ver todas las fotos",
      lightboxCounter: "{current} de {total}",
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
      /** “Tours en Roatán” matches common Spanish searches. */
      title: "Tours en Roatán | Derrol's Island Tours — Honduras",
      description:
        "Tours en Roatán con el capitán Derrol — manglar, tiburones, isla en carro, comida y ATV. Reserva directo por WhatsApp. Tripulación local, 14 años de experiencia.",
    },
  },
} as const;

export type Content = (typeof content)[Locale];

export const tours = [
  {
    id: "mangrove",
    tagKey: "Nature" as const,
    coverImage: "/Photos/tour-card-covers/roatan-mangrove-boat-tour-cover.webp",
    /** Mobile-only swipe stack (4); first matches `coverImage` (Jonesville mangrove sign). */
    cardSwipeImages: [
      "/Photos/tour-card-covers/roatan-mangrove-boat-tour-cover.webp",
      "/Photos/gallery/roatan-mangrove-tunnel-boat-waterway-canopy.webp",
      "/Photos/gallery/roatan-mangrove-tour-guests-boat-forest-channel.webp",
      "/Photos/gallery/roatan-mangrove-tour-family-turquoise-lagoon-fruit.webp",
    ] as const,
    names: { en: "Mangrove Tour", es: "Tour de Manglar" },
    desc: {
      en: "Glide through Roatán's mangrove tunnels — nature at its calmest, up close.",
      es: "Surca los túneles de manglar de Roatán — la naturaleza más tranquila, de cerca.",
    },
  },
  {
    id: "shark",
    tagKey: "Adventure" as const,
    coverImage: "/Photos/gallery/snorkeler-reaching-nurse-shark-clear-turquoise-water.webp",
    cardSwipeImages: [
      "/Photos/gallery/snorkeler-reaching-nurse-shark-clear-turquoise-water.webp",
      "/Photos/gallery/two-snorkelers-nurse-shark-turquoise-shallow-water-roatan.webp",
      "/Photos/gallery/man-smiling-nurse-shark-foreground-clear-water-roatan.webp",
      "/Photos/gallery/overhead-snorkelers-nurse-sharks-group-tropical-water.webp",
    ] as const,
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
    cardSwipeImages: [
      "/Photos/tour-card-covers/roatan-island-aerial-coastline-cover.webp",
      "/Photos/gallery/roatan-lighthouse-caribbean-island-tour.webp",
      "/Photos/gallery/roatan-chocolate-factory-experience-bay-islands.webp",
      "/Photos/gallery/roatan-west-end-town-coastal-tour.webp",
    ] as const,
    names: { en: "Island Tour", es: "Tour de la Isla" },
    desc: {
      en: "Explore the best of Roatán by car — beaches, culture, and hidden gems only a local knows.",
      es: "Explora lo mejor de Roatán en carro — playas, cultura y rincones secretos que solo un local conoce.",
    },
  },
  {
    id: "food",
    tagKey: "Culture" as const,
    coverImage: "/Photos/tour-card-covers/roatan-local-food-caribbean-plate-cover.webp",
    cardSwipeImages: [
      "/Photos/tour-card-covers/roatan-local-food-caribbean-plate-cover.webp",
      "/Photos/gallery/roatan-fried-fish-rice-beans-local-plate.webp",
      "/Photos/gallery/roatan-group-local-caribbean-lunch-tour.webp",
      "/Photos/gallery/grilled-lobster-shrimp-seafood-plates-group-island-lunch.webp",
    ] as const,
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
    /** Monkeys + one iguana shot; fourth is sloth (only other clear park encounter in gallery besides iguana crowds). */
    cardSwipeImages: [
      "/Photos/tour-card-covers/roatan-wildlife-capuchin-monkeys-cover.webp",
      "/Photos/gallery/roatan-wildlife-tour-capuchin-monkey-guest.webp",
      "/Photos/gallery/woman-iguana-on-back-wildlife-encounter-island-tour.webp",
      "/Photos/gallery/roatan-sloth-encounter-guest-wildlife-tour.webp",
    ] as const,
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
    cardSwipeImages: [
      "/Photos/tour-card-covers/roatan-atv-quads-tour-cover.webp",
      "/Photos/gallery/atv-group-nine-riders-smiling-dirt-road-tropical-forest.webp",
      "/Photos/gallery/atv-lineup-jungle-dirt-path-riders-helmets-roatan.webp",
      "/Photos/gallery/atv-tour-line-riders-helmets-dirt-path-rainforest.webp",
    ] as const,
    names: { en: "ATV & Beach Adventure", es: "Aventura en ATV y playa" },
    desc: {
      en: "Hit the island's rugged trails on an ATV and discover Roatán's wild interior from a whole new angle.",
      es: "Recorre los senderos de la isla en ATV y descubre el interior salvaje de Roatán desde una nueva perspectiva.",
    },
  },
] as const;

/** Boat-only East End experiences (spotlight carousel below main tour grid). */
export const tourSpotlightSlides = [
  {
    id: "hole-in-the-wall",
    tagKey: "Culture" as const,
    coverImage:
      "/Photos/gallery/hole-in-the-wall-tour-waterfront-restaurant-sign-roatan.webp",
    /** Portrait venue shot — bias up so the sign and roof read in wide spotlight crops. */
    coverImageObjectPosition: "center 50%" as const,
    names: { en: "Hole in the Wall", es: "Hole in the Wall" },
    desc: {
      en: "A legendary floating bar and restaurant in the mangroves near Jonesville — cold drinks, local flavor, and a famous Sunday steak & lobster brunch. Only reachable by boat: rustic, eclectic, and a true hidden gem.",
      es: "Bar y restaurante flotante legendario en los manglares cerca de Jonesville — bebidas frías, sabor local y un brunch dominical de filete y langosta. Solo en bote: rústico, único y una joya escondida.",
    },
  },
  {
    id: "tiki-boat",
    tagKey: "Adventure" as const,
    coverImage: "/Photos/gallery/tiki-boat-roatan-map-bar-shotski-tourists.webp",
    names: { en: "Tiki Boat Adventures", es: "Tiki Boat Adventures" },
    desc: {
      en: "Private themed cruises along Roatán’s quieter East End and South Shore — mangrove tunnels, multiple snorkel stops, nurse shark encounters, open bar, lunch, and nonstop island vibes. Built for groups and families who want the full day.",
      es: "Cruceros privados temáticos por el East End y la costa sur de Roatán — túneles de manglar, varias paradas de snorkel, tiburones nodriza, bar abierto, almuerzo y puro ambiente isleño. Ideal para grupos y familias que quieren el día completo.",
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

export function getTagLabel(tagKey: (typeof tours)[number]["tagKey"], locale: Locale) {
  return tagLabels[tagKey][locale];
}

export function getTourTag(tour: (typeof tours)[number], locale: Locale) {
  return getTagLabel(tour.tagKey, locale);
}
