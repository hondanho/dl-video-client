import { useTranslations } from "next-intl";

const APIPage = () => {
  const t = useTranslations("Page.api-faq");
  
  return (
    <div className="mx-auto my-8 h-fit max-w-4xl flex-1 bg-white p-4 shadow-sm md:rounded">
      <h1 className="mb-4 text-2xl font-bold">{t("title")}</h1>
      <div>
      {t("#1", {website_url: process.env.NEXT_PUBLIC_WEBSITE_URL})}
      </div>
      <p>
        The {process.env.NEXT_PUBLIC_WEBSITE_URL} API supports downloads from various websites,
        including:
      </p>
      <ul className="list-disc my-4 mx-0 pl-10">
        <li>YouTube</li>
        <li>TikTok</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Pinterest</li>
        <li>Twitter</li>
        <li>Twitch</li>
        <li>Netflix</li>
        <li>Vimeo</li>
        <li>Twitter</li>
      </ul>
      <p>
        {t("#2")}         <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>{process.env.NEXT_PUBLIC_EMAIL}</a>.
      </p>
    </div>
  );
};

export default APIPage;
