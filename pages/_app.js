import Layout from "../components/layout/Layout";
// import Landing from "../components/landing/Landing";
// import Parallax from "../components/parallax/Parallax";
// import { useState } from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
