import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { content } from "@/lib/content";
import { defaultLocale } from "@/lib/i18n";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  style: ["normal", "italic"],
  /** 400–600 cover display + italic logo; drop 700 to save bytes. */
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const rootMeta = content[defaultLocale].meta;

export const metadata: Metadata = {
  title: rootMeta.title,
  description: rootMeta.description,
  manifest: "/Photos/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/Photos/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/Photos/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/Photos/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Hero video poster — often LCP before decode; preload beats waiting on <video poster> discovery. */}
        <link
          rel="preload"
          href="/Videos/hero-poster.jpg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
