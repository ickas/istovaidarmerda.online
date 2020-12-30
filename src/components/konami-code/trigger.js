/* eslint-disable no-console */
import React, { useEffect, useContext, useState } from "react";
import useSound from "use-sound";
import KonamiContext from "./context";
import useHotKey from "./useHotKey";

const sequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const KonamiTrigger = () => {
  const [play] = useSound("/sounds/unlocked.mp3");
  const [keysPressed, setKeysPress] = useState(false);
  const { hasEasterEgg, setEasterEgg } = useContext(KonamiContext);

  useEffect(() => {
    /* istanbul ignore else  */
    if (!keysPressed && !hasEasterEgg) {
      console.log(
        "%cAndamos a cuscar o site, não é? Escreve o Konami Code no ecrã! 😉",
        "color: white; background: #4d352d; font-family:monospace; font-size: 20px",
      );
    }
  }, []);

  /**
   * Callback triggered when the user has pressed
   * @param {boolean} status
   * @returns {void}
   */
  function onUnlock(status) {
    setKeysPress(status);
    play();
    console.log(
      "%cUau! Aqui está um truque de 💩!",
      "color: white; background: #4d352d; font-family:monospace; font-size: 20px",
    );

    setEasterEgg();
  }
  useHotKey(sequence, () => onUnlock(true));

  return <div className="sr-only" data-testid="konami-code-trigger" data-unlocked={keysPressed} />;
};

export default KonamiTrigger;
