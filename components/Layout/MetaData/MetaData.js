import Head from "next/head";

export default function MetaData({ title, favicon = "/favicon.ico" }) {
  return (
    <Head>
      <title>{title}</title>
      
      <meta charSet="utf-8" />
      <meta name="description" content="Vajresh Personal Website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="google-site-verification" content="Y0RNDMLimNQxeWzIDODsJ7Ms9iqvmkCx21FP0Z0-gFI" />
      
      <link rel="icon" href={favicon} />
      
      {/* <!-- Icons --> */}
      <script
        src="https://kit.fontawesome.com/77ffb54878.js"
        crossOrigin="anonymous"
      />
    </Head>
  );
}
