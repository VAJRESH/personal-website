import Head from "next/head";

export default function MetaData({ title, favicon = "/favicon.ico" }) {
  return (
    <Head>
      <title>{title}</title>
      
      <meta charSet="utf-8" />
      <meta name="description" content="Vajresh Personal Website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

      <link rel="icon" href={favicon} />
      
      {/* <!-- Icons --> */}
      <script
        src="https://kit.fontawesome.com/77ffb54878.js"
        crossOrigin="anonymous"
      />
    </Head>
  );
}
