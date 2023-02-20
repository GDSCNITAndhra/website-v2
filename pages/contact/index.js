import Image from "next/image";
import page from "../../images/page.png";
import styles from "./Contact.module.scss";
import android from "../../images/android.gif";
import linkedin from "../../images/linkedin.svg";
import twitter from "../../images/twitter.svg";
import mail from "../../images/mail.svg";
import facebook from "../../images/facebook.svg";
import curiousity from "../../images/curiosity.gif";

function Contact() {
  return (
    <>
      <h1 id={styles.contactHeading}>Contact Us</h1>
      <Image id={styles.page} src={page} alt="" />

      <div id={styles.contactContainer}>
        <form
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
        </form>
        <Image src={curiousity} alt="" />
      </div>

      <div id={styles.socialLinks}>
        <p>Lets connect! </p>
        <Image src={linkedin} alt="linkedin" />
        <Image src={mail} alt="mail" />
        <Image src={facebook} alt="facebook" />
        <Image src={twitter} alt="twitter" />
      </div>
    </>
  );
}

export default Contact;
