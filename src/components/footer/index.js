import React from "react";
import Link from "next/link";
import * as Styles from "./styles";

const Footer = () => (
  <Styles.Wrapper>
    <Styles.FooterMenu>
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
              <a target="_blank" rel="noopener noreferrer">
                Press Kit
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Styles.FooterMenu>
    <Styles.Copyright>
      {["Copyright © ", new Date().getFullYear(), " Isto Vai Dar Merda. Toda a merda reservada."]}
    </Styles.Copyright>
  </Styles.Wrapper>
);

export default Footer;
