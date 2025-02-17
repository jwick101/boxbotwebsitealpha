/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals = config.externals || {};
      config.externals['artifacts'] = 'commonjs artifacts';
    }
    return config;
  },
};

module.exports = nextConfig;
