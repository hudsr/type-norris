/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.chucknorris.io",
      },
    ],
  },
};

export default nextConfig;
