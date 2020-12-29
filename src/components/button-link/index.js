import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import * as Styles from "./styles";
import "./types.d";
import Icon from "../icon";

export const defaultProps = {
  className: "",
  borderColor: "#4d352d",
  bgColor: "#946037",
  icon: null,
  target: "_self",
  external: false,
  onClick: () => {},
};

/**
 * Button as a Link
 *
 * @param {IButtonLinkProps} props
 * @returns {JSX.Element}
 */
const ButtonLink = ({ className, borderColor, bgColor, url, icon, value, label, target, external, onClick }) => (
  <Link href={url} passHref>
    <Styles.Button
      className={className}
      borderColor={borderColor}
      bgColor={bgColor}
      aria-label={label}
      data-testid="button-link"
      target={target}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onClick}
    >
      {icon && <Icon icon={icon} />}
      {value}
    </Styles.Button>
  </Link>
);

ButtonLink.defaultProps = defaultProps;

ButtonLink.propTypes = {
  className: PropTypes.string,
  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  target: PropTypes.string,
  external: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ButtonLink;
