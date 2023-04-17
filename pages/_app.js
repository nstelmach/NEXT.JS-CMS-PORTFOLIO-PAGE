import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Head from "next/head";
import Script from "next/script";

storyblokInit({
  accessToken: "3AkVhZJ53yxuVWSBqpDFOAtt",
  use: [apiPlugin],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Natalia Stelmach Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@600&family=Montserrat:wght@400;500&family=Roboto&family=Roboto+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
      </Head>
      <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></Script>
      <Script
        src="https://kit.fontawesome.com/49fa9466f5.js"
        crossorigin="anonymous"
      ></Script>

      <Component {...pageProps} />
    </>
  );
}
