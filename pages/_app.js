import "@/styles/globals.css";
import Layout from "../components/layout/Layout";
import Landing from "../components/landing/Landing"
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Landing/>
      <Component {...pageProps} />
    </Layout>
  );
}
