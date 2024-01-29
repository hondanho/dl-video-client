import { FAQ } from "@/types";
import { useLocale } from "next-intl";

export const structuredFaq = (faqs: FAQ[]) => {
  return {
    "@context": "https://schema.org",
    name: "Frequently Asked Questions",
    "@type": "FAQPage",
    mainEntity: faqs.map((x) => {
      return {
        "@type": "Question",
        name: x.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: x.answer,
        },
      };
    }),
  };
};

export const structuredVideoObject = (t: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: t("title"),
    contentUrl: process.env.NEXT_PUBLIC_LINK_YOUTUBE,
    embedUrl: process.env.NEXT_PUBLIC_LINK_YOUTUBE_EMBED,
    thumbnailUrl: process.env.NEXT_PUBLIC_LINK_THUMBNAIL_URL,
    description: t("description"),
    duration: "PT2M",
    productionCompany: {
      "@type": "Organization",
      url: process.env.NEXT_PUBLIC_WEBSITE_URL,
      name: process.env.NEXT_PUBLIC_NAME,
    },
    author: {
      "@type": "Organization",
      url: process.env.NEXT_PUBLIC_WEBSITE_URL,
      name: process.env.NEXT_PUBLIC_NAME,
    },
    keywords: t("keywords"),
    uploadDate: "2022-07-09T17:23:47.793Z",
  };
};

export const structuredHowTo = (t: any, base: any, path: string, name: string = "") => {
  const locale = useLocale();

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: name ?? t("#1"),
    description: t("description"),
    totalTime: "PT2M",
    supply: [
      {
        "@type": "HowToSupply",
        name: "URL",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: t("title"),
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: base("#8"),
        text: base("#9"),
        image: "/images/home/how_can_i_save.gif",
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${locale}/${path}`,
      },
      {
        "@type": "HowToStep",
        name: base("#10"),
        text: base("#11"),
        image: "/images/home/insert_video_link.gif",
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${locale}/${path}`,
      },
      {
        "@type": "HowToStep",
        name: base("#12"),
        text: base("#13"),
        image: "/images/home/how_can_i_save_.gif",
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${locale}/${path}`,
      },
    ],
    video: {
      "@type": "VideoObject",
      name: t("title"),
      description: t("description"),
      contentUrl: process.env.NEXT_PUBLIC_LINK_YOUTUBE,
      embedUrl: process.env.NEXT_PUBLIC_LINK_YOUTUBE_EMBED,
      thumbnailUrl: process.env.NEXT_PUBLIC_LINK_THUMBNAIL_URL,
      uploadDate: "2022-07-09T17:23:47.793Z",
      duration: "PT2M",
    },
  };
};

export const structuredSoftwareApplication = (
  t: any,
  path: string,
  ratingCount: number
) => {
  const locale = useLocale();

  return {
    "@context": "http://schema.org/",
    "@type": "SoftwareApplication",
    url: process.env.NEXT_PUBLIC_WEBSITE_URL,
    name: t("title"),
    description: t("description"),
    operatingSystem: ["Windows", "macOS", "Android", "iOS"],
    applicationCategory: "MultimediaApplication",
    screenshot: "/images/home/how_can_i_save.gif",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingCount: ratingCount,
      reviewCount: ratingCount,
      bestRating: "5",
      ratingValue: "4.9",
      worstRating: "1",
      alternateName: process.env.NEXT_PUBLIC_NAME,
      mainEntityOfPage: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${locale}/${path}`,
      name: process.env.NEXT_PUBLIC_NAME,
    },
    alternativeHeadline: t("title"),
    copyrightYear: "2023",
    headline: t("title"),
    keywords: t("keywords"),
    offers: {
      "@type": "Offer",
      price: "0.0",
      priceCurrency: "USD",
      alternateName: process.env.NEXT_PUBLIC_NAME,
      description: t("title"),
      mainEntityOfPage: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${locale}/${path}`,
      name: process.env.NEXT_PUBLIC_NAME,
    },
    alternateName: process.env.NEXT_PUBLIC_NAME,
    mainEntityOfPage: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${locale}/${path}`,
  };
};

export const structuredEntertainmentBusiness = (t: any, path: string) => {
  const locale = useLocale();

  return {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: t("title"),
    alternateName: t("title"),
    "@id": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${locale}/${path}`,
    logo: "/images/android-chrome-512x512.png",
    image: "/images/android-chrome-512x512.png",
    description: t("description"),
    priceRange: "free",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1203 W Monroe St",
      addressLocality: "Phoenix",
      addressRegion: "Arizona",
      postalCode: "85007",
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK,
      process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
      process.env.NEXT_PUBLIC_SOCIAL_PINTEREST,
      process.env.NEXT_PUBLIC_SOCIAL_TIKTOK,
      process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE,
    ],
  };
};

export const structuredArtical = (t: any, path: string, openGraph: string) => {
  const locale = useLocale();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${locale}/${path}`,
    },
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${locale}/${path}`,
    datePublished: "2023-12-31",
    dateModified: "2023-12-31",
    headline: t("title"),
    image: {
      "@type": "ImageObject",
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${openGraph}`,
      height: 256,
      width: 256,
    },
    articleBody: t("description"),
    author: {
      "@type": "Organization",
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${locale}/contact`,
      name: process.env.NEXT_PUBLIC_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: process.env.NEXT_PUBLIC_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/favicon.ico`,
        height: 256,
        width: 256,
      },
    },
  };
};
