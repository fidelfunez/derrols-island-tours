import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { content } from "@/lib/content";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { HtmlLang } from "@/components/HtmlLang";
import { LocalePersistence } from "@/components/LocalePersistence";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { HeroAmbientProvider } from "@/contexts/HeroAmbientContext";

type Props = { children: React.ReactNode; params: { locale: string } };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  if (!isLocale(locale)) return {};

  const c = content[locale];
  const base = SITE.baseUrl;
  const path = `/${locale}`;
  /** TODO: Replace with ${base}/og.jpg after adding a branded asset to /public. */
  const ogImage = `https://placehold.co/1200x630/004E89/FDFAF5/png?text=Derrol%27s+Island+Tours`;

  return {
    metadataBase: new URL(base),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `${base}${path}`,
      languages: {
        en: `${base}/en`,
        es: `${base}/es`,
        "x-default": `${base}/en`,
      },
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url: `${base}${path}`,
      siteName: "Derrol's Island Tours",
      locale: locale === "es" ? "es_HN" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_HN"],
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Derrol's Island Tours — Roatán",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
      images: [ogImage],
    },
  };
}

export default function LocaleLayout({ children, params }: Props) {
  if (!isLocale(params.locale)) notFound();

  const locale = params.locale as Locale;
  const copy = content[locale];

  return (
    <>
      <HtmlLang locale={locale} />
      <LocalePersistence locale={locale} />
      <HeroAmbientProvider>
        <Navbar locale={locale} labels={copy.nav} />
        <main>{children}</main>
        <Footer locale={locale} nav={copy.nav} footer={copy.footer} />
        <BackToTop copy={copy.backToTop} />
      </HeroAmbientProvider>
    </>
  );
}
