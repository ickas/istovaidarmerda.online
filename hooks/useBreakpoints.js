import { useState, useEffect } from "react";

/**
 * Custom Hook for use with media queries.
 *
 * @export
 * @param {string} query
 * @returns {boolean}
 */
export function useBreakpoints(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    /* istanbul ignore next  */
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export default useBreakpoints;
