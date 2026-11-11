/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.parkregiskriskin.ae',
      },
      {
        protocol: 'https',
        hostname: 'assets.architecturaldigest.in',
      },
      {
        protocol: 'https',
        hostname: 'cdn.mos.cms.futurecdn.net',
      },
      {
        protocol: 'https',
        hostname: 'st.hzcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
