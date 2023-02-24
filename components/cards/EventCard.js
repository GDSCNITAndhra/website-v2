import styles from "./EventCard.module.scss";
import demoDay from "../../images/demoDay.png";
import speaker from "../../images/speaker.png";
import studyJam from "../../images/studyJam.jpg";
import winterSchool from "../../images/winterSchool.png";
import solutionChallange from "../../images/solutionChallenge.png";
import sellular from "../../images/sellular.png";
import loarr from "../../images/loarrCommunity.png";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ props }) => {
  const image = props.image;
  const title = props.title;
  const date = props.date;
  const content = props.content;
  const href = props.href;

  const selectImg = (image) => {
    if (image === "winterSchool") {
      return winterSchool;
    } else if (image === "demoDay") {
      return demoDay;
    } else if (image === "speaker") {
      return speaker;
    } else if (image === "solutionChallenge") {
      return solutionChallange;
    } else if (image === "sellular") {
      return sellular;
    } else if(image==="loarr"){
      return loarr;
    }
    else {
      return studyJam;
    }
  };
  return (
    <Link href={href} className={styles.eventCard}>
      <Image className={styles.eventCardImage} src={selectImg(image)} alt="" />
      <p className={styles.eventCardDate}>{date}</p>
      <p className={styles.eventCardTitle}>{title}</p>
      <p className={styles.eventCardContent}>{content}</p>
    </Link>
  );
};

export default EventCard;
