import React from "react";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import * as Styles from "./styles";

const Hein = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  const classes = classNames("hein", {
    "is-visible": inView,
  });

  return (
    <Styles.Wrapper id="hein" ref={ref} className={classes}>
      <div className="hein__content">
        <div className="hein__column">
          <h2>O quê?</h2>
          <p>
            O <i>Isto Vai Dar Merda</i> é um evento que materializa a máxima “quem avisa, amigo é”, pensado para abordar
            temas que estão no “tipping point” de dar merda mas que ainda podem ser salvos de tão triste fado.
          </p>
          <p>
            O <i>Isto Vai Dar Merda</i> quer ir directo ao assunto – sem rodeios, sem paninhos quentes, sem merdas.
          </p>
          <p>
            Na sua primeira edição, realizada exclusivamente no Twitter, o tema é <i>Isto Vai Dar Merda</i> – na
            Pandemia. São 8 temas em discussão por 8 painéis de convidados – desde profissionais de saúde a economistas,
            músicos e políticos.
          </p>
          <p>A Pandemia vista por dentro e por fora – sem lentes cor-de-rosa.</p>
        </div>
        <div className="hein__column">
          <h2>Porquê?</h2>
          <p>
            Faz falta um espaço em que se possa falar sobre assuntos no que estão a dar de errado, pavimentando o
            caminho para salvaguardar que dêem, de facto, merda.
          </p>
          <p>
            Faz falta um espaço onde se possa fazer barulho, onde as opiniões não serão suavizadas, onde os conselhos e
            avisos não serão contritos ou dados com um sorriso para não ofender.
          </p>
          <p>
            Faz falta permitir que a crueza e realidade do que têm para dizer seja não apenas aceite, como celebrada.
          </p>
          <p>
            Faz falta um espaço onde o desconforto é visto como útil, onde a verdade venha directamente da boca de quem
            a vive – sem rodeios, sem paninhos quentes, sem merdas.
          </p>
          <p>
            O <i>Isto Vai Dar Merda</i> – na Pandemia pretende amplificar vozes que merecem mais atenção, partilhar
            perspectivas que têm de ser abordadas, e repor verdades que nunca deviam ter sido sequer questionadas.
          </p>
        </div>
      </div>
    </Styles.Wrapper>
  );
};

export default Hein;
