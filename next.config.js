/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org', 'links.papareact.com', 'images.tmdb.org']
  }
}

module.exports = nextConfig
