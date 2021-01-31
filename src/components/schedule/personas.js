import React from "react";
import { string, shape, arrayOf, oneOf } from "prop-types";
import Link from "next/link";
import * as Styles from "./styles";
import "./types.d";

export const PERSONAS_AVATAR = {
  oneX: string,
  twoX: string,
  threeX: string,
};

export const PERSONAS_VALUES = {
  url: string,
  name: string,
  avatar: shape(PERSONAS_AVATAR),
  type: oneOf(["twitter", "facebook"]),
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
      const title = `Abrir perfil de ${persona.name} no ${persona.type}`;
      const src = persona.avatar.oneX;
      const srcSet = `${src} 1x, ${persona.avatar.twoX} 2x, ${persona.avatar.threeX} 3x`;
      return (
        <Styles.Persona key={key} className="event">
          {persona.url ? (
            <Link href={persona.url}>
              <a target="_blank" title={title} className="persona" rel="noopener noreferrer">
                <div className="persona__avatar">
                  <img src={src} srcSet={srcSet} alt={persona.name} width={50} height={50} loading="lazy" />
                </div>
                <div className="persona__metadata">
                  <span className="name" itemProp="performer">
                    {persona.name}
                  </span>
                  <span className="job">{persona.job}</span>
                </div>
              </a>
            </Link>
          ) : (
            <div className="persona">
              <div className="persona__avatar">
                <img src={src} srcSet={srcSet} alt={persona.name} width={50} height={50} loading="lazy" />
              </div>
              <div className="persona__metadata">
                <span className="name" itemProp="performer">
                  {persona.name}
                </span>
                <span className="job">{persona.job}</span>
              </div>
            </div>
          )}
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
    avatar: {},
    type: "twitter",
    job: "",
  },
};
Personas.propTypes = {
  values: arrayOf(shape(PERSONAS_VALUES)),
};

export default Personas;
