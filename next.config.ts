import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org", 
      "i.imgur.com", 
      "mango.blender.org",
      "download.blender.org" // ✅ Add this domain
    ],
  },
};

export default nextConfig;
