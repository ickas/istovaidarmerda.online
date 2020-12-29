import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonLink from "./index";

describe("src/components/button-link", () => {
  /**
   * @type {IButtonLinkProps}
   */
  let props;

  beforeEach(() => {
    props = {
      borderColor: "#4d352d",
      bgColor: "#946037",
      external: false,
      url: "https://twitter.com",
      label: "Follow on Twitter",
      value: "Twitter",
    };
  });

  describe("render", () => {
    it("should render without errors", () => {
      const component = render(
        <ButtonLink
          borderColor={props.borderColor}
          bgColor={props.bgColor}
          external={props.external}
          url={props.url}
          label={props.label}
          value={props.value}
        />,
      );

      expect(component).toMatchSnapshot();
    });

    it("should render an icon", () => {
      render(
        <ButtonLink
          borderColor={props.borderColor}
          bgColor={props.bgColor}
          external={props.external}
          url={props.url}
          label={props.label}
          value={props.value}
          icon="twitter"
        />,
      );

      const icon = screen.getByRole("presentation");

      expect(icon).toBeVisible();
    });

    it("should render an external icon", () => {
      render(
        <ButtonLink
          borderColor={props.borderColor}
          bgColor={props.bgColor}
          url={props.url}
          label={props.label}
          value={props.value}
          external
        />,
      );

      const icon = screen.getByRole("link");

      expect(icon).toHaveAttribute("rel", "noopener noreferrer");
    });
  });
});
