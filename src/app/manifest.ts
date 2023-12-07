import { MetadataRoute } from 'next'
 
export default async function manifest(): Promise<MetadataRoute.Manifest> {
    
  return {
    name: "Download Video Online",
    short_name: "Download Video Online",
    description: "Comprehensive tools that offer video downloading along with other media content (images, audio files, documents) from social media platforms.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#195fd7",
    icons: [
      {
        "src": "/favicon.png",
        "sizes": "32x32",
        "type": "image/png"
      }
    ],
    related_applications: [],
    prefer_related_applications: false,
    scope: "/",
    orientation: "portrait",
    lang: "en",
    dir: "ltr",
  }
}