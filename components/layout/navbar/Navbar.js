import { useState } from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav>
      <div id={styles.hamburger}>
        <div />
        <div />
        <div />
      </div>

      {active ? <h1>Inactive</h1> : <h1>Active</h1>}
    </nav>
  );
}

export default Navbar;
