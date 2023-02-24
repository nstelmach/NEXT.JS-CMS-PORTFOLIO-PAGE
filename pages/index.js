import Head from "next/head";
import Layout from "../components/Layout";

export default function Document() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@600&family=Montserrat:wght@400;500&family=Roboto&family=Roboto+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout />
    </div>
  );
}
