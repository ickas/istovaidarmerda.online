import styled, { keyframes } from "styled-components";
import { rem, timingFunctions } from "polished";
import { device } from "../../../utils/breakpoints";

export const slideInCard = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.section`
  background-color: var(--yellow);
  background-image: url("images/poop-pattern.svg");
  background-repeat: repeat;
  background-position: center;
  background-size: ${rem("272px")} ${rem("256px")};
  padding: ${rem("30px")};
  overflow: hidden;

  @media (prefers-reduced-motion: no-preference) {
    background-attachment: fixed;
  }

  .card {
    margin: 0 auto;
    border-radius: ${rem("50px")};
    background-color: var(--light);
    max-width: ${rem("1000px")};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${rem("30px")};
    text-align: center;
    position: relative;
    opacity: 0;
    transform: translateY(100%);
    animation-name: ${slideInCard};
    animation-duration: 500ms;
    animation-timing-function: ${timingFunctions("easeOutBack")};
    animation-fill-mode: forwards;
    animation-play-state: paused;

    &::after {
      content: "";
      border-radius: ${rem("50px")};
      position: absolute;
      top: 0;
      left: 0;
      box-shadow: 0 0 ${rem("50px")} rgba(33, 33, 33, 0.25);
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    h2 {
      margin-bottom: ${rem("15px")};
      font-size: ${rem("40px")};
    }

    p {
      max-width: ${rem("600px")};
    }
  }

  &.is-visible {
    .card,
    .title {
      animation-play-state: running;
    }
  }

  @media ${device.s} {
    .card h2 {
      font-size: ${rem("64px")};
    }
  }

  @media ${device.m} {
    padding: ${rem("100px")};

    .card {
      padding: ${rem("50px")};
    }
  }
`;

export const CallToAction = styled.div`
  margin-top: ${rem("45px")};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    margin: 5px;
    min-width: ${rem("200px")};

    &.twitter:hover {
      background-color: #1565c0;
    }

    &.youtube:hover {
      background-color: #c62828;
    }

    &:hover {
      background-color: var(--darkBrown);
    }
  }
`;
