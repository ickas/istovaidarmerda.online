import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { rem } from "polished";

import ButtonLink from "./ButtonLink";

const Wrapper = styled.section`
  background-color: var(--yellow);
  background-image: url("images/poop-pattern.svg");
  background-repeat: repeat;
  background-position: center;
  background-size: ${rem("272px")} ${rem("256px")};
  padding: ${rem("100px")};

  > div {
    margin: 0 auto;
    border-radius: ${rem("50px")};
    background-color: var(--light);
    max-width: ${rem("1000px")};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${rem("50px")};
    text-align: center;
    box-shadow: 0 0 ${rem("50px")} rgba(33, 33, 33, 0.25);

    p {
      max-width: ${rem("600px")};
    }
  }
`;

const CallToAction = styled.div`
  margin-top: ${rem("50px")};
  display: flex;

  a {
    min-width: ${rem("200px")};

    &.twitter:hover {
      background-color: #1565c0;
    }

    &.youtube:hover {
      background-color: #c62828;
    }

    &:not(:last-child) {
      margin-right: ${rem("10px")};
    }

    &:hover {
      background-color: var(--darkBrown);
    }
  }
`;

const Where = ({ twitter, youtube }) => (
  <Wrapper id="where">
    <div>
      <h2>Onde?</h2>
      <p>
        O <i>Isto Vai Dar Merda</i> decorrerá exclusivamente na rede social <strong>Twitter</strong>, com excepção da
        transmissão das sessões online que serão também disponibilizadas no canal <strong>YouTube</strong> do evento.
      </p>
      <p>#istovaidarmerda #ivdm #istovaidarfoto #istovaidardicatech #istovaidarvinho #istovaidarrabisco</p>
      <CallToAction>
        <ButtonLink
          className="twitter"
          borderColor="#1565C0"
          bgColor="#0073DB"
          url={twitter}
          icon="twitter"
          value="Twitter"
          target="_blank"
          label="A nossa página no Twitter"
        />
        <ButtonLink
          className="youtube"
          borderColor="#C62828"
          bgColor="#ED0007"
          url={youtube}
          icon="youtube"
          value="YouTube"
          target="_blank"
          label="O nosso canal no Youtube"
        />
      </CallToAction>
    </div>
  </Wrapper>
);

Where.propTypes = {
  twitter: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
};

export default Where;
