import React from "react";
import { string } from "prop-types";
import Link from "next/link";
import Image from "next/image";
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
const Personas = ({ values, title }) => {
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
      return (
        <Styles.Persona key={key} className="event">
          <Link href={persona.url}>
            <a target="_blank">
              <div className="avatar">
                <Image src={persona.avatar} alt={persona.name} width={50} height={50} />
              </div>
              <div>
                <span className="name">{persona.name}</span>
                <span className="job">{persona.job}</span>
              </div>
            </a>
          </Link>
        </Styles.Persona>
      );
    });
  }

  return (
    <div className="event__item">
      <h4>{title}</h4>
      {renderList()}
    </div>
  );
};

Personas.defaultProps = {
  values: {
    url: "",
    name: "",
    avatar: "",
    job: "",
  },
  title: "Moderador",
};
Personas.propTypes = {
  values: PERSONAS_VALUES,
  title: string,
};

export default Personas;
