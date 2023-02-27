import styles from "./EventsContainer.module.scss";
import EventCard from "@/components/cards/EventCard";
import events from "../../content/events.json";

function Upcoming() {
  return (
    <div className={styles.Events}>
      {events.upcomingEvents.length > 0 ? (
        events.upcomingEvents.map((ele, index) => {
          return <EventCard key={index} props={ele} />;
        })
      ) : (
        <h1 style={{ fontSize: "1.5rem" }}>
          There are currently no upcoming events. Please check again soon.
        </h1>
      )}
    </div>
  );
}

export default Upcoming;
