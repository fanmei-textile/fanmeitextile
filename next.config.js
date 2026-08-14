/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
