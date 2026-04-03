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
};

export default nextConfig;
