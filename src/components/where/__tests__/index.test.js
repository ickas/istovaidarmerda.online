import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockIntersectionObserver from "../../../../utils/mocks/mockIntersectionObserver";
import Where from "../index";
import WHERE_PROPS from "../mocks/props";

describe("components/where", () => {
  /**
   * @type {IWhereProps}
   */
  let props;

  beforeEach(() => {
    window.IntersectionObserver = MockIntersectionObserver;
    props = {
      ...WHERE_PROPS,
    };
  });
  describe("<Where />r", () => {
    it("should render without errors", () => {
      const component = render(<Where twitter={props.twitter} youtube={props.youtube} />);

      expect(component).toMatchSnapshot();
    });
  });
});
