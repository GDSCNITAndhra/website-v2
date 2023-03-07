import styles from "./Team.module.scss";
import Image from "next/image";
import dynamic from "next/dynamic";
import team from "../../images/team.gif";
import lead from "../../images/team/Ritvik.png";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Card from "../../components/cards/MemberCard";
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
import teams from "../../content/team";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

const customAnimation2 = keyframes`
  from {
   transform: translateY(3rem);
  }
  to {
    transform: translateY(0rem);
  }
`;

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
              <div id={styles.meetTheTeamTitle}>
                <span>M</span>
                <span>e</span>
                <span>e</span>
                <span>t</span> <span>t</span>
                <span>h</span>
                <span>e</span> <span style={{ color: "#DB4437" }}>t</span>
                <span style={{ color: "#4285F4" }}>e</span>
                <span style={{ color: "#F4B400" }}>a</span>
                <span style={{ color: "#0F9D58" }}>m</span>
                <br />
                <div id={styles.teamAgenda}>
                  creative minds under the hood,
                  <br />
                  building solutions for the good.
                </div>
              </div>
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

      <div className={styles.theTeam} id={styles.coreTeam}>
        <h1>Core Team</h1>
        <div id={styles.studentCards}>
          {teams.core.map((element, index) => {
            return (
              <Card
                key={index}
                name={element.name}
                role={element.role ? element.role : "Core Team"}
                imageURL={element.imgURL}
              />
            );
          })}
        </div>
      </div>
      <div id={styles.volunteerWrapper}>
        <div className={styles.theTeam} id={styles.volunteers}>
          <h1>Volunteers</h1>
          <div id={styles.studentCards}>
            {teams.others.map((element, index) => {
              return (
                <Card
                  key={index}
                  name={element.name}
                  role={"Volunteer"}
                  imageURL={element.imgURL}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
