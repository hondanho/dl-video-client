"use client"

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Thankyoupage = () => {
  const t = useTranslations("Page.thankyou");
  const locale = useLocale();

  return (
    <div className="mx-auto my-8 h-fit flex-1 bg-white p-4 shadow-sm md:rounded mb-20 container min-h-[50px]">
      <div className="flex flex-col text-center w-full">
        <h1 className="text-2xl mb-2 font-bold text-black text-center">
          {t("title")}
        </h1>
      </div>
      <div className="w-full flex flex-col items-center justify-center xl:px-0 text-center">
        <div className=" flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded transition duration-150" title="Return Home">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
          </svg>
          <Link href="/">Return Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Thankyoupage;
