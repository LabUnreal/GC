/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  },
  // Optional configurations:
  // trailingSlash: true,
  // skipTrailingSlashRedirect: true,
  // distDir: 'dist',
};

module.exports = nextConfig;