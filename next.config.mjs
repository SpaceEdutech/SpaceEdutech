/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "surveyofindia.gov.in",
      },
      {
        protocol: "https",
        hostname: "www.nirvanuniversity.ac.in",
      },
    ],
  },
};

export default nextConfig;
