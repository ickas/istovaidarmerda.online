import React from "react";
import { arrayOf, shape, string } from "prop-types";
import Events from "./events";
import { PERSONAS_VALUES } from "./personas";
import * as Styles from "./styles";
import "./types.d";

const SPEAKER_TYPE = arrayOf(shape(PERSONAS_VALUES));

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
        <p
          title="Cada sessão inicia às 21:30 e termina às 22:30"
          className="schedule__subtitle as-h4"
          property="schema:openingHoursSpecification"
          typeof="schema:OpeningHoursSpecification"
        >
          <time dateTime="21:30" property="schema:opens">
            21:30
          </time>{" "}
          -{" "}
          <time dateTime="22:30" property="schema:closes">
            22:30
          </time>
        </p>
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
