import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "fakestoreapi.com",
      "img.freepik.com",
      "res.cloudinary.com" // ✅ Added safely here
    ],
  },
};

export default nextConfig;
