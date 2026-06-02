import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ['@whiskeysockets/baileys', 'pino', 'jimp', 'sharp', 'qrcode-terminal'],
};

export default nextConfig;
