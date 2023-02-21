import styles from "./Info.module.scss";
import Image from "next/image";
import question from "../../images/question.png";
import group from "../../images/group.png";
import idea from "../../images/idea.png";
import team from "../../images/team6.gif";
import events from "../../images/team2.gif";
import Link from "next/link";

const Card = ({ imageURL, title, content, color }) => {
  return (
    <div
      className={styles.infoCard}
      style={{ borderBottom: `6px solid ${color}` }}
    >
      <Image className={styles.infoCardIcon} src={imageURL} alt={title} />
      <h1 className={styles.infoCardTitle}>{title}</h1>
      <p className={styles.infoCardContent}>{content}</p>
    </div>
  );
};

const LearnMoreCard = ({
  reverse,
  imageURL,
  title,
  message,
  buttonMessage,
  linkTo,
}) => {
  return (
    <div
      className={styles.LearnMoreCard}
      style={{ flexDirection: reverse ? "row" : "row-reverse" }}
    >
      <Image src={imageURL} alt={title} />
      <div>
        <h1>{title}</h1>
        <p>{message}</p>
        <Link href={`/${linkTo}`}>
          <div className={styles.infoButton}>{buttonMessage}</div>
        </Link>
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <div id={styles.infoPage}>
      <section id={styles.infoCards}>
        <Card
          color={"#F4B400"}
          imageURL={idea}
          content={
            "Google developer student clubs is an initiative launched by Google to bring together students interested in Google Developer Technologies and associated skills in a peer-to-peer learning environment."
          }
          title={"What is GDSC?"}
        />
        <Card
          color={"#DB4437"}
          imageURL={question}
          title={"Why GDSC"}
          content={
            "Google developer student clubs is an initiative launched by Google to bring together students interested in Google Developer Technologies and associated skills in a peer-to-peer learning environment."
          }
        />
        <Card
          color={"#4285F4"}
          imageURL={group}
          title={"Who is it for?"}
          content={
            "Google developer student clubs is an initiative launched by Google to bring together students interested in Google Developer Technologies and associated skills in a peer-to-peer learning environment."
          }
        />
      </section>

      <section id={styles.learnMoreContainer}>
        <LearnMoreCard
          reverse={true}
          imageURL={events}
          title={"Meet our team!"}
          buttonMessage={"Our Team"}
          linkTo={"teams"}
          message={
            "klaeff fabefbefkea  ufeu uehfheau hh uhfu  hf fuhfuf rhfr uih  hurh  ru wru ur rhru urwrhwuoiefo "
          }
        />
        <LearnMoreCard
          reverse={false}
          imageURL={team}
          buttonMessage={"Visit Events"}
          title={"Learn about our Events"}
          linkTo={"events"}
          message={
            "klaeff fabefbefkea  ufeu uehfheau hh uhfu  hf fuhfuf rhfr uih  hurh  ru wru ur rhru urwrhwuoiefo "
          }
        />
      </section>
    </div>
  );
};
export default Info;
