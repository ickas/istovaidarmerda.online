import React from "react";
import { string, shape, arrayOf } from "prop-types";
import Link from "next/link";
import * as Styles from "./styles";
import "./types.d";

export const PERSONAS_VALUES = {
  url: string,
  name: string,
  avatar: string,
  job: string,
};

/**
 * @param {IPersonasProps} props
 * @returns {JSX.Element | null}
 */
const Personas = ({ values }) => {
  if (!Array.isArray(values)) {
    return null;
  }

  /**
   * Render sthe list of personas
   *
   * @returns {JSX.Element[]}
   */
  function renderList() {
    return values.map((persona, index) => {
      const key = `persona-${index}`;
      const title = `Ver perfil de ${persona.name}`;
      return (
        <Styles.Persona key={key} className="event">
          <Link href={persona.url}>
            <a target="_blank" title={title} className="persona">
              <div className="persona__avatar">
                <img src={persona.avatar} alt={persona.name} width={50} height={50} loading="lazy" />
              </div>
              <div className="persona__metadata">
                <span className="name" itemProp="performer">
                  {persona.name}
                </span>
                <span className="job">{persona.job}</span>
              </div>
            </a>
          </Link>
        </Styles.Persona>
      );
    });
  }

  return <div className="event__item">{renderList()}</div>;
};

Personas.defaultProps = {
  values: {
    url: "",
    name: "",
    avatar: "",
    job: "",
  },
};
Personas.propTypes = {
  values: arrayOf(shape(PERSONAS_VALUES)),
};

export default Personas;
