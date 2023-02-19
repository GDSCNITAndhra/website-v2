import styles from "./Team.module.scss";
import dynamic from "next/dynamic";
import team from "../../images/team.gif";
import lead from "../../images/team/lead.png";
import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  Sticky,
  StickyIn,
  ZoomIn,
  MoveOut,
} from "react-scroll-motion";
import Image from "next/image";
import Card from "../../components/team/Card";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

function index() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <div id={styles.teamsContainer}>
      <ScrollContainer>
        <ScrollPage style={{ width: "100vw", height: "50vh" }}>
          <Animator
            style={{ width: "100vw", height: "50vh" }}
            animation={batch(Fade(), MoveOut(0, -600))}
          >
            <div id={styles.meetTheTeam}>
              <p>
                <span>M</span>
                <span>e</span>
                <span>e</span>
                <span>t</span> <span>t</span>
                <span>h</span>
                <span>e</span> <span style={{ color: "#DB4437" }}>t</span>
                <span style={{ color: "#4285F4" }}>e</span>
                <span style={{ color: "#F4B400" }}>a</span>
                <span style={{ color: "#0F9D58" }}>m</span>
                <div id={styles.teamAgenda}>
                  creative minds under the hood,
                  <br />
                  building solutions for the good
                </div>
              </p>
              <Image id={styles.teamIcon} src={team} alt=""></Image>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>

      <span id={styles.leadInfoCard}>
        <Card
          name={"Ritvik G"}
          role={"GDSC Lead"}
          imageURL={lead}
          index={0}
        ></Card>
      </span>

      <div className={styles.theTeam}>
        <h1>Core Team</h1>
        <div id={styles.studentCards}>
          <Card
            name={"Ritvik G"}
            role={"GDSC Lead"}
            imageURL={lead}
            index={1}
          ></Card>
          <Card
            name={"Ritvik G"}
            role={"GDSC Lead"}
            imageURL={lead}
            index={2}
          ></Card>
          <Card
            name={"Ritvik G"}
            role={"GDSC Lead"}
            imageURL={lead}
            index={3}
          ></Card>
          <Card
            name={"Ritvik G"}
            role={"GDSC Lead"}
            imageURL={lead}
            index={1}
          ></Card>
          <Card
            name={"Ritvik G"}
            role={"GDSC Lead"}
            imageURL={lead}
            index={2}
          ></Card>
        </div>
      </div>
      <div className={styles.theTeam}>
        <h1>Volunteers</h1>
        <div id={styles.studentCards}>
          <Card
            name={"Ritvik G"}
            role={"GDSC Lead"}
            imageURL={lead}
            index={1}
          ></Card>
          <Card
            name={"Ritvik G"}
            role={"GDSC Lead"}
            imageURL={lead}
            index={2}
          ></Card>
          <Card
            name={"Ritvik G"}
            role={"GDSC Lead"}
            imageURL={lead}
            index={3}
          ></Card>
          <Card
            name={"Ritvik G"}
            role={"GDSC Lead"}
            imageURL={lead}
            index={1}
          ></Card>
          <Card
            name={"Ritvik G"}
            role={"GDSC Lead"}
            imageURL={lead}
            index={2}
          ></Card>
        </div>
      </div>
    </div>
  );
}

export default index;
