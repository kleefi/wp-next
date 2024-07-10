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
      {
        protocol: "https",
        hostname: "kleefi.com",
      },
    ],
  },
};

export default nextConfig;
