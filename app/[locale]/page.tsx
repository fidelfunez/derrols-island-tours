import dynamic from "next/dynamic";
import { content } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/Hero";
import { ToursSection } from "@/components/ToursSection";

const AboutSection = dynamic(
  () =>
    import("@/components/AboutSection").then((m) => ({
      default: m.AboutSection,
    })),
  {
    loading: () => (
      <DeferredSectionSkeleton variant="light" />
    ),
  }
);

const WhyChooseUs = dynamic(
  () =>
    import("@/components/WhyChooseUs").then((m) => ({
      default: m.WhyChooseUs,
    })),
  {
    loading: () => (
      <DeferredSectionSkeleton variant="ocean" />
    ),
  }
);

const GallerySection = dynamic(
  () =>
    import("@/components/GallerySection").then((m) => ({
      default: m.GallerySection,
    })),
  {
    loading: () => (
      <DeferredSectionSkeleton variant="light" />
    ),
  }
);

const BookingSection = dynamic(
  () =>
    import("@/components/BookingSection").then((m) => ({
      default: m.BookingSection,
    })),
  {
    loading: () => (
      <DeferredSectionSkeleton variant="sand" />
    ),
  }
);

function DeferredSectionSkeleton({
  variant,
}: {
  variant: "light" | "ocean" | "sand";
}) {
  const shell =
    variant === "ocean"
      ? "bg-ocean py-24 md:py-32"
      : variant === "sand"
        ? "bg-sand py-24 md:py-32"
        : "bg-light py-24 md:py-32";
  const bar =
    variant === "ocean" ? "bg-white/15" : "bg-dark/10";

  return (
    <div className={shell} aria-hidden>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl animate-pulse space-y-4">
          <div className={`mx-auto h-3 w-24 rounded-full ${bar}`} />
          <div className={`mx-auto h-9 max-w-sm rounded-lg ${bar}`} />
          <div className={`h-4 w-full rounded ${bar}`} />
          <div className={`h-4 w-5/6 rounded ${bar}`} />
        </div>
      </div>
    </div>
  );
}

type Props = { params: { locale: string } };

export default function HomePage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();

  const locale = params.locale as Locale;
  const copy = content[locale];

  return (
    <>
      <JsonLd locale={locale} />
      <Hero locale={locale} copy={copy.hero} />
      <ToursSection locale={locale} copy={copy.toursSection} />
      <AboutSection copy={copy.about} />
      <WhyChooseUs copy={copy.why} />
      <GallerySection copy={copy.gallery} />
      <BookingSection locale={locale} copy={copy.booking} />
    </>
  );
}
