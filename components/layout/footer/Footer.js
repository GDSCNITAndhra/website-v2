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
      <Image id={styles.gdscBWLogo} src={GDSCLogo} alt="GDSC Logo"></Image>
      <section id={styles.footerLinks}>
        <div>
          <p className={styles.textAlign}>Quick Links</p>
          <section id={styles.footerQuickLinks}>
            <Link href="/winterschool">Winter School</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/events">Events</Link>
            <Link href="/teams">Team</Link>
            <Link href="/contact">Contact</Link>
          </section>
        </div>
        <div>
          <p className={styles.textAlign}>Socials</p>
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
      <p className={styles.textAlign} id={styles.copyright}>
        {" "}
        © 2023 GDSC NIT Andhra Pradesh
      </p>
    </footer>
  );
}

export default Footer;
