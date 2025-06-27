# Hondanho Videos Downloader

A modern, full-featured web application for downloading videos from popular platforms like YouTube, TikTok, Instagram, Facebook, Twitter, Twitch, and more. Built with Next.js, TypeScript, and Tailwind CSS, it offers a seamless, multi-language user experience and robust backend scraping logic.

---

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Supported Platforms](#supported-platforms)
- [Getting Started](#getting-started)
- [Development Guide](#development-guide)
- [Deployment](#deployment)
- [Internationalization](#internationalization)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Multi-platform Video Downloading**: Download videos from YouTube, TikTok, Instagram, Facebook, Twitter, Twitch, and more.
- **No Watermark**: Download videos without watermarks where possible.
- **Multi-language Support**: UI supports 30+ languages.
- **Responsive UI**: Mobile-first, modern design using Tailwind CSS and NextUI.
- **SEO Optimized**: Structured data, open graph images, and meta tags for high discoverability.
- **Rate Limiting**: Protects backend from abuse using Upstash Redis.
- **Safe & Secure**: Norton Safe Web scanned.
- **FAQ & Support**: Built-in FAQ and Disqus comments for user support.
- **App Store/Play Store Links**: Promotes mobile app versions.

---

## Architecture

### Frontend

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, SSR/SSG)
- **UI**: [Tailwind CSS](https://tailwindcss.com/), [NextUI](https://nextui.org/)
- **Internationalization**: [next-intl](https://github.com/amannn/next-intl)
- **Forms**: Custom React components for each platform (YouTube, TikTok, etc.)
- **SEO**: Dynamic metadata, open graph images, and structured data components.

### Backend

- **API Routes**: `/api/video` and others for platform-specific scraping.
- **Scraping**: Uses Cheerio for HTML parsing, Axios for HTTP requests.
- **Rate Limiting**: [@upstash/ratelimit](https://github.com/upstash/ratelimit) and [@upstash/redis](https://github.com/upstash/redis).
- **Error Handling**: Centralized exception and error response utilities.

### Directory Structure

```
src/
  app/
    [locale]/         # Localized routes and pages
    api/              # API endpoints for video info
  components/         # UI components and forms
  configs/            # SEO, API, and platform configs
  lib/                # Scrapers, actions, and exceptions
  types/              # TypeScript types
  utils/              # Utility functions (i18n, rate-limiter, etc.)
  styles/             # Tailwind and global CSS
public/
  images/             # Static images and open graph assets
messages/             # i18n translation files
```

---

## Supported Platforms

- **YouTube** (videos, shorts)
- **TikTok**
- **Instagram** (videos, reels)
- **Facebook** (videos, reels)
- **Twitter**
- **Twitch** (clips, videos)
- **Pinterest**
- **Vimeo**
- **Netflix** (limited)
- ...and more

---

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn or npm

### Installation

```bash
git clone https://github.com/yourusername/hondanho-videos-downloader.git
cd hondanho-videos-downloader
yarn install
# or
npm install
```

### Development

```bash
yarn dev
# or
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Linting & Formatting

```bash
yarn lint
yarn prettier
```

### Build for Production

```bash
yarn build
yarn start
```

---

## Development Guide

- **Add a New Platform**: Create a new form in `src/components/form/`, add a page in `src/app/[locale]/`, and implement a scraper in `src/lib/`.
- **Add a New Language**: Add a JSON file in `messages/` and update `src/utils/i18n.ts`.
- **API Integration**: Extend `src/app/api/video/route.ts` and related scrapers.
- **Styling**: Use Tailwind CSS classes. Global styles in `src/styles/globals.css`.

---

## Deployment

- **Vercel**: Ready for Vercel deployment. See `vercel.json` for rewrites.
- **Other Platforms**: Any Node.js hosting supporting Next.js 14+.

---

## Internationalization

- All user-facing text is translatable.
- Add new languages by creating a new JSON file in `messages/` and updating the i18n config.

---

## API

### Example: Get Video Info

```
GET /api/video?url=https://www.instagram.com/p/POST_ID/
```

Returns video metadata and download links.

- Extendable for other platforms.
- Rate-limited for abuse prevention.

---

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/foo`)
3. Commit your changes (`git commit -am 'Add foo'`)
4. Push to the branch (`git push origin feature/foo`)
5. Create a new Pull Request

---

## License

MIT

---

## Credits

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextUI](https://nextui.org/)
- [Upstash](https://upstash.com/)
- [Cheerio](https://cheerio.js.org/)
- [Disqus](https://disqus.com/)

---

## FAQ

See the in-app FAQ or `/api-faq` page for more details. 