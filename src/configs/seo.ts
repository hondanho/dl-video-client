import { Metadata } from "next";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";

export const mainMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("Metadata");
  const locale = useLocale();

  return {
    viewport: "width=device-width, initial-scale=1.0",
    metadataBase: new URL(`${process.env.WEBSITE_URL}`),
    title: t("name") + " - " + process.env.DOMAIN,
    description: t("description"),
    authors: [
      {
        name: `@${process.env.WEBSITE_URL}`,
        url: process.env.WEBSITE_URL,
      },
    ],
    alternates: {
      canonical: process.env.WEBSITE_URL,
      [locale]: `${process.env.WEBSITE_URL}\\${locale}`,
    },
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
    ],
    applicationName: t("name"),
    keywords: t("keywords"),
    referrer: "origin",
    creator: `@${process.env.WEBSITE_URL}`,
    publisher: "Vercel",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: process.env.WEBSITE_URL,
      title: t("name"),
      description: t("description"),
      siteName: t("name"),
      images: "/images/open-graph.png",
    },
    twitter: {
      card: "summary_large_image",
      title: t("name"),
      description: t("description"),
      images: "/images/open-graph.png",
      creator: `@${process.env.WEBSITE_URL}`,
    },
    abstract: t("description"),
    category: "Social Media Networks",
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/images/favicon-32x32.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/webmanifest.json",
  };
};

export const pageMetadata = async (
  key: string,
  path?: string,
  openGraph?: string
): Promise<Metadata> => {
  const t = await getTranslations(key);
  const locale = useLocale();

  return {
    title: t("title") + " - " + process.env.DOMAIN,
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: process.env.WEBSITE_URL,
      title: t("title"),
      description: t("description"),
      siteName: t("title"),
      images: openGraph ? openGraph : "/images/open-graph.png",
    },
    alternates: {
      canonical: process.env.WEBSITE_URL,
      languages: {
        [locale]: `${process.env.WEBSITE_URL}`,
        [locale]: `${process.env.WEBSITE_URL}\\${locale}\\${path}`,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: t("imageUrl"),
      creator: `@${process.env.WEBSITE_URL}`,
    },
    abstract: t("description"),
  };
};
