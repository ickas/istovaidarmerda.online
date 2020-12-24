import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MatchMediaMock from "jest-matchmedia-mock";
import Hero, { MOUSE_BREAKPOINT, WIDTH_BREAKPOINT } from "./index";
import MockIntersectionObserver from "../../../utils/mocks/mockIntersectionObserver";

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

describe("src/components/hero", () => {
  /**
   * @type {MatchMediaMock}
   */
  let matchMedia;

  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  beforeEach(() => {
    window.IntersectionObserver = MockIntersectionObserver;
  });

  afterEach(() => {
    matchMedia.clear();
  });
  describe("render", () => {
    it("should render without errors", () => {
      setupMediaQuery(WIDTH_BREAKPOINT, matchMedia);
      const component = render(<Hero />);

      expect(component).toMatchSnapshot();
    });

    it("should render a mouse icon", () => {
      setupMediaQuery(MOUSE_BREAKPOINT, matchMedia);

      const component = render(<Hero />);

      expect(component).toMatchSnapshot();
    });
  });
});
