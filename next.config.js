/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignore TypeScript and ESLint errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Improve image configuration for deployment
  images: {
    domains: [
      "images.pexels.com",
      "images.unsplash.com",
      "placehold.co",
      "v0.blob.com",
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
    ],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
