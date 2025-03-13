import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  images: {
    domains: ['res.cloudinary.com'], // Adicione o domínio do Cloudinary aqui
  },
};

export default nextConfig;
