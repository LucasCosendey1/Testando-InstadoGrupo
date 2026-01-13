/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suas configurações aqui
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;