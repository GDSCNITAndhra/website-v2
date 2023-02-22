import Image from "next/image";
import styles from "./Landing.module.scss";
import gdscLogo from "../../images/gdscLogo.png";
import planet from "../../images/team4.gif";

function Landing() {
  return (
    <div id={styles.landingPage}>
      <section id={styles.landingPageContent}>
        <div id={styles.landingPageWrapper}>
          <div id={styles.gdscIntro}>
            <Image className={styles.gdscColoredLogo} src={gdscLogo} alt="" />
            <p>
              A community of developers, designers and tech nerds who desire to
              learn, educate and grow. At GDSC NIT AP, we provide a platform for
              individuals to learn, develop, collaborate, exchange ideas and
              grow together
            </p>
          </div>
          <Image id={styles.teamwork} src={planet} alt="teamwork" />
        </div>
      </section>
      <section id={styles.landingPageDesign} />
    </div>
  );
}

export default Landing;
