import React from "react";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { useBreakpoints } from "../../../hooks/useBreakpoints";
import * as Styles from "./styles";
import ButtonLink from "../button-link";
import MouseImage from "../mouse-image";

export const WIDTH_BREAKPOINT = "(min-width: 700px)";
export const MOUSE_BREAKPOINT = "(min-width: 538px) and (min-height: 812px)";

const Hero = () => {
  const widthBreakpoint = useBreakpoints("(min-width: 700px)");
  const mouseBreakpoint = useBreakpoints("(min-width: 538px) and (min-height: 720px)");

  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
    triggerOnce: true,
  });

  const classes = classNames("hero", {
    "is-visible": inView,
  });

  const src = "/images/ivdm-logo/ivdm-logo.png";
  const srcSet = `${src} 1x, /images/ivdm-logo/ivdm-logo@2x.png 2x, /images/ivdm-logo/ivdm-logo@3x.png 3x`;

  return (
    <Styles.Wrapper ref={ref} className={classes} data-testid="hero">
      <div className="hero__container">
        <Styles.Logo>
          <img src={src} srcSet={srcSet} width="302" height="333" alt="Logótipo do Isto Vai Dar Merda" loading="lazy" />
        </Styles.Logo>
        <Styles.Intro>
          {widthBreakpoint ? (
            <h1 className="hero__title" aria-label="Isto Vai Dar Merda" data-testid="hero-title">
              <svg xmlns="http://www.w3.org/2000/svg" width={498} height={85}>
                <text x={0} y={65}>
                  Isto Vai Dar
                </text>
              </svg>
              <span className="hero__title__markup">Merda</span>
            </h1>
          ) : (
            <h1 className="hero__title" aria-label="Isto Vai Dar Merda" data-testid="hero-title">
              <span className="hero__title__stroke">Isto Vai Dar</span>
              <span className="hero__title__markup">Merda</span>
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
