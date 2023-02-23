import styles from "./Footer.module.scss";
import linkedin from "../../../images/footer/linkedin.svg";
import twitter from "../../../images/footer/twitter.svg";
import youtube from "../../../images/footer/youtube.svg";
import mail from "../../../images/footer/mail.svg";
import Image from "next/image";
import GDSCLogo from "../../../images/gdscBW.png";
import Link from "next/link";

function Footer() {
  return (
    <footer id={styles.footer}>
      <section id={styles.footerWrapper}>
        <Image id={styles.gdscBWLogo} src={GDSCLogo} alt="GDSC Logo"></Image>
        <div id={styles.socialsWrapper}>
          <p>Find us on</p>
          <section id={styles.footerSocials}>
            <Link
              href="https://www.linkedin.com/company/gdscnitandhra/"
              target={"_blank"}
            >
              <Image
                className={styles.socialsLink}
                src={linkedin}
                alt="linkedin"
              />
            </Link>
            <Link href="https://twitter.com/gdscnitandhra" target={"_blank"}>
              <Image
                className={styles.socialsLink}
                src={twitter}
                alt="twitter"
              />
            </Link>
            <Link href="mailto:gdsc.nitandhra@gmail.com" target={"_blank"}>
              <Image className={styles.socialsLink} src={mail} alt="mail" />
            </Link>
            <Link
              href="https://www.youtube.com/@gdscnitandhra"
              target={"_blank"}
            >
              <Image
                className={styles.socialsLink}
                src={youtube}
                alt="youtube"
              />
            </Link>
          </section>
        </div>
      </section>
      <p id={styles.copyright}>© 2023 GDSC NIT Andhra Pradesh</p>
    </footer>
  );
}

export default Footer;
