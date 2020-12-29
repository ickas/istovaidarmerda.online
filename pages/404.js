import React from "react";
import SiteHead from "components/head";
import NotFound from "components/page-not-found";

export default function PageNotFound() {
  return (
    <>
      <SiteHead
        title="Isto Deu Mesmo Merda"
        description="Criado com o intuito de fornecer um espaço onde os assuntos mais prementes possam ser discutidos de forma mais aberta, honesta e sem pressões."
      />
      <NotFound />
    </>
  );
}
