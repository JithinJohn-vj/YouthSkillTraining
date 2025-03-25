/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    domains: ['i.pravatar.cc','utfs.io'],
  },
};

module.exports = nextConfig;
