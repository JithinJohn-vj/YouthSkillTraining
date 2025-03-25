/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    domains: ['i.pravatar.cc'],
  },
};

module.exports = nextConfig;
