import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockIntersectionObserver from "../../../utils/mocks/mockIntersectionObserver";
import Hein from "./index";

describe("components/hein", () => {
  beforeEach(() => {
    window.IntersectionObserver = MockIntersectionObserver;
  });

  describe("render", () => {
    it("should render without errors", () => {
      const component = render(<Hein />);

      expect(component).toMatchSnapshot();
    });
  });
});
