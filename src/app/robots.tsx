import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/_next/', '/api/']
    },
    sitemap: `https://${process.env.WEBSITE_URL}/sitemap.xml`,
    host: process.env.WEBSITE_URL
  }
}