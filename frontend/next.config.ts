import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers() {
    // Required by FHEVM 
    return Promise.resolve([
      {
        source: '/',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
        ],
      },
    ]);
  },
  webpack: (config, { isServer, dev }) => {
    // In production builds, replace mock module with empty module
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        './mock/fhevmMock': false,
      };
    }
    return config;
  },
};

export default nextConfig;
