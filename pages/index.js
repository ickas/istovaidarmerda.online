import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

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
		<Container>
			<Head>
				<title>Isto vai dar merda 💩</title>
				<meta name="robots" content="noindex, nofollow" />
				<meta key="description" name="description" content="" />
				<meta key="keywords" name="keywords" content="" />
			</Head>

			<Main>
				<span className="poop">💩</span>
				<span className="title">Isto vai dar merda</span>
				<span className="soon">Brevemente</span>
			</Main>
		</Container>
	);
}
