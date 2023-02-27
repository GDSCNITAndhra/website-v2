import Footer from "./footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./navbar/Navbar";

function Layout({ children }) {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setVisible(window.pageYOffset > 200)
      );
    }
  }, []);
  const handleSetActive = () => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <>
      <Navbar
        visible={visible}
        active={active}
        handleSetActive={handleSetActive}
      />
      <div style={active ? { display: "none" } : { display: "block" }}>
        {children}
      </div>
      <Footer active={active} />
    </>
  );
}

export default Layout;
