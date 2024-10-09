import React, { useState, useEffect } from "react";
import "../css/Event.css";
import EventsAPI from "../services/EventsAPI";

const Event = (props) => {
  const [event, setEvent] = useState([]);
  const [time, setTime] = useState([]);
  const [remaining, setRemaining] = useState([]);

  // Fetch event data when the event ID changes
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const allEvents = await EventsAPI.getAllEvents();
        setEvent(allEvents);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEventData();
  }, [props.id]); // Dependency array includes props.id

  return (
    <article className="event-information">
      <img src={event.image} />

      <div className="event-information-overlay">
        <div className="text">
          <h3>{event.title}</h3>
          {/* <p>
            <i className="fa-regular fa-calendar fa-bounce"></i> {event.date}{" "}
            <br /> {time}
          </p>
          <p id={`remaining-${event.id}`}>{remaining}</p> */}
        </div>
      </div>
    </article>
  );
};

export default Event;
