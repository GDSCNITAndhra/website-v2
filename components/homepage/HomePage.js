import Contact from "../contact/Contact";
import styles from "./HomePage.module.scss";
import dynamic from "next/dynamic";
import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  ZoomInScrollOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

function HomePage() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <div id={styles.homePage}>
      <div id={styles.aboutUsContainer}></div>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "30px" }}>
              Landing page under construction
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <span
              style={{ fontSize: "40px", width: "100%", textAlign: "center" }}
            >
              About - under construction
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "40px" }}>
              Designer Elements - under construction
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      <Contact />
    </div>
  );
}

export default HomePage;
