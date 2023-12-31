import Script from 'next/script';

export default function StructuredData({ data }: any) {
  return (
      <Script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
  );
}