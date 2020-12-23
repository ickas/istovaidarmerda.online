import styled, { keyframes } from "styled-components";
import { rem, timingFunctions } from "polished";

const slideInLeftEventBorder = keyframes`
  from {
    transform: ${`translate3d(0, ${rem("-15px")}, 0) scale3d(0, 1, 1)`};
  }

  to {
    transform: ${`translate3d(0, ${rem("-15px")}, 0) scale3d(1, 1, 1)`};
  }
`;

const slideInUpEvent = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const Wrapper = styled.section`
  padding: 100px;
`;

export const EventsWrapper = styled.div`
  --events-gap: ${rem("30px")};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: var(--events-gap);
  grid-row-gap: calc(var(--events-gap) * 2);
`;

export const Event = styled.div`
  --ivdm-event-delay: 0;
  --ivdm-event-duration: 500ms;
  --ivdm-event-stagger: 125ms;

  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: ${rem("15px")};
    width: 100%;
    background-color: var(--yellow);
    transform: ${`translate3d(0, ${rem("-15px")}, 0) scale3d(0, 1, 1)`};
    transform-origin: left center;
    animation-name: ${slideInLeftEventBorder};
    animation-duration: 500ms;
    animation-delay: calc(calc(var(--ivdm-event-delay) * var(--ivdm-event-stagger)) + var(--ivdm-event-duration));
    animation-timing-function: ${timingFunctions("easeInOutCirc")};
    animation-fill-mode: forwards;
    animation-play-state: paused;
  }

  .event__heading {
    margin: ${rem("10px")} 0 ${rem("-5px")} 0;
    --ivdm-event-stagger: 62.5ms;
  }

  .event__topic {
    height: ${rem("82px")};
    --ivdm-event-stagger: 125ms;

    span {
      display: block;
      line-height: 150%;

      &.area {
        font-style: italic;
      }

      &.title {
        font-weight: var(--fontBlack);
      }
    }
  }

  .event__section {
    margin-top: ${rem("30px", "18px")};
    --ivdm-event-stagger: 187.5ms;

    .event__item + .event__item {
      margin-top: ${rem("15px", "18px")};
    }

    a {
      color: var(--default);
      text-decoration: none;
    }
  }

  .event__item {
    h4 {
      margin-bottom: ${rem("10px", "18px")};
      font-size: ${rem("12px", "18px")};
      color: var(--lightBrown);
    }
  }

  &.is-visible {
    &:after {
      animation-play-state: running;
    }

    .event__heading,
    .event__topic,
    .event__section {
      animation-delay: calc(calc(var(--ivdm-event-delay) * var(--ivdm-event-stagger)) + var(--ivdm-event-duration));
      animation-play-state: running;
    }
  }

  .event__heading,
  .event__topic,
  .event__section {
    animation-name: ${slideInUpEvent};
    animation-duration: 500ms;
    animation-timing-function: ${timingFunctions("easeOutExpo")};
    animation-fill-mode: forwards;
    animation-play-state: paused;
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;

export const Persona = styled.div`
  &:not(:last-child) {
    margin-bottom: ${rem("10px", "18px")};
  }

  a {
    display: flex;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      &.avatar {
        margin-right: ${rem("5px", "18px")};
        width: ${rem("50px", "18px")};
        height: ${rem("50px", "18px")};

        img {
          border-radius: ${rem("50px", "18px")};
          object-fit: cover;
          overflow: hidden;
        }
      }
    }

    span {
      &.name {
        font-weight: var(--fontRegular);
      }

      &.job {
        font-size: ${rem("12px", "18px")};
        font-style: italic;
        color: var(--lightBrown);
      }
    }
  }
`;
