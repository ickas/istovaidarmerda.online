import styled, { keyframes } from "styled-components";
import { rem, timingFunctions } from "polished";

const fadeInElement = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

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
  min-height: 100vh;
  display: flex;
  overflow: hidden;

  .hero__container {
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  .mouse {
    position: absolute;
    bottom: 1rem;
    margin-left: 50%;
    transform: translate3d(50%, 200%, 0);
    animation-name: ${slideUpMouse};
    animation-duration: 250ms;
    animation-timing-function: ${timingFunctions("easeOutBack")};
    animation-fill-mode: forwards;
    animation-delay: 250ms;
  }
`;

export const Logo = styled.figure`
  margin-right: ${rem("50px")};
  height: 100%;
  display: flex;
  align-items: center;

  img {
    margin-top: -325px;
    width: auto;
    height: 300px;
    opacity: 0;
    animation-name: ${fadeInElement};
    animation-duration: 250ms;
    animation-timing-function: ${timingFunctions("easeOutBack")};
    animation-fill-mode: forwards;
  }
`;

export const Intro = styled.div`
  background-color: var(--yellow);

  .hero__title {
    font-size: ${rem("64px")};
    text-transform: uppercase;
    color: var(--lightBrown);
    overflow: hidden;

    &__markup {
      animation-delay: 500ms;
      opacity: 0;
    }

    &__vector {
      display: block;
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
      }
    }

    &__vector,
    &__markup {
      animation-name: ${fadeInElement};
      animation-duration: 250ms;
      animation-delay: 125ms;
      animation-timing-function: ${timingFunctions("easeOutQuad")};
      animation-fill-mode: forwards;
      opacity: 0;
      overflow: hidden;
    }
  }

  .hero__description {
    max-width: ${rem("600px")};
    line-height: var(--lineHeight);
    animation-name: ${fadeInElement};
    animation-duration: 250ms;
    animation-timing-function: ${timingFunctions("easeOutQuad")};
    animation-fill-mode: forwards;
    animation-delay: 250ms;
    opacity: 0;
  }
`;

export const CallToAction = styled.div`
  margin-top: ${rem("50px")};
  display: flex;
  opacity: 0;
  animation-name: ${fadeInElement};
  animation-duration: 250ms;
  animation-timing-function: ${timingFunctions("easeOutQuad")};
  animation-fill-mode: forwards;
  animation-delay: 250ms;

  a {
    min-width: ${rem("200px")};

    &:not(:last-child) {
      margin-right: ${rem("10px")};
    }

    &:hover,
    &:focus {
      background-color: var(--darkBrown);
    }
  }
`;
