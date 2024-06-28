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
      webpack: (config) => {
         config.resolve.alias.canvas = false;
        return config;
        },
};

export default nextConfig;
