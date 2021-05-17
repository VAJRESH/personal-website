import Head from "next/head";

export default function MetaData({ title, favicon='/favicon.ico' }) {
  return (
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Vajresh Personal Website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href={ favicon } />
    </Head>
  );
}
