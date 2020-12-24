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
import MouseImage from "./index";

describe("src/components/mouse-image", () => {
  /**
   * @type {{ className: string | undefined}}
   */
  let props;

  beforeEach(() => {
    props = {
      className: "mouse",
    };
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
