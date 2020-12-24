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
  <Styles.Logo bg={bg}>
    <Link href={url} passHref>
      <a target="_blank">
        <img src={logo} alt={name} />
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