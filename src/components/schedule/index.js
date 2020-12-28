import React from "react";
import { arrayOf, shape, string } from "prop-types";
import Events from "./events";
import * as Styles from "./styles";
import "./types.d";

const SPEAKER_TYPE = arrayOf(
  shape({
    avatar: string,
    name: string,
    job: string,
    url: string,
  }),
);

/**
 *
 * @param {IScheduleProps} props
 */
const Schedule = ({ agenda, rubrics }) => {
  /**
   * Renders the list of events
   *
   * @returns {JSX.Element}
   */
  function renderAgenda() {
    return <Events events={agenda} type="agenda" />;
  }

  /**
   * Renders the list of rubrics
   *
   * @returns {JSX.Element}
   */
  function renderRubrics() {
    return <Events events={rubrics} type="rubrics" />;
  }

  return (
    <Styles.Wrapper id="schedule">
      <div className="schedule__agenda">
        <h2 className="schedule__title">Agenda</h2>
        {Array.isArray(agenda) ? renderAgenda() : null}
      </div>

      <div className="schedule__rubrics">
        <h2 className="schedule__title">Rubricas</h2>
        {Array.isArray(rubrics) ? renderRubrics() : null}
      </div>
    </Styles.Wrapper>
  );
};

Schedule.propTypes = {
  agenda: arrayOf(
    shape({
      area: string,
      title: string,
      moderator: SPEAKER_TYPE,
      speakers: SPEAKER_TYPE,
    }),
  ).isRequired,
  rubrics: arrayOf(
    shape({
      title: string,
      speakers: SPEAKER_TYPE,
    }),
  ).isRequired,
};

export default Schedule;
