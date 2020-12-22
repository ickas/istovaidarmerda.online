import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import { rem } from "polished";

const Wrapper = styled.section`
  background-color: var(--yellow);
  padding: 100px;
  text-align: center;
`;

const Logos = styled.div`
  --itemWidth: 250px;
  width: min-content;
  margin: 50px auto 0 auto;

  ul {
    margin: 0;
    display: grid;
    grid-template-columns: repeat(4, var(--itemWidth));
    grid-gap: 50px;
    padding: 0;
  }
`;

const Logo = styled.li`
  list-style: none;
  position: relative;
  border-radius: ${rem("50px")};
  background-color: ${({ bg }) => bg || "var(--light)"};
  width: var(--itemWidth);
  height: var(--itemWidth);
  box-shadow: 0 0 ${rem("50px")} rgba(33, 33, 33, 0.25);
  transition-duration: 0.5s;

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 180px;
      max-height: 150px;
    }
  }

  &:hover {
    box-shadow: 0 0 ${rem("75px")} rgba(33, 33, 33, 0.5);
  }
`;

const Partner = ({ bg, logo, name, url }) => (
  <Logo bg={bg}>
    <Link href={url} passHref>
      <a target="_blank">
        <img src={logo} alt={name} />
      </a>
    </Link>
  </Logo>
);

const Partners = ({ partners }) => (
  <Wrapper>
    <h2>Apoios</h2>
    <Logos>
      <ul>
        {Array.isArray(partners) &&
          partners.map((partner, index) => {
            const key = `partner-${index}`;
            return <Partner key={key} bg={partner.bg} logo={partner.logo} name={partner.name} url={partner.url} />;
          })}
      </ul>
    </Logos>
  </Wrapper>
);

Partner.defaultProps = {
  bg: "#ffffff",
};

Partner.propTypes = {
  bg: PropTypes.string,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

Partners.propTypes = {
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      bg: PropTypes.string,
      logo: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
};

export default Partners;
