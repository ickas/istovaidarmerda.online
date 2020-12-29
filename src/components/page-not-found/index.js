import React from "react";
import * as Styles from "./styles";
import ButtonLink from "../button-link";

const NotFound = () => {
  const src = "/images/404/ivdm-404.png";
  const srcSet = `${src} 1x, /images/404/ivdm-404@2x.png 2x, /images/404/ivdm-404@3x.png 3x`;

  return (
    <Styles.Wrapper>
      <img src={src} srcSet={srcSet} width="300" height="239" alt="Logótipo do Isto Vai Dar Merda" loading="lazy" />
      <h2>Oh Sh!t</h2>
      <p>Não há aqui merda nenhuma!</p>
      <ButtonLink url="/" value="Quero saber coisas" label="Voltar à página inicial" />
    </Styles.Wrapper>
  );
};

export default NotFound;
