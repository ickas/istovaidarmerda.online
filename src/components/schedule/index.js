import React from "react";
import PropTypes from "prop-types";
import Events from "./events";
import * as Styles from "./styles";
import "./types.d";

/**
 *
 * @param {IScheduleProps} props
 */
const Schedule = ({ events }) => {
  /**
   * Renders the list of events
   *
   * @returns {JSX.Element}
   */
  function renderEvents() {
    return <Events events={events} />;
  }
  return (
    <Styles.Wrapper id="schedule">
      <h2 className="sr-only">Agenda</h2>
      {Array.isArray(events) ? renderEvents() : null}
    </Styles.Wrapper>
  );
};

Schedule.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      area: PropTypes.string,
      title: PropTypes.string,
      moderator: PropTypes.string,
      speakers: PropTypes.string,
    }),
  ).isRequired,
};

export default Schedule;
