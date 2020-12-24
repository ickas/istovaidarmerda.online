import styled from "styled-components";
import { rem } from "polished";
import { device } from "utils/breakpoints";

export const Wrapper = styled.section`
  position: relative;
  background-color: var(--yellow);
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding: ${rem("30px")};

  .hero__container {
    margin: 0 auto;
  }

  .mouse {
    position: absolute;
    bottom: 1rem;
    margin-left: calc(50% - ${rem("30px")});
    transform: translateX(-50%);
  }

  @media ${device.s} {
    padding: ${rem("50px")};

    .mouse {
      margin-left: calc(50% - ${rem("50px")});
    }
  }

  @media ${device.m} {
    .hero__container {
      display: flex;
      align-items: center;
    }
  }
`;

export const Logo = styled.figure`
  margin: 0;
  margin: 0 auto ${rem("15px")} auto;
  width: 100%;
  max-width: 200px;
  height: auto;

  @media ${device.m} {
    margin: -320px ${rem("50px")} 0 0;
  }

  @media ${device.m} {
    max-width: 270px;
  }
`;

export const Intro = styled.div`
  .hero__title {
    margin-bottom: ${rem("15px")};
    font-size: ${rem("40px")};
    line-height: 110%;
    text-align: center;
    text-transform: uppercase;
    color: var(--lightBrown);
  }

  .hero__description {
    max-width: ${rem("600px")};
    text-align: center;
  }

  @media ${device.s} {
    .hero__title {
      font-size: ${rem("64px")};
    }

    svg {
      display: block;
      margin: 0 auto ${rem("-15px")} auto;

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
  }

  @media ${device.m} {
    .hero__title,
    .hero__description {
      text-align: left;
    }

    svg {
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
