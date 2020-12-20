import React from "react";
import styled from "styled-components";

import ButtonLink from "./ButtonLink";
import MouseImage from "./MouseImage";

const Wrapper = styled.section`
	position: relative;
	background-color: var(--yellow);
	width: 100vw;
	min-height: 100vh;
	display: flex;

	> div {
		margin: 0 auto;
		display: flex;
		align-items: center;
	}

	.mouse {
		position: absolute;
		bottom: 15px;
		margin-left: 50%;
		transform: translateX(-50%);
	}
`;

const Logo = styled.div`
	margin-right: 50px;
	height: 100%;
	display: flex;
	align-items: center;

	img {
		margin-top: -325px;
		width: auto;
		height: 300px;
	}
`;

const Intro = styled.div`
	h1 {
		font-size: 4rem;
		text-transform: uppercase;
		color: var(--lightBrown);
	}

	p {
		max-width: 600px;
		line-height: var(--lineHeight);
	}

	svg {
		display: block;
		margin-bottom: -15px;
		width: 500px;
		height: auto;

		text {
			font-size: 4rem;
			font-weight: var(--fontBlack);
			text-transform: uppercase;
			line-height: 4rem;
			stroke: var(--default);
			stroke-width: 2px;
			fill: transparent;
		}
	}
`;

const CallToAction = styled.div`
	margin-top: 50px;
	display: flex;

	a {
		min-width: 200px;

		&:not(:last-child) {
			margin-right: 10px;
		}

		&:hover {
			background-color: var(--darkBrown);
		}
	}
`;

const Hero = () => (
	<Wrapper>
		<div>
			<Logo>
				<img src={"/images/ivdm-logo.svg"} alt={"Isto Vai Dar Merda logo"} />
			</Logo>
			<Intro>
				<h1>
					<svg xmlns="http://www.w3.org/2000/svg" width={498} height={85}>
						<text x={0} y={65}>
							Isto Vai Dar
						</text>
					</svg>
					Merda
				</h1>
				<p>
					O <i>Isto Vai Dar Merda</i> é um evento que materializa a máxima “quem avisa, amigo é”, pensado para abordar
					temas que estão no “tipping point” de dar merda mas que ainda podem ser salvos de tão triste fado.
				</p>
				<CallToAction>
					<ButtonLink url="#schedule" value="Agenda" />
					<ButtonLink url="#hein" value="Hein?!" />
				</CallToAction>
			</Intro>
		</div>

		<MouseImage className="mouse" />
	</Wrapper>
);

export default Hero;
