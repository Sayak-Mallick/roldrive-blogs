/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog1.roldrive.com',
      }
    ],
  },
}

module.exports = nextConfig
