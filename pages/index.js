import styled from "styled-components";

const Main = styled.main`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.poop {
		font-size: 100px;
		line-height: 110%;
	}

	.title {
		font-weight: bold;
	}

	.soon {
		font-style: italic;
	}
`;

export default function Home() {
	return (
		<>
			<header className="header">
				<div className="header__left">
					<a href="#sobre" className="header__logo">
						<div className="header__logo">Logo</div>
					</a>
				</div>
				<div className="header__right">
					<nav className="header__navigation">
						<p>navigation</p>
					</nav>
				</div>
			</header>
			<Main className="layout__content">
				<span className="poop">💩</span>
				<span className="title">Isto vai dar merda</span>
				<span className="soon">Brevemente</span>
			</Main>
		</>
	);
}
