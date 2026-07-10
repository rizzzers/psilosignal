import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.beehiiv.com',
      },
      {
        protocol: 'https',
        hostname: 'embed.filekitcdn.com',
      },
    ],
  },
};

export default nextConfig;
