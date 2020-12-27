import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import * as Styles from "./styles";
import "./types.d";

/**
 * @param {IPartnerProps} props
 * @returns {JSX.Element}
 */
const Partner = ({ bg, logo, name, url }) => (
  <Styles.Logo bg={bg} className="partner">
    <Link href={url} passHref>
      <a target="_blank" rel="noreferrer noopener">
        <img src={logo} alt={name} loading="lazy" />
      </a>
    </Link>
  </Styles.Logo>
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

export default Partner;
