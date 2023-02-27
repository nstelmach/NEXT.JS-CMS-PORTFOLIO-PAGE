import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Head from "next/head";

storyblokInit({
  accessToken: "3AkVhZJ53yxuVWSBqpDFOAtt",
  use: [apiPlugin],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@600&family=Montserrat:wght@400;500&family=Roboto&family=Roboto+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
