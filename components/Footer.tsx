import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content";
import { BRAND } from "@/lib/brand";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { SITE, whatsappHref } from "@/lib/site";

export function Footer({
  locale,
  nav,
  footer,
}: {
  locale: Locale;
  nav: Content["nav"];
  footer: Content["footer"];
}) {
  const prefix = `/${locale}`;

  const social = [
    { href: whatsappHref(), label: "WhatsApp", Icon: WhatsAppIcon },
    { href: SITE.social.facebook, label: "Facebook", Icon: IconFacebook },
    { href: SITE.social.instagram, label: "Instagram", Icon: IconInstagram },
    { href: SITE.social.tiktok, label: "TikTok", Icon: IconTikTok },
  ] as const;

  return (
    <footer
      className="relative overflow-hidden border-t border-black/40 text-light"
      style={{
        /* Darker than `--color-wood` tokens — footer only; globals stay unchanged. */
        background: "linear-gradient(180deg, #16100c 0%, #080504 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.11), inset 0 -14px 28px rgba(0,0,0,0.32)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <Image
          src="/Photos/footer-background-photo.webp"
          alt=""
          fill
          className="object-cover object-[center_42%] scale-[1.16] origin-[center_42%]"
          sizes="100vw"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "linear-gradient(125deg, rgba(72, 52, 40, 0.44) 0%, transparent 42%, rgba(52, 40, 32, 0.16) 55%, transparent 72%)",
          mixBlendMode: "soft-light",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "linear-gradient(105deg, transparent 0%, transparent 38%, rgba(58, 46, 38, 0.24) 48%, rgba(34, 28, 24, 0.09) 52%, transparent 62%)",
          mixBlendMode: "overlay",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden
      />

      <div className="relative z-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8">
          <Link
            href={prefix}
            className="flex items-center justify-center gap-3 self-center font-display text-xl italic tracking-tight text-light transition-colors hover:text-sand md:justify-start md:self-auto md:gap-3.5 md:text-2xl"
          >
            <Image
              src={BRAND.logo.onLightBackground}
              alt=""
              width={500}
              height={500}
              className="h-10 w-10 shrink-0 object-contain opacity-95 md:h-11 md:w-11"
            />
            <span>Derrol&apos;s Island Tours</span>
          </Link>

          <nav
            className="flex flex-wrap justify-center gap-6 text-sm font-medium text-light md:gap-8"
            aria-label="Footer"
          >
            <Link
              href={prefix}
              className="text-light transition-colors hover:text-sand hover:underline hover:decoration-sand/80 hover:underline-offset-4"
            >
              {nav.home}
            </Link>
            <Link
              href={`${prefix}#tours`}
              className="text-light transition-colors hover:text-sand hover:underline hover:decoration-sand/80 hover:underline-offset-4"
            >
              {nav.tours}
            </Link>
            <Link
              href={`${prefix}#fleet`}
              className="text-light transition-colors hover:text-sand hover:underline hover:decoration-sand/80 hover:underline-offset-4"
            >
              {nav.fleet}
            </Link>
            <Link
              href={`${prefix}#about`}
              className="text-light transition-colors hover:text-sand hover:underline hover:decoration-sand/80 hover:underline-offset-4"
            >
              {nav.about}
            </Link>
            <Link
              href={`${prefix}#book`}
              className="text-light transition-colors hover:text-sand hover:underline hover:decoration-sand/80 hover:underline-offset-4"
            >
              {nav.bookNow}
            </Link>
          </nav>

          <nav
            className="flex items-center justify-center gap-6 md:justify-end"
            aria-label="Social media"
          >
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light/90 transition-colors hover:text-sand"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-center text-xs text-sand/90 md:flex-row md:items-start md:justify-between md:gap-8 md:text-left md:text-sm">
            <div className="flex flex-col gap-1 md:max-w-[min(100%,28rem)]">
              <p className="text-sand/90">{footer.rights}</p>
              <p className="text-sand/75 italic">{footer.inspireLine}</p>
            </div>
            <div className="flex flex-col gap-1 md:items-end md:text-right">
              <p className="text-sand/80">{footer.localeLine}</p>
              <p className="text-sand/90">
                {footer.creditBefore}
                {SITE.teraPortfolioUrl ? (
                  <a
                    href={SITE.teraPortfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-light underline decoration-sand/50 underline-offset-2 transition-colors hover:text-sand hover:decoration-sand"
                  >
                    Tera
                  </a>
                ) : (
                  <span className="font-medium text-light">Tera</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  );
}

function IconTikTok({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}
