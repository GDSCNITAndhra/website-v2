import styles from "./Events.module.scss";
import Image from "next/image";
import event from "../../images/event.png";
import dynamic from "next/dynamic";
import Past from "./Past";
import Upcoming from "./Upcoming";
import content from "../../content/content.json";
import MoU from "./MoU";

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
import { useState } from "react";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

function Index() {
  const [selectedOption, setSelectedOption] = useState("past");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const [past, setPast] = useState(true);
  return (
    <div id={styles.eventsPage}>
      <ScrollContainer>
        <ScrollPage style={{ width: "100vw", height: "50vh" }}>
          <Animator
            style={{ width: "100vw", height: "50vh" }}
            animation={batch(Fade())}
          >
            <div id={styles.eventsTitleContainer}>
              <div id={styles.eventsTitle}>
                <h1>Events</h1>
                <p>{content.eventsPage.about}</p>
              </div>
              <Image priority={true} src={event} alt="event" />
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      <div id={styles.eventsContainer}>
        <div
          className={`btn-group ${styles.timeLineSelector}`}
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            value="upcoming"
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
            checked={selectedOption === "upcoming"}
            onChange={handleOptionChange}
          />
          <label className="btn btn-outline-danger" htmlFor="btnradio1">
            Upcoming
          </label>

          <input
            type="radio"
            className="btn-check"
            value="past"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
            checked={selectedOption === "past"}
            onChange={handleOptionChange}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            Past
          </label>

          <input
            type="radio"
            className="btn-check"
            value="mou"
            name="btnradio"
            id="btnradio3"
            autoComplete="off"
            checked={selectedOption === "mou"}
            onChange={handleOptionChange}
          />
          <label className="btn btn-outline-warning" htmlFor="btnradio3">
            MoUs
          </label>
        </div>
        <div id={styles.eventList}>
          {selectedOption == "upcoming" ? (
            <Upcoming />
          ) : selectedOption === "past" ? (
            <Past />
          ) : (
            <MoU />
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
