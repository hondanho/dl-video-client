import { Inter as MainFont } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/utils";
import { mainMetadata } from "@/configs/seo";
import AppClientComponent from "./app";
import { notFound } from "next/navigation";
import { getTimeZone, unstable_setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import { locales } from "@/utils/navigation";
import Footer from "@/components/Footer";
import { useMessages } from "next-intl";

const mainFont = MainFont({
  subsets: ["latin"],
});
export const metadata = mainMetadata;

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
          "overflow-x-hidden bg-stone-50 text-black",
          "flex min-h-screen w-full flex-col justify-between",
          "scroll-smooth",
          mainFont.className
        )}
      >
        <meta name="msvalidate.01" content="CAF25435A65CBAB10D2B2059EE7AF92E" />
        <AppClientComponent
          {...{
            messages,
            children,
            params: { locale },
            timeZone: getTimeZone(),
            now: Date.now(),
          }}
        >
          <Navbar />
          {children}
        </AppClientComponent>
        <Footer locale={locale} />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

RootLayout.getInitialProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      messages: {
        ...require(`../../../messages/${locale ?? "en"}.json`),
      },
    },
  };
};
