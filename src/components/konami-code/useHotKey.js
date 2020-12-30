/* eslint-disable no-console */
import { useMemo, useEffect, useState } from "react";

/**
 * Takes in a sequence of hotKeys and creates a closure by returning
 * a function that will not only check if the key pressed is in the
 * correct order but will also reset back to the beginning if the
 * wrong key is pressed in sequence.
 *
 * @param {string[]} hotkeys
 */
export const createKeyChecker = (hotkeys = []) => {
  let index = 0;
  const TAIL = hotkeys.length - 1;

  /**
   * @param {string} key
   * @returns {boolean}
   */
  const cb = (key) => {
    if (key !== hotkeys[index]) {
      index = 0;
      return false;
    }

    if (index === TAIL) {
      index = 0;
      return true;
    }

    index += 1;

    return false;
  };

  return cb;
};

/**
 * Custom Hook that listens for a set of explicit key combinations
 *
 * @param {string[]} hotKeys
 * @param {() => void} onMatch
 */
function useHotKey(hotKeys, onMatch) {
  const [hasMatch, setHasMatch] = useState(false);
  const keyCrawler = useMemo(() => createKeyChecker([].concat(hotKeys)), [hotKeys]);

  /**
   * @param {KeyboardEvent} event
   */
  const listen = ({ key }) => {
    if (keyCrawler(key)) {
      setHasMatch(true);
      onMatch();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", listen);
    return () => window.removeEventListener("keydown", listen);
  });

  return hasMatch;
}

export default useHotKey;
