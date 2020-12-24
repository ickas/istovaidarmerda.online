import React from "react";
import { arrayOf, shape } from "prop-types";
import Event, { EVENT } from "./event";
import * as Styles from "./styles";
import "./types.d";

/**
 * @param {IEventsProps} props
 * @returns {JSX.Element | null}
 */
const Events = ({ events }) => {
  /**
   * Renders a list of events
   *
   * @returns {JSX.Element}
   */
  function renderListOfEvents() {
    const list = events.map((event, index) => {
      const key = `event-${index}`;
      return (
        <Event
          key={key}
          date={event.date}
          title={event.title}
          area={event.area}
          moderator={event.moderator}
          speakers={event.speakers}
          index={index}
        />
      );
    });

    return <Styles.EventsWrapper>{list}</Styles.EventsWrapper>;
  }

  return Array.isArray(events) ? renderListOfEvents() : null;
};

Events.propTypes = {
  events: arrayOf(shape(EVENT)),
};

export default Events;
