/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: [], // Adicione domínios externos se usar imagens externas
    unoptimized: true,
  },
  trailingSlash: false,
};

module.exports = nextConfig;
