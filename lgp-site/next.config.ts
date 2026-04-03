import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/insightrpg/:path*",
        destination: "https://insightrpg.vercel.app/:path*",
      },
    ];
  },
  async redirects() {
    return [
      { source: "/resources", destination: "/blog", permanent: true },
      { source: "/resources/:slug", destination: "/blog/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
