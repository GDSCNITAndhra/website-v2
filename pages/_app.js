import Layout from "../components/layout/Layout";
import Loader from "../components/loader/Loader";
import "../styles/globals.css";
import NProgress from "nprogress";
import { useState } from "react";
import Head from "next/head";
import { Router } from "next/router";
NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
    NProgress.done();
  });
  return (
    <>
      <Head>
        <title>GDSC NIT-Andhra</title>
        <meta
          name="description"
          content="Come join us in the Adventure of becoming a better Developer, together."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        {loading && <Loader />}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
