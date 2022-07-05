import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const defaultPageLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Soerjo App</title>
        <meta name="description" content="My Soerjo Page home" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {page}
    </>
  );
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? defaultPageLayout;

  return getLayout(
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
