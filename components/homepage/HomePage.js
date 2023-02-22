import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import Info from "./Info";
import dynamic from "next/dynamic";
import Landing from "./Landing";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

function HomePage() {
  return (
    <div
      style={{
        height: "auto",
        width: "100%",
      }}
    >
      <ScrollContainer>
        <ScrollPage style={{ width: "100%", Height: "100vh" }}>
          <Animator>
            <Landing />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      <Info />
    </div>
  );
}

export default HomePage;
