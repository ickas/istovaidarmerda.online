import React from "react";
import PropTypes from "prop-types";

import icons from "../../utils/icons";

const Icon = ({ fill, icon }) => (
	<svg viewBox="0 0 32 32">
		<path style={{ fill }} d={icons[icon]} />
	</svg>
);

Icon.defaultProps = {
	fill: "#ffffff",
};

Icon.propTypes = {
	fill: PropTypes.string,
	icon: PropTypes.string.isRequired,
};

export default Icon;
