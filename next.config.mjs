/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.youtube.com", "images.unsplash.com", "upload.wikimedia.org"],
  },
};

export default nextConfig;
