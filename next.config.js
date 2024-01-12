/** @type {import('next').NextConfig} */

const nextConfig = {
  // trailingSlash: true,
  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/en/how-to-download-facebook',
  //       destination: '/en/facebook-downloader',
  //     },
  //     {
  //       source: '/en/how-to-download-facebook-reels',
  //       destination: '/en/facebook-downloader',
  //     },
  //     {
  //       source: '/en/facebook-downloader-best',
  //       destination: '/en/facebook-downloader',
  //     }
  //   ]
  // },
  images: {
    domains: ["scontent.cdninstagram.com"],
  }
};
const withNextIntl = require("next-intl/plugin")("./src/utils/i18n.ts");
module.exports = withNextIntl(nextConfig);
