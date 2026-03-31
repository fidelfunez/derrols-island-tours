import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Derrol's Island Tours",
  description: "Roatán tours and adventures with a local expert.",
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
