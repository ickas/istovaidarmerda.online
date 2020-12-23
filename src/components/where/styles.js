import styled, { keyframes } from "styled-components";
import { rem, timingFunctions } from "polished";

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
  padding: ${rem("100px")};
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
    padding: ${rem("50px")};
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
`;

export const CallToAction = styled.div`
  margin-top: ${rem("50px")};
  display: flex;

  a {
    min-width: ${rem("200px")};

    &.twitter:hover {
      background-color: #1565c0;
    }

    &.youtube:hover {
      background-color: #c62828;
    }

    &:not(:last-child) {
      margin-right: ${rem("10px")};
    }

    &:hover {
      background-color: var(--darkBrown);
    }
  }
`;
