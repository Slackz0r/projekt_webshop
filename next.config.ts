import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "public.r2.headshotpro-cf.com",
        pathname: "/headshotpro/reviews/**",
      },
    ],
  },
};

export default nextConfig;
