/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yozbrydxdlcxghkphhtq.supabase.co',
      },
    ],
  },
}

export default nextConfig
