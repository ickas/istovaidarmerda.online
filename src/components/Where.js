import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ButtonLink from "./ButtonLink";

const Wrapper = styled.section`
	background-color: var(--yellow);
	background-image: url("images/poop-pattern.svg");
	background-repeat: repeat;
	background-position: center;
	padding: 100px;

	> div {
		margin: 0 auto;
		border-radius: 50px;
		background-color: var(--light);
		max-width: 1000px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 50px;
		text-align: center;
		box-shadow: 0 0 50px rgba(33, 33, 33, 0.25);

		p {
			max-width: 600px;
		}
	}
`;

const CallToAction = styled.div`
	margin-top: 50px;
	display: flex;

	a {
		min-width: 200px;

		&.twitter:hover {
			background-color: #1565c0;
		}

		&.youtube:hover {
			background-color: #c62828;
		}

		&:not(:last-child) {
			margin-right: 10px;
		}

		&:hover {
			background-color: var(--darkBrown);
		}
	}
`;

const Where = ({ twitter, youtube }) => (
	<Wrapper>
		<div>
			<h2>Onde?</h2>
			<p>
				O <i>Isto Vai Dar Merda</i> decorrerá exclusivamente na rede social <strong>Twitter</strong>, com excepção da
				transmissão das sessões online que serão também disponibilizadas no canal <strong>YouTube</strong> do evento.
			</p>
			<p>#istovaidarmerda #ivdm #istovaidarfoto #istovaidardicatech #istovaidarvinho #istovaidarrabisco</p>
			<CallToAction>
				<ButtonLink
					className={"twitter"}
					borderColor={"#1565C0"}
					bgColor={"#1D8EEF"}
					url={twitter}
					icon={"twitter"}
					value="Twitter"
					target="_blank"
				/>
				<ButtonLink
					className={"youtube"}
					borderColor={"#C62828"}
					bgColor={"#FC0007"}
					url={youtube}
					icon={"youtube"}
					value="YouTube"
					target="_blank"
				/>
			</CallToAction>
		</div>
	</Wrapper>
);

Where.propTypes = {
	twitter: PropTypes.string.isRequired,
	youtube: PropTypes.string.isRequired,
};

export default Where;
