"use client"

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const DCMAPage = () => {
  const t = useTranslations("Page.dcma");
  const locale = useLocale();

  return (
    <div className="mx-auto my-8 h-fit flex-1 bg-white p-4 shadow-sm md:rounded mb-20 container">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="text-2xl mb-2 font-bold text-black text-left">
          {t("title")}
        </h1>
      </div>
      <section className="text-gray-600 body-font relative">

        <p>{t("#1", { name: process.env.NEXT_PUBLIC_NAME })}</p>
        <p>{t("#2", { name: process.env.NEXT_PUBLIC_NAME })}</p>
        <p>{t("#3", { name: process.env.NEXT_PUBLIC_NAME })}</p>
        <br />
        <p><strong>Required information:</strong></p>
        <ul className="ml-10">
          <li>{t("#5")}</li>
          <br />
          <li>{t("#6")}</li>
          <br />
          <li>{t("#7")}</li>
          <br />
          <li>{t("#8")}</li>
          <br />
          <li>{t("#9")}</li>
          <br />
          <li>{t("#10")}</li>
        </ul>
        <br /><br />
        <p>{t("#11")}</p>
        <p>{t("#12")}<Link
          href={`/${locale}/contact`}
          className="text-gray-600 hover:text-gray-800"
        >
          {t("#13")}
        </Link>
        </p>

      </section>
    </div>
  );
};

export default DCMAPage;
