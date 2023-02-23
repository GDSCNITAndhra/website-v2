import Image from "next/image";
import Link from "next/link";
import arrow from "../../images/arrow.png";
import styles from "./CourseCard.module.scss";

function CourseCard({ imgURL, courseName, courseDescription }) {
  return (
    <div className={styles.courseCard}>
      <Image className={styles.courseImage} src={imgURL} alt={courseName} />
      <div className={styles.courseInfo}>
        <p className={styles.courseName}>{courseName}</p>
        <p className={styles.courseDescription}>{courseDescription}</p>
      </div>
    </div>
  );
}

export default CourseCard;
