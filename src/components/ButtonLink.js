import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import Icon from "./Icon";

const Button = styled.a`
	border: 3px solid ${({ borderColor }) => borderColor || "var(--darkBrown)"};
	border-radius: 999px;
	background-color: ${({ bgColor }) => bgColor || "var(--lightBrown)"};
	width: min-content;
	height: 84px;
	padding: 0 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: var(--fontBlack);
	text-transform: uppercase;
	text-decoration: none;
	color: var(--light);
	transition-duration: 0.3s;
	cursor: pointer;

	svg {
		margin-right: 5px;
		width: 50px;
		height: 50px;
	}
`;

export const defaultProps = {
	className: null,
	icon: null,
	borderColor: "#4d352d",
	bgColor: "#946037",
	target: null,
};

/**
 * @typedef {object} IButtonLinkProps
 *
 * @property {string} [className]
 * @property {string} [borderColor]
 * @property {string} [bgColor]
 * @property {string} url
 * @property {string} [icon]
 * @property {string} value
 * @property {string} label
 * @property {string} target
 */

/**
 * Button as a Link
 *
 * @param {IButtonLinkProps} props
 * @returns {JSX.Element}
 */
const ButtonLink = ({ className, borderColor, bgColor, url, icon, value, label, target }) => (
	<Link href={url} passHref>
		<Button
			className={className}
			borderColor={borderColor}
			bgColor={bgColor}
			aria-label={label}
			data-testid="button-link"
			target={target}
		>
			{icon && <Icon icon={icon} />}
			{value}
		</Button>
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
};

export default ButtonLink;
