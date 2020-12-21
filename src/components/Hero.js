import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import ButtonLink from "./ButtonLink";
import MouseImage from "./MouseImage";

const Wrapper = styled.section`
	position: relative;
	background-color: var(--yellow);
	max-width: 100vw;
	width: 100%;
	min-height: 100vh;
	display: flex;

	.hero__container {
		margin: 0 auto;
		display: flex;
		align-items: center;
	}

	.mouse {
		position: absolute;
		bottom: 1rem;
		margin-left: 50%;
		transform: translateX(-50%);
	}
`;

const Logo = styled.figure`
	margin-right: ${rem("50px")};
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
	background-color: var(--yellow);

	.hero__title {
		font-size: ${rem("64px")};
		text-transform: uppercase;
		color: var(--lightBrown);
	}

	.hero__description {
		max-width: ${rem("600px")};
		line-height: var(--lineHeight);
	}

	svg {
		display: block;
		margin-bottom: ${rem("-15px")};
		width: ${rem("500px")};
		height: auto;

		text {
			font-size: ${rem("64px")};
			font-weight: var(--fontBlack);
			text-transform: uppercase;
			line-height: ${rem("64px")};
			stroke: var(--default);
			stroke-width: ${rem("2px")};
			fill: transparent;
		}
	}
`;

const CallToAction = styled.div`
	margin-top: ${rem("50px")};
	display: flex;

	a {
		min-width: ${rem("200px")};

		&:not(:last-child) {
			margin-right: ${rem("10px")};
		}

		&:hover,
		&:focus {
			background-color: var(--darkBrown);
		}
	}
`;

const Hero = () => (
	<Wrapper className="hero" data-testid="hero">
		<div className="hero__container">
			<Logo>
				<img src="/images/ivdm-logo.svg" width={271} height={300} alt="Isto Vai Dar Merda logo" />
			</Logo>
			<Intro>
				<h1 className="hero__title" aria-label="Isto Vai Dar Merda" data-testid="hero-title">
					<svg xmlns="http://www.w3.org/2000/svg" width={498} height={85}>
						<text x={0} y={65}>
							Isto Vai Dar
						</text>
					</svg>
					Merda
				</h1>
				<p className="hero__description" data-testid="hero-description">
					O <i>Isto Vai Dar Merda</i> é um evento que materializa a máxima “quem avisa, amigo é”, pensado para abordar
					temas que estão no “tipping point” de dar merda mas que ainda podem ser salvos de tão triste fado.
				</p>
				<CallToAction className="hero__call-to-action">
					<ButtonLink url="/#schedule" value="Agenda" label="Consulta a Agenda" />
					<ButtonLink url="/#hein" value="Hein?!" label="Sabe mais sobre o evento" />
				</CallToAction>
			</Intro>
		</div>

		<MouseImage className="mouse" />
	</Wrapper>
);

export default Hero;
