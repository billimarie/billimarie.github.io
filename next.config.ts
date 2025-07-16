// File: next.config.ts

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/',
  assetPrefix: '/',
  images: { 
    unoptimized: true
  },
};

module.exports = nextConfig;
