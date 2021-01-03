import React, { useContext, useEffect } from "react";
import classNames from "classnames";
import useSound from "use-sound";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import ButtonLink from "../button-link";
import KonamiContext from "../konami-code/context";
import * as Styles from "./styles";
import "./types.d";

/**
 * @param {IWhereProps} props
 * @returns {JSX.Element}
 */
const Where = ({ twitter, youtube, onPlaySound }) => {
  const [play] = useSound("/sounds/is-visible.mp3");
  const { hasEasterEgg } = useContext(KonamiContext);

  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  const classes = classNames("where", {
    "is-visible": inView,
  });

  useEffect(() => {
    /* istanbul ignore next  */
    if (inView && hasEasterEgg) {
      play();

      if (onPlaySound) {
        onPlaySound();
      }
    }
  }, [inView, hasEasterEgg]);

  return (
    <Styles.Wrapper id="where" ref={ref} className={classes} data-testid="where">
      <div className="card">
        <h2 className="title">Onde?</h2>
        <p>
          O <i>Isto Vai Dar Merda</i> decorrerá exclusivamente na rede social <strong>Twitter</strong>, com excepção da
          transmissão das sessões online que serão também disponibilizadas no canal <strong>YouTube</strong> do evento.
        </p>
        <p>
          As sessões terão <strong>intérprete de língua gestual portuguesa</strong> para abrir o evento à comunidade
          surda através de uma equipa de alunos do curso de Língua Gestual Portuguesa da Escola Superior de Educação de
          Coimbra.
        </p>
        <p>#istovaidarmerda #ivdm #istovaidarfoto #istovaidartech #istovaidarvinho #istovaidarrabisco</p>
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

Where.defaultProps = {
  onPlaySound: undefined,
};

Where.propTypes = {
  twitter: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
  onPlaySound: PropTypes.func,
};

export default Where;
