import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
