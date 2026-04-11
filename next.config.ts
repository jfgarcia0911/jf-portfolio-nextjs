import type { NextConfig } from 'next';

const nextConfig: NextConfig = {

  // Optimize images: use modern formats and lower quality
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Compiler options: remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Experimental features for better bundling
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'react-toastify'],
  },

  // Optional: enable React strict mode for better performance detection
  reactStrictMode: true,

  // Turbopack (dev) specific – not needed for production build
  // target is not a valid Next.js config property; remove it.
};

export default nextConfig;