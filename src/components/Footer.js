import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { device } from "utils/breakpoints";

const Wrapper = styled.footer`
  background-color: var(--lightBrown);
  padding: 50px 30px 15px 30px;
  color: var(--light);

  @media ${device.s} {
    padding: 50px 100px 30px 100px;
  }
`;

const FooterMenu = styled.div`
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

const Copyright = styled.div`
  font-size: 0.85rem;
  text-align: center;
  color: var(--darkBrown);
`;

const Footer = () => (
  <Wrapper>
    <FooterMenu>
      <div>
        <h4>Contactos</h4>
        <ul>
          <li>
            <Link href="mailto:istovaidarmerda.online@gmail.com" passHref>
              <a target="_blank" rel="noopener noreferrer">
                Email
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/SoniaTelesF" passHref>
              <a target="_blank" rel="noopener noreferrer">
                @SoniaTelesF
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Social</h4>
        <ul>
          <li>
            <Link href="https://twitter.com/IstoVai" passHref>
              <a target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/channel/UC-M0MHRa0CNewKhjCz4c2Qg" passHref>
              <a target="_blank" rel="noopener noreferrer">
                Youtube
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Media</h4>
        <ul>
          <li>
            <Link href="https://drive.google.com/drive/folders/1J4i9QUIF_M7-OQ8qXOPmOJdGK3O7HUqR?usp=sharing" passHref>
              <a target="_blank">Press Kit</a>
            </Link>
          </li>
        </ul>
      </div>
    </FooterMenu>
    <Copyright>{["Copyright © ", new Date().getFullYear(), " Isto Vai Dar Merda. Toda a merda reservada."]}</Copyright>
  </Wrapper>
);

export default Footer;
