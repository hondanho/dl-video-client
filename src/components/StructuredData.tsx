import Head from 'next/head';
import Script from 'next/script';

export default function StructuredData({ data }: any) {
  return (
    <Head>
      <Script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
}