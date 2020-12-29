import SiteHead from "components/head";
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
      <SiteHead
        title="Isto Vai Dar Merda – na Pandemia"
        description="Criado com o intuito de fornecer um espaço onde os assuntos mais prementes possam ser discutidos de forma mais aberta, honesta e sem pressões."
      />
      <Hero />
      <Schedule agenda={agenda} rubrics={rubrics} />
      <Where twitter="https://twitter.com/IstoVai" youtube="https://www.youtube.com/channel/UC-M0MHRa0CNewKhjCz4c2Qg" />
      <Hein />
      <Partners partners={partners} />
      <Footer />
    </>
  );
}
