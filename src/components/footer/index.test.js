import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./index";

describe("components/footer", () => {
  describe("render", () => {
    it("should render without errors", () => {
      const component = render(<Footer />);

      expect(component).toMatchSnapshot();
    });
  });
});
