import { apiPlugin, storyblokInit } from "@storyblok/react";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

const STORYBLOK_ACCESS_TOKEN = process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN;

storyblokInit({
  accessToken: STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Natalia Stelmach Portfolio</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
        <meta
          name="description"
          content="This is my portfolio project. It contains sections like home, about, work, experience, contact and resume. Includes several animations. It is made with CMS. "
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@600&family=Montserrat:wght@400;500&family=Roboto&family=Roboto+Mono:wght@500&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
      </Head>
      <Script
        src="https://kit.fontawesome.com/49fa9466f5.js"
        crossOrigin="anonymous"
      ></Script>

      <Component {...pageProps} />
    </>
  );
}
