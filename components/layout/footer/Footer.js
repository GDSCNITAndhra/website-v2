import styles from "./Footer.module.scss";
import linkedin from "../../../images/footer/linkedin.svg";
import twitter from "../../../images/footer/twitter.svg";
import facebook from "../../../images/footer/facebook.svg";
import mail from "../../../images/footer/mail.svg";
import Image from "next/image";
import GDSCLogo from "../../../images/gdscLogoBW.png";
import Link from "next/link";

function Footer() {
  return (
    <footer id={styles.footer}>
      <section id={styles.footerWrapper}>
        <Image id={styles.gdscBWLogo} src={GDSCLogo} alt="GDSC Logo"></Image>
        <div id={styles.socialsWrapper}>
          <p>Socials</p>
          <section id={styles.footerSocials}>
            <Image
              className={styles.socialsLink}
              src={linkedin}
              alt="linkedin"
            />
            <Image className={styles.socialsLink} src={twitter} alt="twitter" />
            <Image className={styles.socialsLink} src={mail} alt="mail" />
            <Image
              className={styles.socialsLink}
              src={facebook}
              alt="facebook"
            />
          </section>
        </div>
      </section>
      <p id={styles.copyright}>© 2023 GDSC NIT Andhra Pradesh</p>
    </footer>
  );
}

export default Footer;
