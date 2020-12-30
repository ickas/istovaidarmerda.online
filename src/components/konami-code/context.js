/* istanbul ignore file */
import { createContext } from "react";

export const DEFAULT_EASTER_EGG = {
  hasEasterEgg: false,
};

export const DEFAULT_EASTER_EGG_CONTEXT = {
  ...DEFAULT_EASTER_EGG,
  setEasterEgg: () => {},
};

const KonamiContext = createContext(DEFAULT_EASTER_EGG_CONTEXT);

export default KonamiContext;
