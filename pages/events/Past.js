import styles from "./EventsContainer.module.scss";
import events from "../../content/events.json";
import EventCard from "@/components/cards/EventCard";

function Past() {
  return (
    <div className={styles.Events}>
      {events.pastEvents.map((element, index) => {
        return <EventCard key={index} props={element} />;
      })}
    </div>
  );
}

export default Past;
