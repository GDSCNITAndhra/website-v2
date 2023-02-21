import Layout from "../components/layout/Layout";
import Loader from "../components/loader/Loader";
import "../styles/globals.css";
import NProgress from "nprogress";
import { useState } from "react";
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
    <Layout>
      {loading && <Loader />}
      <Component {...pageProps} />
    </Layout>
  );
}
