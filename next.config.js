/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['scontent-iad3-2.cdninstagram.com', 'scontent-iad3-1.cdninstagram.com'],
  },
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
