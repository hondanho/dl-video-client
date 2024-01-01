import createMiddleware from "next-intl/middleware";
import { pathnames, localePrefix, locales, localeDetection } from "@/utils/navigation";

export default createMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix,
  localeDetection
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|de|en|fi|fr|hi|id|it|ja|ko|pt|ru|th|tr|vi)/:path*"],
};
