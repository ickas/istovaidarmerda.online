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
 * Test suite for the Icon component
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */
import React from "react";
import Logger from "js-logger";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Icon from "./index";
import icons from "../../../utils/icons";

describe("src/components/icon", () => {
  /**
   * @type {import(".").IIconProps}
   */
  let props;

  beforeEach(() => {
    Logger.error = jest.fn();

    props = {
      icon: "twitter",
    };
  });

  afterEach(() => {
    Logger.error.mockRestore();
  });

  describe("render", () => {
    it("should render without errors", () => {
      const component = render(<Icon icon={props.icon} />);

      expect(component).toMatchSnapshot();
    });

    it("should render the default fill color", () => {
      render(<Icon icon={props.icon} />);

      const icon = screen.getByRole("presentation");
      const iconPath = icon.querySelector("path");

      expect(iconPath).toHaveAttribute("fill", "var(--light, #ffffff)");
    });

    it("should render a custom fill color", () => {
      const customProps = {
        ...props,
        fill: "var(--lightBrown, #946037)",
      };

      render(<Icon icon={customProps.icon} fill={customProps.fill} />);

      const icon = screen.getByRole("presentation");
      const iconPath = icon.querySelector("path");

      expect(iconPath).toHaveAttribute("fill", customProps.fill);
    });

    it("should render another icon", () => {
      /**
       * @type {import(".").IIconProps}
       */
      const customProps = {
        ...props,
        icon: "youtube",
      };

      render(<Icon icon={customProps.icon} />);

      const icon = screen.getByRole("presentation");
      const iconPath = icon.querySelector("path");

      expect(iconPath).toHaveAttribute("d", icons.youtube);
    });

    it("should throw an error if the icon is nil", () => {
      /**
       * @type {import(".").IIconProps}
       */
      const customProps = {
        ...props,
        icon: "instagram",
      };

      render(<Icon icon={customProps.icon} />);

      expect(Logger.error).toHaveBeenCalledTimes(1);
      expect(Logger.error).toHaveBeenCalledWith("components/icon.getPathToBeDrawn: ", "Please provide a valid icon");
    });
  });
});
