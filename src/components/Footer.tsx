import { useTranslations } from "next-intl";
import Link from "next/link";
import slugify from "slugify";
const Footer = ({ locale }: { locale: string }) => {
  const t = useTranslations("PageTool");

  return (
    <footer className="body-font bg-gray-100 text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap px-4 py-16 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="flex flex-grow flex-wrap text-center md:text-left">
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font `font-medium mb-3 tracking-widest text-gray-900">
              Youtube Downloader
            </h2>
            <nav className="mb-10 grid list-none gap-3">
              <ul className="grid list-none gap-3">
                <li>
                  <Link
                    href={`/${locale}/youtube-mp4/${slugify(
                      t("youtube-mp4")
                    )}.html`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Download Youtube to mp4
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/youtube-short/${slugify(
                      t("youtube-short")
                    )}.html`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Youtube Shorts
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/tiktok/${slugify(t("tiktok"))}.html`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    TikTok Video Downloader
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/twitter/${slugify(t("twitter"))}.html`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Twitter Video Downloader
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/twitch/${slugify(t("twitch"))}.html`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Twitch Video Downloader
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/twitch-clip/${slugify(
                      t("twitch-clip")
                    )}.html`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Twitch Clip Downloader
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 font-medium tracking-widest text-gray-900">
              Instagram Video Downloader
            </h2>
            <nav className="mb-10 grid list-none gap-3">
              <ul className="grid list-none gap-3">
                <li>
                  <Link
                     href={`/${locale}/instagram/${slugify(t("instagram"))}.html`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Instagram Story Download
                  </Link>
                </li>
                <li>
                  <Link
                     href={`/${locale}/instagram/${slugify(t("instagram"))}.html`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Instagram Reels Download
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/instagram/${slugify(t("instagram"))}.html`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Instagram Viewer
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/facebook/${slugify(t("facebook"))}.html`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Facebook Video Downloader
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/facebook-reel/${slugify(
                      t("facebook-reel")
                    )}.html`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Facebook Reels Downloader
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 font-medium tracking-widest text-gray-900">
              About us
            </h2>
            <nav className="mb-10 grid list-none gap-3">
              <ul className="grid list-none gap-3">
                <li>
                  <Link
                    href={`/${locale}/privacy-policy`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/terms-of-service`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/contact`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/api-faq`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/about`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 font-medium tracking-widest text-gray-900">
              Partners
            </h2>
            <nav className="mb-10 grid list-none gap-3">
              <ul className="grid list-none gap-3">
                <li>
                  <Link
                    href={`/${locale}/youtube`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    OnlineVideoConverter
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/youtube`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    SaveFrom.net
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/youtube`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Save-From.net
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/youtube`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    iGram
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto flex flex-col flex-wrap p-4 sm:flex-row">
          <p className="px-4 text-center text-sm text-gray-500 sm:text-left">
            © 2023 Video DLer —
            <Link
              href="/"
              rel="noopener noreferrer"
              className="ml-1 text-gray-600"
            >
              Download video online
            </Link>
          </p>
          <span className="mt-2 inline-flex justify-center px-4 sm:ml-auto sm:mt-0 sm:justify-start">
            <Link href={`/${locale}/`} aria-label="Read more about facebook" className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link href={`/${locale}/`} aria-label="Read more about twitter" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link href={`/${locale}/`} aria-label="Read more about instagram"  className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link href={`/${locale}/`} aria-label="Read more about tiktok" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export async function getServerSideProps() {
  return {
    props: {}
  };
}

export default Footer;
