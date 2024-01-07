"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [suscess, setSuscess] = useState(false);
  const t = useTranslations("Page.contact");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = { email, message };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setSuscess(true);
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto my-8 mb-20 h-fit flex-1 bg-white p-4 shadow-sm md:rounded">
      <div className="mb-12 flex w-full flex-col text-center">
        <h1 className="mb-2 text-2xl font-bold text-black">{t("title")}</h1>
        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
          {t("#1")}{" "}
          <a
            className="hover:text-decoration-underline"
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          >
            {process.env.NEXT_PUBLIC_EMAIL}
          </a>
        </p>
      </div>
      <section className="body-font relative text-gray-600">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            className="h-full w-full"
            frameBorder="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
        </div>
        <div className="container mx-auto flex px-5 py-24">
          {!suscess && (
            <form
              className="relative z-10 mt-10 flex w-full flex-col rounded bg-white p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/2"
              onSubmit={handleSubmit}
            >
              <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
                {t("#2")}
              </h2>
              {/* <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p> */}
              <div className="relative">
                <label className="text-sm leading-7 text-gray-600">
                  {t("#3")}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  id="email"
                  name="email"
                  className="w-full rounded border border-gray-300 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:bg-white focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div className="relative mb-4">
                <label className="text-sm leading-7 text-gray-600">
                  {t("#4")}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  id="message"
                  name="message"
                  className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                ></textarea>
              </div>
              <button
                className="rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
                type="submit"
              >
                {t("#5")}
              </button>
              {/* <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
            </form>
          )}
          {suscess && (
            <div className="relative z-10 mt-10 flex min-h-[300px] w-full flex-col rounded bg-white p-8 text-center text-green-500 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/2">
              {t("#6")}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
