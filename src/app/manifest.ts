import { MetadataRoute } from "next";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return {
    name: "Download Video Online",
    short_name: "Download Video Online",
    description:
      "Comprehensive tools that offer video downloading along with other media content (images, audio files, documents) from social media platforms.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    icons: [
      {
        src: "/images/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/images/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    categories: ["Internet"],
    related_applications: [],
    prefer_related_applications: false,
    scope: "/",
    orientation: "portrait",
    lang: "en",
    dir: "ltr",
  };
}
