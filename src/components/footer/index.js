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
    </Styles.FooterMenu>
    <Styles.Copyright>
      {["Copyright © ", new Date().getFullYear(), " Isto Vai Dar Merda. Toda a merda reservada."]}
    </Styles.Copyright>
  </Styles.Wrapper>
);

export default Footer;
