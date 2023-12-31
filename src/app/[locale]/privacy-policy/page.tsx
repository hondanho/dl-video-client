const PrivacyPolicyPage = () => {
  return (
    <div className="mx-auto my-8 h-fit max-w-4xl flex-1 bg-white p-4 shadow-sm md:rounded grid gap-5">
      <h1 className="mb-2 text-2xl font-bold">Privacy Policy</h1>

      <section className="">
        <h2 className="mb-2 font-bold">1. Introduction</h2>
        <p className="mb-2">
          This Privacy Policy
          (Policy) informs users that the website
          <span className="text-gray-900">
            {" "}
            ({process.env.NEXT_PUBLIC_WEBSITE_URL})
          </span>{" "}
          does not collect, store, or process any personal information. By using
          the Website or Service, you acknowledge that no personal information
          is being collected or stored.
        </p>
        <p className="mb-2">
          Please note that this
          Policy is provided in compliance with legal requirements, even though
          the Website or Service does not collect or store any personal
          information.
        </p>
      </section>

      <section className="mb-2 ">
        <h2 className="mb-2 font-bold">
          2. Third-Party Advertising and Analytics
        </h2>
        <p className="mb-2">
          We use third-party
          advertising services, such as Google AdSense, to serve advertisements
          on the Website. These third parties may use cookies, web beacons, and
          other tracking technologies to collect information about your use of
          the Website and other websites, including your IP address, browser
          type, internet service provider, referring/exit pages, and date/time
          stamp. For more information, please visit
          <a
            target="_blank"
            href="https://www.privacypolicies.com/blog/privacy-policy-google-adsense/"
            className="text-blue-600 hover:underline"
          >
            {" "}
            privacypolicies.com{" "}
          </a>
          and
          <a
            target="_blank"
            href="https://www.termsfeed.com/blog/privacy-policy-google-adsense/"
            className="text-blue-600 hover:underline"
          >
            {" "}
            termsfeed.com{" "}
          </a>
          .
        </p>
        <p className="mb-2">
          You may opt-out of
          personalized advertising by visiting
          <a
            target="_blank"
            href="https://adssettings.google.com/authenticated"
            className="text-blue-600 hover:underline"
          >
            {" "}
            Ads Settings{" "}
          </a>
          or by visiting
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
        <h2 className="mb-2 font-bold">
          3. Changes to the Privacy Policy
        </h2>
        <p className="mb-2">
          We reserve the right to
          update, modify, or replace any part of the Policy at any time by
          posting the updated Policy on the Website. Your continued use of the
          Website or Service after the effective date of the updated Policy
          constitutes your acceptance of the new terms.
        </p>
      </section>

      <section className="mb-2 ">
        <h2 className="mb-2 font-bold">4. Contact Information</h2>
        <p className="mb-2">
          If you have any questions
          or concerns about this Policy, please contact the Website owner at{" "}
          <span className="italic">{process.env.NEXT_PUBLIC_EMAIL}</span>.
        </p>
      </section>

      <section className="mb-2 ">
        <h2 className="mb-2 font-bold">
          5. Acceptance of Privacy Policy
        </h2>
        <p>
          By accessing or using the Website or Service, you acknowledge that you
          have read, understood, and agree to be bound by the terms and
          conditions of this Policy.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
