import EventCard from "@/components/cards/EventCard";
import styles from "./EventsContainer.module.scss";
import events from "../../content/events.json";

function MoU() {
  return (
    <div className={styles.Events}>
      {events.MoU.map((ele, index) => {
        return <EventCard key={index} props={ele} />;
      })}
    </div>
  );
}

export default MoU;
