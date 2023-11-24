/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
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
    minimumCacheTTL: 0,
  },
};

module.exports = nextConfig;
