import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.resolve(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Ensure strict static generation for all public routes
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
