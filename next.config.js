/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: process.cwd()
  },
  allowedDevOrigins: ['127.0.0.1']
}

module.exports = nextConfig
