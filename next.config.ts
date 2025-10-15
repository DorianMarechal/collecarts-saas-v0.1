import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['localhost', 'http://localhost:3000', 'http://localhost:3001'],
  distDir: 'build',
  logging: process.env.NODE_ENV === "development" ? {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  } : false,
  experimental: {
    cssChunking: true,
    browserDebugInfoInTerminal: {
      depthLimit: 5,
      edgeLimit: 100,
    },
  },
};

export default nextConfig;
