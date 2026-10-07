import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The reader survey is a self-contained static page in public/survey.html.
  async rewrites() {
    return [{ source: '/survey', destination: '/survey.html' }]
  },
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
