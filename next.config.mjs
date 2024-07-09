/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: "dummyimage.com",
      },
    ],
  },
};

export default nextConfig;
