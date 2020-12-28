/**
 * The copyright of this file belongs to Feedzai. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system,
 * transmitted in any form, or by any means electronic, mechanical,
 * photocopying, or otherwise, without the prior permission of the owner.
 *
 * © 2020 Feedzai, Strictly Confidential
 */

/**
 * index.test
 *
 * Test suite for the MouseImage component
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MatchMediaMock from "jest-matchmedia-mock";
import MouseImage from "./index";

/**
 * Builds the Media Query Stub
 *
 * @param {MatchMediaMock} matchMedia
 */
function setupMediaQuery(matchMedia) {
  const mediaQuery = "(prefers-reduced-motion: no-preference)";
  const firstListener = jest.fn();
  const secondListener = jest.fn();
  const mediaQueryList = window.matchMedia(mediaQuery);

  mediaQueryList.addListener((ev) => ev.matches && firstListener());
  mediaQueryList.addListener((ev) => ev.matches && secondListener());

  matchMedia.useMediaQuery(mediaQuery);
}

describe("src/components/mouse-image", () => {
  /**
   * @type {{ className: string | undefined}}
   */
  let props;

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

  beforeEach(() => {
    props = {
      className: "mouse",
    };

    setupMediaQuery(matchMedia);
  });

  describe("render", () => {
    it("should render without errors", () => {
      const component = render(<MouseImage className={props.className} />);

      expect(component).toMatchSnapshot();
    });

    it("should render a custom classname", () => {
      const customClassname = "isto-vai-dar-merda";

      render(<MouseImage className={customClassname} />);

      const icon = screen.getByTestId("mouse-image");

      expect(icon).toHaveClass(customClassname);
    });
  });
});
