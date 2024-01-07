import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const mainMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("Metadata");

  return {
    metadataBase: new URL(`${process.env.WEBSITE_URL}`),
    title: t("name"),
    description: t("description"),
    authors: [
      {
        name: `@${process.env.WEBSITE_URL}`,
        url: process.env.WEBSITE_URL,
      },
    ],
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
    category: "website",
    robots: {
      index: false,
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
