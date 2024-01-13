import { FAQ } from "@/types";

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
      name: t("title"),
    },
    author: {
      "@type": "Organization",
      url: process.env.NEXT_PUBLIC_WEBSITE_URL,
      name: t("title"),
    },
    keywords: t("keywords"),
    uploadDate: "2022-07-09T17:23:47.793Z",
  };
};

export const structuredHowTo = (t: any, base: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: t("#1"),
    step: [
      {
        "@type": "HowToStep",
        name: base("#8"),
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: base("#9"),
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: base("#10"),
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: base("#11"),
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: base("#12"),
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: base("#13"),
          },
        ],
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

export const structuredSoftwareApplication = (t: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    url: process.env.NEXT_PUBLIC_WEBSITE_URL,
    name: t("title"),
    description: t("description"),
    operatingSystem: "Windows, MacOS, Chrome OS, Linux, iOS, Android",
    applicationCategory: "Social Media Networks",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      bestRating: 5,
      ratingCount: 79,
    },
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "GBP",
    },
  };
};

export const structuredEntertainmentBusiness = (t: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: t("title"),
    alternateName: t("description"),
    "@id": process.env.NEXT_PUBLIC_WEBSITE_URL,
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
