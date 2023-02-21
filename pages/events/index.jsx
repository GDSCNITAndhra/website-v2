import React, { useState } from "react";
import styles from "./event.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Upcoming from "./Upcoming";
import Past from "./Past";
import Mou from "./Mou";
export default function EventWork() {
  const [selectedOption, setSelectedOption] = useState("upcoming");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="container">
      <div style={{ zIndex: 20 }}>
        <div className={styles.container}>
          <h2>Events & Workshops</h2>
          <h3>Connect with us and explore!!!</h3>
        </div>

        <div
          className={`btn-group ${styles.btngroup}`}
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
            Upcoming events
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
            Past Events
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
            MOUs
          </label>
        </div>
        <div>
          {selectedOption == "upcoming" ? (
            <Upcoming />
          ) : selectedOption === "past" ? (
            <Past />
          ) : (
            <Mou />
          )}
        </div>
      </div>
    </div>
  );
}
