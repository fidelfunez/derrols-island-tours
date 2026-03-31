import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-sand px-6 text-center">
      <h1 className="font-display text-3xl text-dark">Page not found</h1>
      <p className="text-dark/70">The page you’re looking for doesn’t exist.</p>
      <div className="flex gap-6 text-coral">
        <Link href="/en" className="font-semibold underline underline-offset-4" hrefLang="en">
          English
        </Link>
        <Link href="/es" className="font-semibold underline underline-offset-4" hrefLang="es">
          Español
        </Link>
      </div>
    </div>
  );
}
