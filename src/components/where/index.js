import React from "react";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import ButtonLink from "../button-link";
import * as Styles from "./styles";
import "./types.d";

/**
 * @param {IWhereProps} props
 * @returns {JSX.Element}
 */
const Where = ({ twitter, youtube }) => {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  const classes = classNames("where", {
    "is-visible": inView,
  });

  return (
    <Styles.Wrapper id="where" ref={ref} className={classes}>
      <div className="card">
        <h2 className="title">Onde?</h2>
        <p>
          O <i>Isto Vai Dar Merda</i> decorrerá exclusivamente na rede social <strong>Twitter</strong>, com excepção da
          transmissão das sessões online que serão também disponibilizadas no canal <strong>YouTube</strong> do evento.
        </p>
        <p>#istovaidarmerda #ivdm #istovaidarfoto #istovaidardicatech #istovaidarvinho #istovaidarrabisco</p>
        <Styles.CallToAction>
          <ButtonLink
            className="twitter"
            borderColor="#1565C0"
            bgColor="#0073DB"
            url={twitter}
            icon="twitter"
            value="Twitter"
            target="_blank"
            label="A nossa página no Twitter"
            external
          />
          <ButtonLink
            className="youtube"
            borderColor="#C62828"
            bgColor="#ED0007"
            url={youtube}
            icon="youtube"
            value="YouTube"
            target="_blank"
            label="O nosso canal no Youtube"
            external
          />
        </Styles.CallToAction>
      </div>
    </Styles.Wrapper>
  );
};

Where.propTypes = {
  twitter: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
};

export default Where;
