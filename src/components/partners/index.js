import React from "react";
import PropTypes from "prop-types";
import Partner from "./partner";
import * as Styles from "./styles";

/**
 * @param {IPartnersProps} props
 * @returns {JSX.Element}
 */
const Partners = ({ partners }) => (
  <Styles.Wrapper>
    <h2>Apoios</h2>
    <Styles.Logos>
      <ul>
        {Array.isArray(partners) &&
          partners.map((partner, index) => {
            const key = `partner-${index}`;
            return <Partner key={key} bg={partner.bg} logo={partner.logo} name={partner.name} url={partner.url} />;
          })}
      </ul>
    </Styles.Logos>
  </Styles.Wrapper>
);

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
