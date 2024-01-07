import { useTranslations } from "next-intl";

const PrivacyPolicyPage = () => {
  const t = useTranslations("Page.privacy-policy");

  return (
    <div className="mx-auto my-8 grid h-fit max-w-4xl flex-1 gap-5 bg-white p-4 shadow-sm md:rounded">
      <h1 className="mb-2 text-2xl font-bold">{t("title")}</h1>

      <section className="">
        <h2 className="mb-2 font-bold">1. {t("#1")}</h2>
        <p className="mb-2">
          {t("#2", { website_url: process.env.NEXT_PUBLIC_WEBSITE_URL })}
        </p>
        <p className="mb-2">{t("#3")}</p>
      </section>

      <section className="mb-2 ">
        <h2 className="mb-2 font-bold">2. {t("#4")}</h2>
        <p className="mb-2">
          {t("#5")}
          <a
            target="_blank"
            href="https://www.privacypolicies.com/blog/privacy-policy-google-adsense/"
            className="text-blue-600 hover:underline"
          >
            {" "}
            privacypolicies.com{" "}
          </a>
          &&
          <a
            target="_blank"
            href="https://www.termsfeed.com/blog/privacy-policy-google-adsense/"
            className="text-blue-600 hover:underline"
          >
            {" "}
            termsfeed.com{" "}
          </a>
        </p>
        <p className="mb-2">
          {t("#6")}
          <a
            target="_blank"
            href="https://adssettings.google.com/authenticated"
            className="text-blue-600 hover:underline"
          >
            {" "}
            {t("#7")}{" "}
          </a>
          {t("#8")}
          <a
            target="_blank"
            href="https://www.aboutads.info/"
            className="text-blue-600 hover:underline"
          >
            {" "}
            www.aboutads.info
          </a>
          .
        </p>
      </section>

      <section className="mb-2 ">
        <h2 className="mb-2 font-bold">3. {t("#9")}</h2>
        <p className="mb-2">{t("#10")}</p>
      </section>

      <section className="mb-2 ">
        <h2 className="mb-2 font-bold">4. {t("#11")}</h2>
        <p className="mb-2">
          {t("#12")}{" "}
          <span className="italic">{process.env.NEXT_PUBLIC_EMAIL}</span>.
        </p>
      </section>

      <section className="mb-2 ">
        <h2 className="mb-2 font-bold">5. {t("#13")}</h2>
        <p>{t("#14")}</p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
