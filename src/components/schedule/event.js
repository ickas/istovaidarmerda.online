import React from "react";
import { string, arrayOf, shape } from "prop-types";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import Personas, { PERSONAS_VALUES } from "./personas";
import * as Styles from "./styles";
import "./types.d";

export const EVENT = {
  date: string.isRequired,
  area: string.isRequired,
  title: string.isRequired,
  moderator: arrayOf(shape(PERSONAS_VALUES)),
  speakers: arrayOf(shape(PERSONAS_VALUES)),
  index: string.isRequired,
};

/**
 * @param {ISchedule} props
 * @returns {JSX.Element | null}
 */
const Event = ({ date, area, title, moderator, speakers, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.125,
    triggerOnce: true,
  });

  const classes = classNames("schedule", {
    "is-visible": inView,
  });

  return (
    <Styles.Event
      ref={ref}
      className={classes}
      style={{
        "--ivdm-event-delay": index,
      }}
    >
      <h3 className="event__heading">{date}</h3>
      <div className="event__topic">
        <span className="area">{area}</span>
        <span className="title">{title}</span>
      </div>
      <div className="event__section">
        <Personas values={moderator} title="Moderador" />
        <Personas values={speakers} title="Painel" />
      </div>
    </Styles.Event>
  );
};

Event.defaultProps = {
  moderator: [],
  speakers: [],
};
Event.propTypes = EVENT;

export default Event;
