import styled from "styled-components";
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

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      a {
        color: var(--light);
        text-decoration: none;
        transition-duration: 0.3s;

        &:hover {
          color: var(--darkBrown);
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
