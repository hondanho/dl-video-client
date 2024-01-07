import createMiddleware from "next-intl/middleware";
import {
  pathnames,
  localePrefix,
  locales,
  localeDetection,
} from "@/utils/navigation";

export default createMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix,
  localeDetection,
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/",
    "/(en|fr|de|it|es|hi|tr|af|ar|eu|ca|zh|hr|cs|da|ka|el|he|hu|is|id|ja|ko|no|pl|pt|ro|ru|sr|sk|sl|sv|th|uk|ur|vi)/:path*",
  ],
};
