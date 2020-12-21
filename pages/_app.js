/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
// eslint-disable-next-line import/no-unresolved
import SkipLinks from "components/skip-link";
import "../styles/global.css";

const items = [
	{
		target: "#schedule",
		text: "Ir para a secção Agenda",
	},
	{
		target: "#where",
		text: "Ir para a secção Onde",
	},
	{
		target: "#hein",
		text: "Ir para a secção Sobre",
	},
];

function IstoVaiDarMerdApp({ Component, pageProps }) {
	return (
		<>
			<SkipLinks items={items} />
			<main>
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default IstoVaiDarMerdApp;
