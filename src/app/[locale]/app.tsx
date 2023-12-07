"use client";
import { NextUIProvider } from "@nextui-org/react";
import ScrollUpButton from "@/components/ScrollUpButton";
import Script from "next/script";

export default function AppClientComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
    </>
  );
}
