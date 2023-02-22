import styles from "./Past.module.scss";
import events from "../../content/events.json";
import demoDay from "../../images/demoDay.png";
import speaker from "../../images/speaker.png";
import studyJam from "../../images/studyJam.jpg";
import winterSchool from "../../images/winterSchool.png";
import solutionChallange from "../../images/solutionChallenge.png";
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
    } else {
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

function Past() {
  return (
    <div id={styles.pastEvents}>
      {events.pastEvents.map((element, index) => {
        return <EventCard key={index} props={element} />;
      })}
    </div>
  );
}

export default Past;
