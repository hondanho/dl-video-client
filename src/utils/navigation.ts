import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { Pathnames } from "next-intl/navigation";

export const locales = [
  "en",
  "de",
  "ar",
  "pt",
  "ru",
  "id",
  "tr",
  "fr",
  "it",
  "hi",
  "ja",
  "ko",
  "th",
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
    name: "English",
    value: "en",
  },
  {
    name: "German",
    value: "de",
  },
  {
    name: "Arabic",
    value: "ar",
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
    name: "Indonesian",
    value: "id",
  },
  {
    name: "Turkish",
    value: "tr",
  },
  {
    name: "Français",
    value: "fr",
  },
  {
    name: "Italian",
    value: "it",
  },
  {
    name: "Hindi",
    value: "hi",
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
    name: "Thai",
    value: "th",
  },
];
