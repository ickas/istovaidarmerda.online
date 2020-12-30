import styled, { keyframes } from "styled-components";
import { rem, timingFunctions } from "polished";
import { device } from "../../../utils/breakpoints";

const slideUpMouse = keyframes`
  from {
    transform: translate3d(50%, 200%, 0);
  }

  to {
    transform: translate3d(50%, 0, 0);
  }
`;

export const Wrapper = styled.section`
  position: relative;
  background-color: var(--yellow);
  max-width: 100vw;
  width: 100%;
  min-height: auto;
  display: flex;
  padding: ${rem("30px")};
  overflow: hidden;

  .hero__container {
    margin: 0 auto;
  }

  .mouse {
    display: none;
    position: absolute;
    bottom: 1rem;
    margin-left: calc(50% - ${rem("30px")} * 2);

    @media (prefers-reduced-motion: no-preference) {
      transform: translate3d(50%, 200%, 0);
      animation-name: ${slideUpMouse};
      animation-duration: 250ms;
      animation-timing-function: ${timingFunctions("easeOutBack")};
      animation-fill-mode: forwards;
      animation-delay: 250ms;
    }

    @media ${device.mouse} {
      display: flex;
    }
  }

  @media (min-height: 640px) {
    min-height: 100vh;
  }

  @media ${device.s} {
    padding: ${rem("50px")};

    .mouse {
      margin-left: calc(50% - (${rem("50px")} * 2 - 30px));
    }
  }

  @media ${device.m} {
    .hero__container {
      display: flex;

      @supports (display: grid) {
        display: grid;
        grid-template-columns: 24vw 1fr;
        grid-gap: 50px;
      }
      align-items: center;
    }
  }

  @media ${device.l} {
    .hero__container {
      display: flex;

      @supports (display: grid) {
        display: grid;
        grid-template-columns: min(max(${rem("180px")}, 24vw, ${rem("270px")})) 1fr;
        grid-gap: 50px;
      }
      align-items: center;
    }
  }
`;

export const Logo = styled.figure`
  margin: 0;
  margin: 0 auto ${rem("15px")} auto;
  width: 100%;
  max-width: ${rem("180px")};
  height: auto;

  @media ${device.m} {
    transform: translate3d(0, -160px, 0);
    max-width: ${rem("270px")};
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const Intro = styled.div`
  .hero__title {
    margin-bottom: ${rem("15px")};
    font-size: ${rem("36px")};
    line-height: 110%;
    text-align: center;
    text-transform: uppercase;
    color: var(--lightBrown);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &__stroke {
      font-size: inherit;
      font-weight: var(--fontBlack);
      text-transform: uppercase;
      -webkit-text-stroke-color: var(--default);
      -webkit-text-stroke-width: ${rem("2px")};
      color: var(--yellow);
    }

    &__vector {
      display: none;
      margin-bottom: ${rem("-15px")};
      width: ${rem("500px")};
      height: auto;

      text {
        font-size: ${rem("64px")};
        font-weight: var(--fontBlack);
        text-transform: uppercase;
        line-height: ${rem("64px")};
        stroke: var(--default);
        stroke-width: ${rem("2px")};
        fill: transparent;
        font-family: inherit;
      }
    }

    &__vector,
    &__markup {
      overflow: hidden;
    }

    @media ${device.xs} {
      font-size: ${rem("40px")};
    }

    @media ${device.m} {
      &__stroke {
        display: none;
      }

      &__vector {
        display: block;
      }
    }

    @media ${device.m} {
      &__markup {
        margin: 0;
      }
    }
  }

  .hero__description {
    max-width: ${rem("600px")};
    text-align: center;
  }

  @media ${device.s} {
    .hero__title {
      font-size: ${rem("64px")};
    }
  }

  @media ${device.m} {
    .hero__title {
      align-items: flex-start;
    }

    .hero__title,
    .hero__description {
      text-align: left;
    }

    .hero__title__vector {
      margin: 0 0 ${rem("-15px")} 0;
    }
  }
`;

export const CallToAction = styled.div`
  margin-top: ${rem("35px")};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    margin: 5px;
    width: 100%;
    max-width: ${rem("200px")};

    &:hover,
    &:focus {
      background-color: var(--darkBrown);
    }
  }

  @media ${device.m} {
    justify-content: flex-start;

    a {
      margin: 0;

      &:not(:last-child) {
        margin-right: ${rem("10px")};
      }
    }
  }
`;
