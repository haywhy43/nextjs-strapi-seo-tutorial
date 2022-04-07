import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const seoDetails = pageProps?.content?.seo.data.attributes || {};

  return (
    <>
      <Head>
        <title>{seoDetails.Title}</title>
        {seoDetails.seo_meta_tags &&
          seoDetails.seo_meta_tags.data.map(({ attributes }: any, i: any) => (
            <meta key={i} {...attributes} />
          ))}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
