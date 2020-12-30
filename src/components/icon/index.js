import React from "react";
import PropTypes from "prop-types";
import Logger from "js-logger";
import icons from "../../../utils/icons";

/**
 * @typedef {object} IIconProps
 *
 * @property {string} [fill]
 * @property {"twitter" | "youtube" | "sign-language"} icon
 */

/**
 *
 * @param {IIconProps} props
 * @returns {JSX.Element}
 */
const Icon = ({ fill, icon }) => {
  /**
   * Gets the Path to be Drawn onto the SVG
   *
   * @returns {string}
   */
  function getPathToBeDrawn() {
    let path = icons[icon];

    if (!path) {
      path = "";
      Logger.error("components/icon.getPathToBeDrawn: ", "Please provide a valid icon");
    }

    return path;
  }

  return (
    <svg viewBox="0 0 32 32" role="presentation">
      <path fill={fill} d={getPathToBeDrawn()} />
    </svg>
  );
};

Icon.defaultProps = {
  fill: "var(--light, #ffffff)",
};

Icon.propTypes = {
  fill: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

export default Icon;
