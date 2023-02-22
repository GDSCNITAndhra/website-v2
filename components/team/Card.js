import Image from "next/image";
import styles from "./Card.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Card({ name, role, imageURL }) {
  return (
    <div className={styles.studentCard}>
      <Image src={imageURL} alt={`${name}`}></Image>
      <div>
        <span className={styles.studentName}>{name}</span>
        <p className={styles.studentRole}>{role}</p>
      </div>
    </div>
  );
}

export default Card;
