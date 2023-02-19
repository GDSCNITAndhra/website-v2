
import Layout from "../components/layout/Layout";
import Landing from "../components/landing/Landing"
import { useState } from "react";

export default function App({ Component, pageProps }) {
  

  return (
    <>
      <Landing src="https://gdsc-yonsei.github.io/assets/images/GDSC-Logo.png" opacity={1} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
