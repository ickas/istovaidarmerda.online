import styled from "styled-components";
import { rem } from "polished";

export const Wrapper = styled.section`
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

export const Logo = styled.figure`
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

export const Intro = styled.div`
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

export const CallToAction = styled.div`
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
