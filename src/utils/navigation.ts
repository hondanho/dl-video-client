import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { Pathnames } from "next-intl/navigation";

export const locales = [
  "ar",
  "de",
  "en",
  "fi",
  "fr",
  "hi",
  "id",
  "it",
  "ja",
  "ko",
  "pt",
  "ru",
  "th",
  "tr",
  "vi",
] as const;

export const pathnames = {
  "/": "/",
  // '/youtube/[slug]': {
  //   en: '/youtube/[slug]',
  //   de: '/Youtube/[slug]',
  //   ar: '/YouTubeموقع/[slug]',
  //   pt: '/Youtube/[slug]',
  //   ru: '/youtube/[slug]',
  //   id: '/yotubefi/[slug]',
  //   tr: '/youtube/[slug]',
  //   fr: '/yotubefi/[slug]',
  //   it: '/youtube/[slug]',
  //   hi: '/yotubefi/[slug]',
  //   ja: '/youtube/[slug]',
  //   ko: '/yotubefi/[slug]',
  //   th: '/yotubefi/[slug]'
  // }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`, `as-needed`
export const localePrefix = "always";
export const localeDetection = true;
export type AppPathnames = keyof typeof pathnames;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales,
    localePrefix,
  });

export const localeNames: {
  name: string;
  value: string;
}[] = [
  {
    name: "Arabic",
    value: "ar",
  },
  {
    name: "German",
    value: "de",
  },
  {
    name: "English",
    value: "en",
  },
  {
    name: "Finnish",
    value: "fi",
  },
  {
    name: "French",
    value: "fr",
  },
  {
    name: "Hindi",
    value: "hi",
  },
  {
    name: "Indonesian",
    value: "id",
  },
  {
    name: "Italian",
    value: "it",
  },
  {
    name: "Japanese",
    value: "ja",
  },
  {
    name: "Korean",
    value: "ko",
  },
  {
    name: "Portugal",
    value: "pt",
  },
  {
    name: "Russian",
    value: "ru",
  },
  {
    name: "Thai",
    value: "th",
  },
  {
    name: "Turkish",
    value: "tr",
  },
  {
    name: "Vietnamese",
    value: "vi",
  }
];
