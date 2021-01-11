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

const scaleUpSign = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Wrapper = styled.section`
  --title-margin: 50px;
  padding: 50px 30px 30px 30px;
  background-color: var(--light);

  .schedule {
    &__title {
      font-size: ${rem("40px")};
      text-align: center;

      @media ${device.s} {
        font-size: ${rem("64px")};
      }
    }

    &__subtitle {
      color: var(--lightBrown);
      text-align: center;
    }
  }

  .schedule__agenda .schedule__title {
    margin-top: 0;
  }

  .schedule__rubrics {
    margin-top: var(--title-margin);
  }

  @media ${device.s} {
    --title-margin: 100px;
  }

  @media ${device.l} {
    padding: ${rem("100px")};
  }
`;

export const EventsWrapper = styled.ul`
  --title-margin: 50px;
  --events-gap: ${rem("30px")};
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: var(--events-gap);
  grid-row-gap: calc(var(--events-gap) * 2);
  margin: var(--title-margin) auto 0 auto;
  padding: 0;
  max-width: 1440px;
  list-style-type: none;

  @media ${device.s} {
    --title-margin: 100px;
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
    animation-timing-function: ${timingFunctions("easeInOutCirc")};
    animation-fill-mode: forwards;
    animation-play-state: paused;

    @media (prefers-reduced-motion: no-preference) {
      animation-duration: var(--ivdm-event-duration);
      animation-delay: calc(calc(var(--ivdm-event-delay) * var(--ivdm-event-stagger)) + var(--ivdm-event-duration));
    }
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

  .youtube__button {
    height: ${rem("40px")};
    padding: 1.25rem 1rem;
    text-transform: initial;
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

  @media (prefers-reduced-motion: no-preference) {
    &.is-visible {
      &:after {
        animation-play-state: running;
      }

      .event__heading,
      .event__topic,
      .event__section,
      .event__link,
      .sign-language {
        animation-play-state: running;
        animation-delay: calc(calc(var(--ivdm-event-delay) * var(--ivdm-event-stagger)) + var(--ivdm-event-duration));
      }
    }

    .event__heading,
    .event__topic,
    .event__link,
    .event__section {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
      animation-name: ${slideInUpEvent};
      animation-duration: 0.01ms;
      animation-timing-function: ${timingFunctions("easeOutExpo")};
      animation-fill-mode: forwards;
      animation-play-state: paused;
      animation-duration: var(--ivdm-event-duration);
    }
  }
`;

export const SignLanguage = styled.figure`
  position: absolute;
  top: ${rem("25px")};
  right: 5px;
  width: ${rem("30px")};
  height: ${rem("30px")};
  margin: 0;
  padding: 0;

  svg {
    width: 100%;
    height: auto;
  }

  @media (prefers-reduced-motion: no-preference) {
    opacity: 0;
    transform: scale(0);
    animation-name: ${scaleUpSign};
    animation-duration: 0.01ms;
    animation-timing-function: ${timingFunctions("easeOutBack")};
    animation-fill-mode: forwards;
    animation-play-state: paused;
    animation-duration: var(--ivdm-event-duration);
  }
`;

export const Persona = styled.div`
  --avatar-width: ${rem("50px")};

  &:not(:last-child) {
    margin-bottom: ${rem("10px")};
  }

  .persona {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media (prefers-reduced-motion: no-preference) {
      transform: scale(1);
      transition-property: transform;
      transition-duration: 125ms;
      transition-timing-function: ${timingFunctions("easeInExpo")};
    }

    &__avatar {
      margin-right: ${rem("5px")};
      width: var(--avatar-width);
      height: var(--avatar-width);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 0 2px var(--lightBrown);
        border-radius: var(--avatar-width);
        opacity: 0;
      }

      img {
        border-radius: var(--avatar-width);
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

    &:hover,
    &:focus {
      .name {
        &:after {
          transform: translate3d(0, 0, 0);
        }
      }
    }

    &:active {
      transform: scale(0.95);
    }

    &:visited {
      .persona__avatar::after {
        opacity: 1;
      }
    }
  }

  .name {
    font-weight: var(--fontRegular);
    overflow: hidden;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--default);
      transform: translate3d(-100%, 0, 0);

      @media (prefers-reduced-motion: no-preference) {
        transition-property: transform;
        transition-duration: 1000ms;
        transition-timing-function: ${timingFunctions("easeInOutExpo")};
      }
    }
  }

  .job {
    font-size: ${rem("12px")};
    font-style: italic;
    color: var(--lightBrown);
  }

  @media ${device.s} {
    --avatar-width: ${rem("50px", "18px")};
  }
`;
