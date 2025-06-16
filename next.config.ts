import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Uncomment and set your repository name if deploying to GitHub Pages
  // basePath: '/personal_website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
