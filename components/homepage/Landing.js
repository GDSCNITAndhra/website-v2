import Image from "next/image";
import styles from "./Landing.module.scss";
import gdscLogo from "../../images/gdscLogo.png";
import team from "../../images/home.png";
import content from "../../content/content.json";

function Landing() {
  return (
    <div id={styles.landingPage}>
      <section id={styles.landingPageContent}>
        <div id={styles.landingPageWrapper}>
          <div id={styles.gdscIntro}>
            <Image className={styles.gdscColoredLogo} src={gdscLogo} alt="" />
            <p>{content.homePage.about}</p>
          </div>
          <Image
            priority={true}
            id={styles.teamwork}
            src={team}
            alt="teamwork"
          />
        </div>
      </section>
    </div>
  );
}

export default Landing;
