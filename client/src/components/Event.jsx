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
        if (props.id) {
          // If an ID is provided, fetch that event
          const eventData = await EventsAPI.getEventsById(props.id);
          setEvent(eventData);
        } else {
          // If no ID is provided, fetch all events
          const allEvents = await EventsAPI.getAllEvents();
          setEvent(allEvents);
        }
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEventData();
  }, [props.id]); // Dependency array includes props.id

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const eventData = await EventsAPI.getEventsById(props.id);
  //         setEvent(eventData);
  //       } catch (error) {
  //         throw error;
  //       }
  //     })();
  //   }, []);

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const result = await dates.formatTime(event.time);
  //         setTime(result);
  //       } catch (error) {
  //         throw error;
  //       }
  //     })();
  //   }, [event]);

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const timeRemaining = await dates.formatRemainingTime(event.remaining);
  //         setRemaining(timeRemaining);
  //         dates.formatNegativeTimeRemaining(remaining, event.id);
  //       } catch (error) {
  //         throw error;
  //       }
  //     })();
  //   }, [event]);

  return (
    <article className="event-information">
      <img src={event.image} />

      <div className="event-information-overlay">
        <div className="text">
          <h3>{event.title}</h3>
          <p>
            <i className="fa-regular fa-calendar fa-bounce"></i> {event.date}{" "}
            <br /> {time}
          </p>
          <p id={`remaining-${event.id}`}>{remaining}</p>
        </div>
      </div>
    </article>
  );
};

export default Event;
