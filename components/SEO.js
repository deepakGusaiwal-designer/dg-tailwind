import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>Deepak Gusaiwal</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
}
