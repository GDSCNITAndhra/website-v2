import Image from "next/image";
import { useState,useEffect } from "react";
import logo from "../../../images/gdscLogo.png";
import styles from "./Navbar.module.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  

  return (
    <nav>
      <div
        id={styles.navList}
        style={
          
          active
            ? { transform: "translateY(0vh)", opacity: "1" }
            : { transform: "translateY(-100vh)", opacity: "0" }
        }
      >
        <div id={styles.navLinks}>
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Contact</h1>
          <h1>Team</h1>
          <h1>Gallery</h1>
        </div>
      </div>
      <nav id={styles.navbar} >
        <Image alt="logo" id={styles.gdscLogo} src={logo}></Image>
        <div
          id={styles.hamburger}
          onClick={() => (active ? setActive(false) : setActive(true))}
        >
          <div className={styles.bar} id={active ? styles.bar1 : ""} />
          <div className={styles.bar} id={active ? styles.bar2 : ""} />
          <div className={styles.bar} id={active ? styles.bar3 : ""} />
        </div>
      </nav>
    </nav>
  );
}

export default Navbar;
