/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/silenceside-ecos-static',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/silenceside-ecos-static',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
  },
};

export default nextConfig;
