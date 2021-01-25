import React from "react";
import { string, number, arrayOf, shape, oneOf, bool } from "prop-types";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import Personas, { PERSONAS_VALUES } from "./personas";
import Icon from "../icon";
import ButtonLink from "../button-link";
import * as Styles from "./styles";
import "./types.d";

export const EVENT = {
  signLanguage: bool,
  date: string,
  area: string,
  title: string.isRequired,
  youtubeUrl: string,
  moderator: arrayOf(shape(PERSONAS_VALUES)),
  speakers: arrayOf(shape(PERSONAS_VALUES)),
  index: number,
  type: oneOf(["agenda", "rubrics"]),
};

/**
 * @param {ISchedule} props
 * @returns {JSX.Element | null}
 */
const Event = ({ signLanguage, date, area, title, youtubeUrl, moderator, speakers, index, type }) => {
  const { ref, inView } = useInView({
    threshold: 0.125,
    triggerOnce: true,
  });

  const classes = classNames("schedule", {
    "is-visible": inView,
  });

  const tooltipId = `event-${index}-tooltip`;

  return (
    <Styles.Event
      ref={ref}
      className={classes}
      data-type={type}
      itemscope
      itemtype="https://schema.org/SocialEvent"
      style={{
        "--ivdm-event-delay": `${index}`,
      }}
    >
      {signLanguage && (
        <Styles.SignLanguage
          className="sign-language"
          data-tooltip="Língua Gestual"
          data-testid="sign-language"
          aria-describedby={tooltipId}
          tabIndex={0}
        >
          <Icon icon="sign-language" fill="#212121" />
          <figcaption id={tooltipId} className="sr-only">
            Esta sessão terá intérprete de Língua Gestual Portuguesa
          </figcaption>
        </Styles.SignLanguage>
      )}

      {date && (
        <h3 className="event__heading" itemProp="startDate">
          {date}
        </h3>
      )}
      <div className="event__topic">
        {area && <span className="area">{area}</span>}
        <span className="title" itemProp="name">
          {title}
        </span>
      </div>
      {youtubeUrl && (
        <ButtonLink
          className="youtube__button event__link"
          borderColor="#C62828"
          bgColor="#ED0007"
          url={youtubeUrl}
          icon="youtube"
          value="YouTube"
          target="_blank"
          label="Seguir no YouTube"
          external
        />
      )}

      {speakers?.length > 0 ? (
        <>
          {moderator && (
            <div className="event__section">
              {type === "agenda" && <h4 className="event__section__title">Moderator</h4>}
              <Personas values={moderator} />
            </div>
          )}
          {speakers && (
            <div className="event__section">
              {type === "agenda" && <h4 className="event__section__title">Painel</h4>}
              <Personas values={speakers} />
            </div>
          )}
        </>
      ) : (
        <div className="event__section">{type === "agenda" && <h4>⚠️ Brevemente ⚠️</h4>}</div>
      )}
    </Styles.Event>
  );
};

Event.defaultProps = {
  signLanguage: false,
  date: undefined,
  area: undefined,
  moderator: undefined,
  speakers: [],
  type: "agenda",
  index: 0,
};
Event.propTypes = EVENT;

export default Event;
