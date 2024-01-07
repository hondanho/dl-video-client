"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Thankyoupage = () => {
  const t = useTranslations("Page.thankyou");
  const locale = useLocale();

  return (
    <div className="container mx-auto my-8 mb-20 h-fit min-h-[50px] flex-1 bg-white p-4 shadow-sm md:rounded">
      <div className="flex w-full flex-col text-center">
        <h1 className="mb-2 text-center text-2xl font-bold text-black">
          {t("title")}
        </h1>
      </div>
      <div className="flex w-full flex-col items-center justify-center text-center xl:px-0">
        <div
          className=" flex items-center rounded bg-blue-600 px-4 py-2 text-gray-100 transition duration-150 hover:bg-blue-700"
          title="Return Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <Link href="/">Return Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Thankyoupage;
