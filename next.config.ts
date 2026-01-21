import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:5328/api/:path*', // Proxy to Flask Backend
      },
    ];
  },
};

export default nextConfig;
