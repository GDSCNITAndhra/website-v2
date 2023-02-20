import Image from "next/image";
import styles from "./Card.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Card({ name, role, imageURL, index }) {
  return (
    <>
      {index === 0 ? (
        <div className={styles.studentCard} id={styles.gdscLeadAnimation}>
          <Image src={imageURL} alt={`${name}`}></Image>
          <div>
            <span className={styles.studentName}>{name}</span>
            <p className={styles.studentRole}>{role}</p>
          </div>
        </div>
      ) : (
        <AnimationOnScroll
          animateIn={
            index === 1 ? "animate__fadeInLeft" : "animate__fadeInRight"
          }
          delay={index * 60}
        >
          <div className={styles.studentCard}>
            <Image src={imageURL} alt={`${name}`}></Image>
            <div>
              <span className={styles.studentName}>{name}</span>
              <p className={styles.studentRole}>{role}</p>
            </div>
          </div>
        </AnimationOnScroll>
      )}
    </>
  );
}

export default Card;
