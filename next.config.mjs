/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Allow requests from local network hosts during development (HMR/websocket)
  allowedDevOrigins: ['192.168.31.222'],
}

export default nextConfig
