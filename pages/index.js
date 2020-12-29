import Head from "next/head";
import Hero from "components/hero";
import Schedule from "components/schedule";
import Where from "components/where";
import Hein from "components/hein";
import Partners from "components/partners";
import Footer from "components/footer";
import { agenda } from "../utils/agenda";
import { rubrics } from "../utils/rubrics";
import { partners } from "../utils/partners";

/**
 * Home Page
 *
 * @returns {JSX.Element}
 */
export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Isto Vai Dar Merda – na Pandemia</title>
        <meta
          key="description"
          name="description"
          content="Criado com o intuito de fornecer um espaço onde os assuntos mais prementes possam ser discutidos de forma mais aberta, honesta e sem pressões."
        />
        <meta key="keywords" name="keywords" content="pandemia, covid, conferência, evento online" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://istovaidarmerda.online" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Isto Vai Dar Merda – na Pandemia" />
        <meta
          property="og:description"
          content="Criado com o intuito de fornecer um espaço onde os assuntos mais prementes possam ser discutidos de forma mais aberta, honesta e sem pressões."
        />
        <meta property="og:image" content="/images/ivdm-preview.png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="672" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IstoVai" />
        <meta name="twitter:title" content="Isto Vai Dar Merda – na Pandemia" />
        <meta
          key="twitter:description"
          name="twitter:description"
          content="Criado com o intuito de fornecer um espaço onde os assuntos mais prementes possam ser discutidos de forma mais aberta, honesta e sem pressões."
        />
        <meta name="twitter:image" content="/images/ivdm-preview.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="shortcut icon" type="image/jpg" href="/images/favicon/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Hero />
      <Schedule agenda={agenda} rubrics={rubrics} />
      <Where twitter="https://twitter.com/IstoVai" youtube="https://www.youtube.com/channel/UC-M0MHRa0CNewKhjCz4c2Qg" />
      <Hein />
      <Partners partners={partners} />
      <Footer />
    </>
  );
}
