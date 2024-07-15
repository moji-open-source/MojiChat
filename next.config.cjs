/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    port: '4130',
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
