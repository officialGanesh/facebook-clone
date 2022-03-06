/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "static.xx.fbcdn.net",
      "platform-lookaside.fbsbx.com",
      "cdn-icons.flaticon.com",
      "links.papareact.com",
      "firebasestorage.googleapis.com"
    ],
  },
};

module.exports = nextConfig;
