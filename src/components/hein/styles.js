import styled, { keyframes } from "styled-components";
import { timingFunctions } from "polished";

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 100px;
  padding: 100px;
  overflow: hidden;

  .hein__column {
    opacity: 0;
    animation-timing-function: ${timingFunctions("easeOutExpo")};
    animation-duration: 500ms;
    animation-fill-mode: forwards;
    animation-play-state: paused;

    &:first-child {
      transform: translate3d(-100%, 0, 0);
      animation-name: ${slideInRight};
    }

    &:last-child {
      transform: translate3d(100%, 0, 0);
      animation-name: ${slideInLeft};
      animation-delay: 250ms;
    }
  }

  &.is-visible {
    .hein__column {
      animation-play-state: running;
    }
  }
`;

export default Wrapper;
