import Image from "next/image";
import { useState } from "react";
import logo from "../../../images/gdscLogo.png";
import styles from "./Navbar.module.scss";
import Link from "next/link";

function Navbar({ active, visible, handleSetActive }) {
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
            handleSetActive();
          }}
        >
          <h1>
            <Link href="/">Home</Link>
          </h1>
          <h1>
            <Link href="/winter-school">Winter School</Link>
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

      <nav id={styles.navbar} className={visible ? styles.navbarOpacity : ""}>
        <Image
          alt="logo"
          className={styles.gdscLogo}
          id={visible ? styles.gdscLogoVisibility : ""}
          src={logo}
        />
        <div id={styles.hamburger} onClick={() => handleSetActive()}>
          <div className={styles.bar} id={active ? styles.bar1 : ""} />
          <div className={styles.bar} id={active ? styles.bar2 : ""} />
          <div className={styles.bar} id={active ? styles.bar3 : ""} />
        </div>
      </nav>
    </nav>
  );
}

export default Navbar;
