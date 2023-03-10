import Head from 'next/head';
import Script from 'next/script';

export default function SEO({ title, description }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-4Z4ZKL03MX`}
      />
      <Script id="gt-tag" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4Z4ZKL03MX');
        `}
      </Script>
      <Head>
        <title>Deepak Gusaiwal</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
      </Head>
    </>
  );
}

