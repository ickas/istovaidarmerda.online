import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Partners from "../index";
import PARTNERS_PROPS from "../mocks/partners";
import Partner from "../partner";

describe("components/partners", () => {
  /**
   * @type {IPartnersProps}
   */
  let props;

  beforeEach(() => {
    props = {
      partners: PARTNERS_PROPS,
    };
  });
  describe("<Partners />r", () => {
    it("should render without errors", () => {
      const component = render(<Partners partners={props.partners} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe("<Partner />r", () => {
    it("should render without errors", () => {
      const data = props.partners[1];
      const component = render(<Partner bg={data.bg} logo={data.logo} name={data.name} url={data.url} />);

      expect(component).toMatchSnapshot();
    });
  });
});
