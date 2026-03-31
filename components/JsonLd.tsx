import type { Locale } from "@/lib/i18n";
import { content } from "@/lib/content";
import { SITE, whatsappHref } from "@/lib/site";

/** LocalBusiness-style structured data for the active locale. */
export function JsonLd({ locale }: { locale: Locale }) {
  const c = content[locale];
  const base = SITE.baseUrl;

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Derrol's Island Tours",
    description: c.meta.description,
    url: `${base}/${locale}`,
    telephone: `+${SITE.whatsappE164}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Roatán",
      addressRegion: "Bay Islands",
      addressCountry: "HN",
    },
    areaServed: {
      "@type": "Place",
      name: locale === "es" ? "Isla de Roatán, Honduras" : "Roatán Island, Honduras",
    },
    sameAs: [whatsappHref()],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
