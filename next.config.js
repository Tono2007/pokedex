/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  // env: {
  //   customKey: 'customValue',
  // },
  // basePath: "/dist",
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/hola',
  //       destination: '/hello',
  //       permanent: true,
  //     },
  //   ]
  // }
};

module.exports = nextConfig;
