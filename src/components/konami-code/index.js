import React, { useState } from "react";
import { arrayOf, node, oneOfType } from "prop-types";
import KonamiContext, { DEFAULT_EASTER_EGG } from "./context";

export const CHILDREN = oneOfType([arrayOf(node), node]);

/**
 * Konami Code Provider
 *
 * @param {IKonamiProviderProps} props
 * @returns {JSX.Element}
 */
const KonamiProvider = ({ children }) => {
  const [hasEasterEgg, setHasEasterEgg] = useState(DEFAULT_EASTER_EGG.hasEasterEgg);

  const values = {
    hasEasterEgg,
    setEasterEgg: () => setHasEasterEgg(!hasEasterEgg),
  };

  return <KonamiContext.Provider value={values}>{children}</KonamiContext.Provider>;
};

KonamiProvider.propTypes = {
  children: CHILDREN.isRequired,
};

export default KonamiProvider;
