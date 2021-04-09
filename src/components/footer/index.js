import React from "react";
import Link from "next/link";
import * as Styles from "./styles";

const Footer = () => (
  <Styles.Wrapper>
    <Styles.FooterMenu>
      <div>
        <h3 className="title as-h4">Contactos</h3>
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
        <h3 className="title as-h4">Social</h3>
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
        <h3 className="title as-h4">Podcast</h3>
        <ul>
          <li>
            <Link href="https://open.spotify.com/show/6R6RisJT1Ogk2zc67j7MMc" passHref>
              <a target="_blank" rel="noopener noreferrer">
                Spotify
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://podcasts.apple.com/pt/podcast/isto-vai/id1549116254" passHref>
              <a target="_blank" rel="noopener noreferrer">
                Apple Podcasts
              </a>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy80N2MzNTBhNC9wb2RjYXN0L3Jzcw=="
              passHref
            >
              <a target="_blank" rel="noopener noreferrer">
                Google Podcasts
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://anchor.fm/s/47c350a4/podcast/rss" passHref>
              <a target="_blank" rel="noopener noreferrer">
                RSS
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="title as-h4">Media</h3>
        <ul>
          <li>
            <Link href="https://drive.google.com/drive/folders/1LXdzY33Ml7c9st2lJ0PwBPeIX98qOV8N?usp=sharing" passHref>
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
