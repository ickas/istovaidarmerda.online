import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";

import Icon from "./Icon";

const Button = styled.a`
	border: 3px solid ${(props) => (props.borderColor ? props.borderColor : "var(--darkBrown)")};
	border-radius: 999px;
	background-color: ${(props) => (props.bgColor ? props.bgColor : "var(--lightBrown)")};
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

const ButtonLink = ({ className, borderColor, bgColor, url, icon, value, ...props }) => (
	<Link href={url} passHref>
		<Button className={className} borderColor={borderColor} bgColor={bgColor} {...props}>
			{icon && <Icon icon={icon} />}
			{value}
		</Button>
	</Link>
);

ButtonLink.defaultProps = {
	borderColor: "#4d352d",
	bgColor: "#946037",
};

ButtonLink.propTypes = {
	className: PropTypes.string,
	borderColor: PropTypes.string,
	bgColor: PropTypes.string,
	url: PropTypes.string.isRequired,
	icon: PropTypes.string,
	value: PropTypes.string.isRequired,
};

export default ButtonLink;
