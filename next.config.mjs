/**
 * Static export cannot use Next’s Image Optimization API — `unoptimized: true` is required.
 * Use compressed WebP in `/public`, sensible `sizes` on `Image`, and scripts in `scripts/` for assets.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
