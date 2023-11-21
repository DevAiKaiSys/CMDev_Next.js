/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.codemobiles.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    // minimumCacheTTL: 0,
  },
};

module.exports = nextConfig;
