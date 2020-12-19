/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import Head from "next/head";
import "../styles/styles.scss";

function IstoVaiDarMerdApp({ Component, pageProps }) {
	return (
		<div className="layout__page">
			<Head>
				<title>Isto vai dar merda 💩</title>
				<meta name="robots" content="noindex, nofollow" />
				<meta key="description" name="description" content="" />
				<meta key="keywords" name="keywords" content="" />
			</Head>
			<Component {...pageProps} />
		</div>
	);
}

export default IstoVaiDarMerdApp;
