import styled, { keyframes } from "styled-components";
import { rem, timingFunctions } from "polished";
import { device } from "../../../utils/breakpoints";

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
  --title-margin: 50px;
  padding: 50px 30px 30px 30px;
  background-color: var(--light);

  .schedule {
    &__title {
      margin: var(--title-margin) 0;
      font-size: ${rem("40px")};
      text-align: center;

      @media ${device.s} {
        font-size: ${rem("64px")};
      }
    }
  }

  .schedule__agenda .schedule__title {
    margin-top: 0;
  }

  @media ${device.l} {
    padding: ${rem("100px")};
  }

  @media ${device.s} {
    --title-margin: 100px;
  }
`;

export const EventsWrapper = styled.ul`
  --events-gap: ${rem("30px")};
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: var(--events-gap);
  grid-row-gap: calc(var(--events-gap) * 2);
  margin: 0 auto;
  padding: 0;
  max-width: 1440px;
  list-style-type: none;

  @media ${device.s} {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;

export const Event = styled.li`
  --ivdm-event-delay: 0;
  --ivdm-event-duration: 375ms;
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
    animation-duration: var(--ivdm-event-duration);
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
    height: auto;
    max-height: ${rem("82px")};
    --ivdm-event-stagger: 125ms;

    span {
      display: block;
      line-height: 150%;

      &.area {
        font-style: italic;
      }

      &.title {
        font-weight: var(--fontBlack);
        margin-bottom: 10px;
      }
    }
  }

  .event__section {
    margin-top: ${rem("30px")};
    --ivdm-event-stagger: 187.5ms;

    &__title {
      margin-bottom: 10px;
      font-size: 0.75rem;
      color: var(--lightBrown);
    }

    .event__item + .event__item {
      margin-top: ${rem("15px")};
    }

    a {
      color: var(--default);
      text-decoration: none;
    }
  }

  .event__item {
    h4 {
      margin-bottom: ${rem("10px")};
      font-size: ${rem("12px")};
      color: var(--lightBrown);
    }
  }

  &[data-type="rubrics"] {
    .title {
      margin-top: 10px;
      font-size: 1.2rem;
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
    animation-duration: var(--ivdm-event-duration);
    animation-timing-function: ${timingFunctions("easeOutExpo")};
    animation-fill-mode: forwards;
    animation-play-state: paused;
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;

export const Persona = styled.div`
  &:not(:last-child) {
    margin-bottom: ${rem("10px")};
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .persona {
      &__avatar {
        margin-right: ${rem("5px")};
        width: ${rem("50px")};
        height: ${rem("50px")};

        img {
          border-radius: ${rem("50px")};
          object-fit: cover;
          overflow: hidden;
          background-color: var(--yellow);
        }
      }

      &__metadata {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
    }

    span {
      &.name {
        font-weight: var(--fontRegular);
      }

      &.job {
        font-size: ${rem("12px")};
        font-style: italic;
        color: var(--lightBrown);
      }
    }
  }
`;
