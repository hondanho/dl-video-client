"use client";
import { NextUIProvider } from "@nextui-org/react";
import ScrollUpButton from "@/components/ScrollUpButton";
import Script from "next/script";
import {NextIntlClientProvider} from 'next-intl';

export default function AppClientComponent({
  children,
  params: { locale },
  timeZone,
  messages,
  now,
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
  messages: any;
  timeZone: any;
  now: any;
}) {

  return (
    <NextIntlClientProvider locale={locale} timeZone={timeZone} now={now} messages={messages}>
      <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        />

        <Script strategy="lazyOnload">
          {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                      page_path: window.location.pathname,
                      });
                  `}
        </Script>
      <NextUIProvider>
        <ScrollUpButton />
        {children}
      </NextUIProvider>
    </NextIntlClientProvider>
  );
}
