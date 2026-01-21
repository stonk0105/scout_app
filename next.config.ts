import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    // 只在本地開發時使用代理
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/api/:path*',
          destination: 'http://127.0.0.1:5328/api/:path*', // Proxy to Flask Backend
        },
      ];
    }
    // 生產環境（Vercel）直接使用 serverless functions，不需要代理
    return [];
  },
};

export default nextConfig;
