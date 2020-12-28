import useBreakpoints from "../useBreakpoints";
import { renderHook } from "@testing-library/react-hooks";
import { MOUSE_BREAKPOINT, WIDTH_BREAKPOINT } from "../../src/components/hero/index";
import MatchMediaMock from "jest-matchmedia-mock";

/**
 * Builds the Media Query Stub
 *
 * @param {string} widthQuery
 * @param {MatchMediaMock} matchMedia
 */
function setupMediaQuery(widthQuery = WIDTH_BREAKPOINT, matchMedia) {
  const mediaQuery = widthQuery;
  const firstListener = jest.fn();
  const secondListener = jest.fn();
  const mediaQueryList = window.matchMedia(mediaQuery);

  mediaQueryList.addListener((ev) => ev.matches && firstListener());
  mediaQueryList.addListener((ev) => ev.matches && secondListener());

  matchMedia.useMediaQuery(mediaQuery);
}

describe("hooks/__tests__/useBreakpoints", () => {
  /**
   * @type {MatchMediaMock}
   */
  let matchMedia;

  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  describe("render", () => {
    it("should render without errors", () => {
      setupMediaQuery(WIDTH_BREAKPOINT, matchMedia);

      const { result } = renderHook(() => useBreakpoints(WIDTH_BREAKPOINT));

      expect(result.current).toBe(true);
    });

    it("should return false when it does not match", () => {
      setupMediaQuery(WIDTH_BREAKPOINT, matchMedia);

      const { result } = renderHook(() => useBreakpoints(MOUSE_BREAKPOINT));

      expect(result.current).toBe(false);
    });

    it("should return a different value depending on its match", () => {
      setupMediaQuery(WIDTH_BREAKPOINT, matchMedia);

      const firstRender = renderHook(() => useBreakpoints(WIDTH_BREAKPOINT));

      expect(firstRender.result.current).toBe(true);

      setupMediaQuery(MOUSE_BREAKPOINT, matchMedia);

      const secondRender = renderHook(() => useBreakpoints(WIDTH_BREAKPOINT));
      expect(secondRender.result.current).toBe(false);
    });
  });
});
