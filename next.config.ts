/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: {
    module: { rules: { test: RegExp; use: string[] }[] };
  }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
