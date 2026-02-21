import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['@pizzasquare/brand'],
  sassOptions: {
    includePaths: [
      path.resolve(__dirname, 'node_modules/@pizzasquare/brand')
    ],
  },
  turbopack: {
    root: path.resolve(__dirname, '..'), // points to pizzasquare_platform root
  },
};

export default nextConfig;
