import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { Pathnames } from "next-intl/navigation";

export const locales = [
  "en", "fr", "de", "it", "es", "hi", "tr", "af", "ar",
  "eu", "ca", "zh", "hr", "cs", "da", "ka", "el", "he",
  "hu", "is", "id", "ja", "ko", "no", "pl", "pt", "ro",
  "ru", "sr", "sk", "sl", "sv", "th", "uk", "ur", "vi"
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
  languageIcon: string;
}[] = [
  {
    name: "English",
    value: "en",
    languageIcon: "english"
  },
  {
    name: "Française",
    value: "fr",
    languageIcon: "french"
  },
  {
    name: "Deutsche",
    value: "de",
    languageIcon: "german"
  },
  {
    name: "Italiano",
    value: "it",
    languageIcon: "italian"
  },
  {
    name: "Español",
    value: "es",
    languageIcon: "spanish"
  },
  {
    name: "भारतीय भाषा",
    value: "hi",
    languageIcon: "hindi"
  },
  {
    name: "Türkçe",
    value: "tr",
    languageIcon: "turkish"
  },
  {
    name: "Afrikaans",
    value: "af",
    languageIcon: "afrikaans"
  },
  {
    name: "العربية",
    value: "ar",
    languageIcon: "arabic"
  },
  {
    name: "Euskara",
    value: "eu",
    languageIcon: "basque"
  },
  {
    name: "Català",
    value: "ca",
    languageIcon: "catalan"
  },
  {
    name: "中文",
    value: "zh",
    languageIcon: "chinese"
  },
  {
    name: "Hrvatski",
    value: "hr",
    languageIcon: "croatian"
  },
  {
    name: "čeština",
    value: "cs",
    languageIcon: "czech"
  },
  {
    name: "Dansk",
    value: "da",
    languageIcon: "danish"
  },
  {
    name: "ქართული",
    value: "ka",
    languageIcon: "georgian"
  },
  {
    name: "Ελληνικά",
    value: "el",
    languageIcon: "greek"
  },
  {
    name: "עברית",
    value: "he",
    languageIcon: "hebrew"
  },
  {
    name: "Magyar",
    value: "hu",
    languageIcon: "hungarian"
  },
  {
    name: "Íslenska",
    value: "is",
    languageIcon: "icelandic"
  },
  {
    name: "Indonesia",
    value: "id",
    languageIcon: "indonesian"
  },
  {
    name: "日本語",
    value: "ja",
    languageIcon: "japanese"
  },
  {
    name: "한국어",
    value: "ko",
    languageIcon: "korean"
  },
  {
    name: "Norsk",
    value: "no",
    languageIcon: "norwegian"
  },
  {
    name: "Polski",
    value: "pl",
    languageIcon: "polish"
  },
  {
    name: "Português",
    value: "pt",
    languageIcon: "portuguese"
  },
  {
    name: "Română",
    value: "ro",
    languageIcon: "romanian"
  },
  {
    name: "Pусский",
    value: "ru",
    languageIcon: "russian"
  },
  {
    name: "Српски",
    value: "sr",
    languageIcon: "serbian"
  },
  {
    name: "Slovenský",
    value: "sk",
    languageIcon: "slovak"
  },
  {
    name: "Slovenščina",
    value: "sl",
    languageIcon: "slovenian"
  },
  {
    name: "Svenska",
    value: "sv",
    languageIcon: "swedish"
  },
  {
    name: "ไทย",
    value: "th",
    languageIcon: "thai"
  },
  {
    name: "Yкраїнська",
    value: "uk",
    languageIcon: "ukrainian"
  },
  {
    name: "اردو",
    value: "ur",
    languageIcon: "urdu"
  },
  {
    name: "Tiếng Việt",
    value: "vi",
    languageIcon: "vietnamese"
  }
];
