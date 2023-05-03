import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "@fontsource/montserrat";
import Layout from "../components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const noNav = ["/"];
  const { asPath } = useRouter();
  console.log(asPath);

  if (noNav.includes(asPath)) {
    return (
      <>
        <Head>
          <title>Zach Barnes</title>
          <meta
            name="description"
            content="Created by Zach Barnes using Next.js"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />;
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}