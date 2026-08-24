import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // avif primeiro (menor arquivo), webp como fallback pra quem não suporta
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
