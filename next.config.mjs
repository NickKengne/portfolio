/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          
        }
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "aceternity.com",
            port: '',
            pathname: '/images/**',
          },
        ],
      },
};

export default nextConfig;
