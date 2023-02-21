import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

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
