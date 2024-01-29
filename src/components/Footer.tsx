import { useTranslations } from "next-intl";
import Link from "next/link";
import { Extension } from "./ui/Extension";

const Footer = ({ locale }: { locale: string }) => {
  const t = useTranslations("Footer");
  const page = useTranslations("Page");

  return (
    <footer className="body-font bg-gray-100 pb-8 pt-20 text-gray-600">
      <Extension/>
      <div className="mx-auto flex flex-col flex-wrap px-4 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="flex flex-grow flex-wrap text-center md:text-left">
          <div className="youtube-downloader w-full px-4 md:w-1/2 lg:w-1/6">
            <h2 className="title-font mb-3 font-medium tracking-widest text-gray-900">
              {t("#1")}
            </h2>
            <nav className="mb-10 grid list-none gap-3">
              <ul className="grid list-none gap-3">
                <li>
                  <Link
                    href={`/${locale}/download-youtube-video`}
                    title={page("download-youtube-video.title")}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#2")}
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href={`/${locale}/youtube-downloader/${slugify(
                      "youtube-to-mp3-converter"
                    )}`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#3")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/youtube-downloader/${slugify(
                      "youtube-to-mp4-converter"
                    )}`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#4")}
                  </Link>
                </li> */}
                <li>
                  <Link
                    href={`/${locale}/download-youtube-shorts`}
                    title={page("download-youtube-shorts.title")}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#5")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="facebook-downloader w-full px-4 md:w-1/2 lg:w-1/6">
            <h2 className="title-font mb-3 font-medium tracking-widest text-gray-900">
              {t("#6")}
            </h2>
            <nav className="mb-10 grid list-none gap-3">
              <ul className="grid list-none gap-3">
                <li>
                  <Link
                    title={page("download-facebook-video.title")}
                    href={`/${locale}/download-facebook-video`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#7")}
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href={`/${locale}/facebook-downloader/${slugify(
                      "download-facebook-reels"
                    )}`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#8")}
                  </Link>
                </li> */}

                <li>
                  <Link
                    title={page("download-facebook-reels.title")}
                    href={`/${locale}/download-facebook-reels`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#9")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="instagram-downloader w-full px-4 md:w-1/2 lg:w-1/6">
            <h2 className="title-font mb-3 font-medium tracking-widest text-gray-900">
              {t("#10")}
            </h2>
            <nav className="mb-10 grid list-none gap-3">
              <ul className="grid list-none gap-3">
                <li>
                  <Link
                    title={page("download-instagram-video.title")}
                    href={`/${locale}/download-instagram-video`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#11")}
                  </Link>
                </li>
                <li>
                  <Link
                    title={page("download-instagram-reels.title")}
                    href={`/${locale}/download-instagram-reels`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#12")}
                  </Link>
                </li>

                {/* <li>
                  <Link
                    href={`/${locale}/instagram-downloader/${slugify(
                      "download-instagram-video-to-mp4"
                    )}`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#13")}
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>
          <div className="other-downloader w-full px-4 md:w-1/2 lg:w-1/6">
            <h2 className="title-font mb-3 font-medium tracking-widest text-gray-900">
              {t("#14")}
            </h2>
            <nav className="mb-10 grid list-none gap-3">
              <ul className="grid list-none gap-3">
                <li>
                  <Link
                    title={page("download-tiktok-video.title")}
                    href={`/${locale}/download-tiktok-video`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#15")}
                  </Link>
                </li>
                <li>
                  <Link
                    title={page("download-twitter-video.title")}
                    href={`/${locale}/download-twitter-video`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#16")}
                  </Link>
                </li>

                <li>
                  <Link
                    title={page("download-twitch-video.title")}
                    href={`/${locale}/download-twitch-video`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#17")}
                  </Link>
                </li>

                <li>
                  <Link
                    title={page("download-twitch-clip.title")}
                    href={`/${locale}/download-twitch-clip`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#18")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="privacy w-full px-4 md:w-1/2 lg:w-1/6">
            <h2 className="title-font mb-3 font-medium tracking-widest text-gray-900">
              {t("#20")}
            </h2>
            <nav className="mb-10 grid list-none gap-3">
              <ul className="grid list-none gap-3">
                <li>
                  <Link
                    title={page("privacy-policy.title")}
                    href={`/${locale}/privacy-policy`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#21")}
                  </Link>
                </li>
                <li>
                  <Link
                    title={page("terms-of-service.title")}
                    href={`/${locale}/terms-of-service`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#22")}
                  </Link>
                </li>
                <li>
                  <Link
                    title={page("dcma.title")}
                    href={`/${locale}/dcma`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#23")}
                  </Link>
                </li>
                <li>
                  <Link
                    title={page("contact.title")}
                    href={`/${locale}/contact`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#24")}
                  </Link>
                </li>
                <li>
                  <Link
                    title={page("api-faq.title")}
                    href={`/${locale}/api-faq`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/blog`}
                    title="blog"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {t("#25")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="follow-us w-full px-4 md:w-1/2 lg:w-1/6">
            <h2 className="title-font mb-3 font-medium tracking-widest text-gray-900">
              {t("#26")}
            </h2>
            <div>
              <input
                type="text"
                placeholder="Enter your email address"
                name="hs-trailing-button-add-on"
                className="block w-full rounded border-gray-200 px-4 py-3 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
              />
              <button
                type="button"
                className="mt-2 inline-flex w-full items-center justify-center gap-x-2 rounded border border-transparent bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>
                {t("#27")}
              </button>
            </div>
          </div>
          {/* <div className="w-full px-4 md:w-1/2 lg:w-1/6">
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
          </div> */}
        </div>
      </div>
      <div>
        <div className="container mx-auto px-4 text-center sm:flex-row">
          <span className="my-4 inline-flex justify-center space-x-6 text-center sm:justify-start">
            <Link
              target="_blank"
              title="youtube"
              href={`${process.env.SOCIAL_YOUTUBE}`}
              aria-label="Read more about facebook"
              className="text-gray-500"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4"
                viewBox="0 -3 20 20"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-300.000000, -7442.000000)"
                    fill="currentColor"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                        id="youtube-[#168]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
            <Link
              target="_blank"
              title="facebook"
              href={`${process.env.SOCIAL_FACEBOOK}`}
              aria-label="Read more about facebook"
              className="text-gray-500"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            {/* <Link href={`${process.env.SOCIAL_FACEBOOK}`} aria-label="Read more about twitter" className="ml-3 text-gray-500">
               <svg
                 fill="currentColor"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="2"
                 className="h-4 w-4"
                 viewBox="0 0 24 24"
               >
                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
               </svg>
             </Link> */}
            <Link
              target="_blank"
              title="instagram"
              href={`${process.env.SOCIAL_INSTAGRAM}`}
              aria-label="Read more about instagram"
              className="text-gray-500"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link
              target="_blank"
              title="pinterest"
              href={`${process.env.SOCIAL_PINTEREST}`}
              aria-label="Read more about instagram"
              className="text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4"
                viewBox="0 0 20 20"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-220.000000, -7399.000000)"
                    fill="currentColor"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M173.876,7239 C168.399,7239 164,7243.43481 164,7248.95866 C164,7253.05869 166.407,7256.48916 169.893,7258.07936 C169.893,7256.21186 169.88,7256.45286 171.303,7250.38046 C170.521,7248.80236 171.129,7246.19673 172.88,7246.19673 C175.31,7246.19673 173.659,7249.79964 173.378,7251.2174 C173.129,7252.30544 173.959,7253.14238 174.955,7253.14238 C176.864,7253.14238 178.108,7250.71524 178.108,7247.87063 C178.108,7245.69456 176.615,7244.10437 174.042,7244.10437 C169.467,7244.10437 168.307,7249.19966 169.893,7250.79893 C170.292,7251.40294 169.893,7251.43118 169.893,7252.22174 C169.616,7253.05768 167.403,7251.84259 167.403,7248.70757 C167.403,7245.86195 169.727,7242.51518 174.457,7242.51518 C178.191,7242.51518 180.681,7245.27609 180.681,7248.2054 C180.681,7252.13805 178.523,7254.98366 175.37,7254.98366 C174.291,7254.98366 173.295,7254.3978 172.963,7253.72824 C172.36,7256.07371 172.238,7257.26258 171.303,7258.58153 C172.216,7258.83261 173.129,7259 174.125,7259 C179.602,7259 184,7254.56519 184,7249.04235 C183.752,7243.43481 179.353,7239 173.876,7239"
                        id="pinterest-[#180]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </Link>

            {/* <Link href={`${process.env.SOCIAL_TIKTOK}`} aria-label="Read more about tiktok" className="ml-3 text-gray-500">
               <svg
                 fill="currentColor"
                 stroke="currentColor"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="0"
                 className="h-4 w-4"
                 viewBox="0 0 24 24"
               >
                 <path
                   stroke="none"
                   d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                 ></path>
                 <circle cx="4" cy="4" r="2" stroke="none"></circle>
               </svg>
             </Link> */}
            <Link
              title="tiktok"
              target="_blank"
              href={`${process.env.SOCIAL_TIKTOK}`}
              aria-label="Read more about tiktok"
              className="text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
              </svg>
            </Link>
            <Link
              title="email"
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              aria-label="Read more about tiktok"
              className="text-gray-500"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
            </Link>
          </span>
          <p className="px-4 text-center text-sm text-black">
            © 2023{" "}
            <Link
              href="/"
              rel="noopener noreferrer"
              className="ml-1 text-black"
            >
              {process.env.DOMAIN}
            </Link>{" "}
            - {t("#28")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
