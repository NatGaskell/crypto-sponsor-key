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
  webpack: (config, { webpack }) => {
    // Ignore mock module in production builds
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/mock\/fhevmMock$/,
        contextRegExp: /fhevm\/internal$/,
      })
    );
    return config;
  },
};

export default nextConfig;
