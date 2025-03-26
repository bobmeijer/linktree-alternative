/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'example.com', 'res.cloudinary.com'],
    formats: ['image/webp'],
  },
}

module.exports = nextConfig 