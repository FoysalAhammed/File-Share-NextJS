/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "fantastic-goldfinch-125.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
