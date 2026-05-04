/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/silenceside-ecos-static',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
