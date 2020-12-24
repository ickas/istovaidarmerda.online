import React from "react";

import * as Styles from "./styles";
import ButtonLink from "../ButtonLink";
import MouseImage from "../MouseImage";
import { useBreakpoints } from "hooks/useBreakpoints";

const Hero = () => {
  let widthBreakpoint = useBreakpoints("(min-width: 700px)");
  let mouseBreakpoint = useBreakpoints("(min-width: 538px) and (min-height: 812px)");

  return (
    <Styles.Wrapper className="hero" data-testid="hero">
      <div className="hero__container">
        <Styles.Logo>
          <img src="/images/ivdm-logo.svg" width="100%" height="auto" alt="Isto Vai Dar Merda logo" />
        </Styles.Logo>
        <Styles.Intro>
          {widthBreakpoint ? (
            <h1 className="hero__title" aria-label="Isto Vai Dar Merda" data-testid="hero-title">
              <svg xmlns="http://www.w3.org/2000/svg" width={498} height={85}>
                <text x={0} y={65}>
                  Isto Vai Dar
                </text>
              </svg>
              Merda
            </h1>
          ) : (
            <h1 className="hero__title" aria-label="Isto Vai Dar Merda" data-testid="hero-title">
              Isto Vai Dar
              <br /> Merda
            </h1>
          )}

          <p className="hero__description" data-testid="hero-description">
            O <i>Isto Vai Dar Merda</i> é um evento que materializa a máxima “quem avisa, amigo é”, pensado para abordar
            temas que estão no “tipping point” de dar merda mas que ainda podem ser salvos de tão triste fado.
          </p>
          <Styles.CallToAction className="hero__call-to-action">
            <ButtonLink url="/#schedule" value="Agenda" label="Consulta a Agenda" />
            <ButtonLink url="/#hein" value="Hein?!" label="Sabe mais sobre o evento" />
          </Styles.CallToAction>
        </Styles.Intro>
      </div>

      {mouseBreakpoint && <MouseImage className="mouse" />}
    </Styles.Wrapper>
  );
};

export default Hero;
