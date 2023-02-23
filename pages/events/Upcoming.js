import styles from "./EventsContainer.module.scss";
import EventCard from "@/components/cards/EventCard";
import events from "../../content/events.json";

function Upcoming() {
  return (
    <div className={styles.Events}>
      {events.upcomingEvents.map((ele, index) => {
        return <EventCard key={index} props={ele} />;
      })}
    </div>
  );
}

export default Upcoming;
