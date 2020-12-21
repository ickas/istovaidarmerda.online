// Libraries
import React from "react";
import { string } from "prop-types";

export const propTypes = {
	target: string,
	text: string,
};

/**
 * @typedef {object} ISkipLink
 *
 * @property {string} target
 * @property {string} text
 */

/**
 * @description Skip Link to Main Content
 * @author  João Dias
 * @param {ISkipLink} props
 * @returns {JSX.Element}
 */
export const SkipLink = ({ target, text }) => (
	<a className="skip-link" href={target}>
		{text}
	</a>
);

SkipLink.defaultProps = {
	target: "#schedule",
	text: "Ir para a secção Agenda",
};

SkipLink.propTypes = propTypes;

export default SkipLink;
