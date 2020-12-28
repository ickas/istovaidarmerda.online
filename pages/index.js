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
        <meta charset="utf-8" />
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
