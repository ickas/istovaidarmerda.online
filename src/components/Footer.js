import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: var(--lightBrown);
  padding: 100px 100px 50px 100px;
  color: var(--light);
`;

const FooterMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  text-align: center;

  h4 {
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  ul {
    margin: 0;
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
`;

const Copyright = styled.div`
  margin-top: 50px;
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
              <a target="_blank">Email</a>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/SoniaTelesF" passHref>
              <a target="_blank">@SoniaTelesF</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Social</h4>
        <ul>
          <li>
            <Link href="https://twitter.com/IstoVai" passHref>
              <a target="_blank">Twitter</a>
            </Link>
          </li>
          <li>
            <Link href="#0" passHref>
              <a target="_blank">Youtube</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Media</h4>
        <ul>
          <li>
            <Link href="#0" passHref>
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
