import Image from "next/image";
import page from "../../images/page.png";
import styles from "./Contact.module.scss";
import linkedin from "../../images/linkedin.svg";
import twitter from "../../images/twitter.svg";
import mail from "../../images/mail.svg";
import youtube from "../../images/youtube.svg";
import curiousity from "../../images/curiosity.gif";
import Link from "next/link";
import IframeComponent from "./iframe";

function Contact() {
  return (
    <>
      <h1 id={styles.contactHeading}>Contact Us</h1>
      <Image id={styles.page} src={page} alt="" />

      <div id={styles.contactContainer}>
        {/* <form
          action="mailto:gdsc.nitandhra@gmail.com"
          id={styles.contactUsForm}
        >
          <input
            className={styles.inputBox}
            type="text"
            name="name"
            id={styles.nameBox}
            placeholder="Your Name"
          ></input>
          <input
            className={styles.inputBox}
            type="text"
            name="email"
            id={styles.mailBox}
            placeholder="Your E-Mail"
          ></input>
          <textarea
            className={styles.inputBox}
            type="text"
            name="message"
            id={styles.messageBox}
            placeholder="What would you like to Convey"
            required
          />
          <button id={styles.submitButton} type="submit">
            Submit
          </button>
        </form> */}
        <IframeComponent id={styles.contactUsForm} />
        <Image priority={true} src={curiousity} alt="" />
      </div>

      <div id={styles.socialLinks}>
        <p>Lets connect! </p>
        <div>
          <Link
            href="https://www.linkedin.com/company/gdscnitandhra/"
            target={"_blank"}
          >
            <Image src={linkedin} alt="linkedin" />
          </Link>
          <Link href="mailto:gdsc.nitandhra@gmail.com" target={"_blank"}>
            <Image src={mail} alt="mail" />
          </Link>
          <Link href="https://twitter.com/gdscnitandhra" target={"_blank"}>
            <Image src={twitter} alt="twitter" />
          </Link>
          <Link href="https://www.youtube.com/@gdscnitandhra">
            <Image src={youtube} alt="youtube" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contact;
