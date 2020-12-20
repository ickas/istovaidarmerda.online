import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";

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
	color: var(--light);
	transition-duration: 0.3s;
	cursor: pointer;
`;

const ButtonLink = ({ borderColor, bgColor, url, value }) => (
	<Link href={url}>
		<Button borderColor={borderColor} bgColor={bgColor}>
			{value}
		</Button>
	</Link>
);

ButtonLink.defaultProps = {
	borderColor: "#4d352d",
	bgColor: "#946037",
};

ButtonLink.propTypes = {
	borderColor: PropTypes.string,
	bgColor: PropTypes.string,
	url: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

export default ButtonLink;
