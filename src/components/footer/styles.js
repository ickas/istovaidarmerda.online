import styled from "styled-components";
import { timingFunctions } from "polished";
import { device } from "../../../utils/breakpoints";

export const Wrapper = styled.footer`
  background-color: var(--lightBrown);
  padding: 50px 30px 15px 30px;
  color: var(--light);

  @media ${device.s} {
    padding: 50px 100px 30px 100px;
  }
`;

export const FooterMenu = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;

  h4 {
    margin-bottom: 15px;
    color: var(--darkBrown);
    text-transform: uppercase;
  }

  ul {
    margin: 0 0 50px 0;
    padding: 0;

    li {
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      a {
        color: var(--light);
        text-decoration: none;
        position: relative;
        overflow: hidden;
        display: flex;

        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: currentColor;
          transform: translate3d(-100%, 0, 0);

          @media (prefers-reduced-motion: no-preference) {
            transition-property: transform;
            transition-duration: 1000ms;
            transition-timing-function: ${timingFunctions("easeInOutExpo")};
          }
        }

        @media (prefers-reduced-motion: no-preference) {
          transition-duration: 0.3s;
        }

        &:hover,
        &:focus {
          &:after {
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }

  @media ${device.s} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

export const Copyright = styled.div`
  font-size: 0.85rem;
  text-align: center;
  color: var(--darkBrown);
`;
