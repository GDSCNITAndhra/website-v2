import Image from "next/image";
import styles from "./Contact.module.scss";
import curiousity from "../../images/curiosity.jpg";
import IframeComponent from "./iframe";

function Contact() {
  return (
    <>
      <h1 id={styles.contactHeading}>Contact Us</h1>
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
    </>
  );
}

export default Contact;
