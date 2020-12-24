import styled, { keyframes } from "styled-components";
import { rem, timingFunctions } from "polished";
import { device } from "../../../utils/breakpoints";

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
  padding: ${rem("30px")};
  overflow: hidden;
  background: var(--light);

  .hein__content {
    margin: 0 auto;
    max-width: 1280px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${rem("30px")};

    @media ${device.s} {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
  }

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

    h2 {
      margin-bottom: ${rem("15px")};
      font-size: ${rem("40px")};
    }
  }

  &.is-visible {
    .hein__column {
      animation-play-state: running;
    }
  }

  @media ${device.s} {
    padding: ${rem("50px")};

    .hein__content {
      grid-gap: ${rem("50px")};
    }

    .hein__column h2 {
      font-size: ${rem("64px")};
    }
  }
`;

export default Wrapper;
