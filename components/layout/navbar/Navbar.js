import Image from "next/image";
import { useState } from "react";
import logo from "../../../images/gdscLogo.png";
import styles from "./Navbar.module.scss";
import Link from "next/link";

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
        <div
          id={styles.navLinks}
          onClick={() => {
            setActive(false);
          }}
        >
          <h1>
            <Link href="/">Home</Link>
          </h1>
          <h1>
            <Link href="/">Winter School</Link>
          </h1>
          <h1>
            <Link href="/events">Events</Link>
          </h1>
          <h1>
            <Link href="/teams">Teams</Link>
          </h1>

          <h1>
            <Link href={"/gallery"}>Gallery</Link>
          </h1>
          <h1>
            <Link href="/contact">Contact</Link>
          </h1>
        </div>
      </div>
      <nav id={styles.navbar}>
        <Image
          alt="logo"
          id={styles.gdscLogo}
          style={{ opacity: "0" }}
          src={logo}
        ></Image>
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
