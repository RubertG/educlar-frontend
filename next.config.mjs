// @ts-check
 
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5400'
      }
    ]
  }
}
 
export default nextConfig