import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockIntersectionObserver from "../../../../utils/mocks/mockIntersectionObserver";
import Schedule from "../index";
import Events from "../events";
import { agenda } from "../../../../utils/agenda";
import { rubrics } from "../../../../utils/rubrics";
import EVENTS_PROPS from "../mocks/events";
import Personas from "../personas";
import PERSONAS_MOCK from "../mocks/personas";

describe("src/components/schedule", () => {
  beforeEach(() => {
    window.IntersectionObserver = MockIntersectionObserver;
  });

  describe("<Schedule />", () => {
    it("should render without errors", () => {
      const component = render(<Schedule agenda={agenda} rubrics={rubrics} />);

      expect(component).toMatchSnapshot();
    });

    it("should not render an agenda if nil", () => {
      const component = render(<Schedule agenda={null} rubrics={rubrics} />);

      expect(component).toMatchSnapshot();
    });

    it("should not render the rubrics if nil", () => {
      const component = render(<Schedule agenda={agenda} rubrics={null} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe("<Events />", () => {
    /**
     * @type {IEventsProps}
     */
    let props;

    beforeEach(() => {
      props = {
        ...EVENTS_PROPS,
      };
    });

    it("should render a list of events", () => {
      const component = render(<Events events={props.events} type={props.type} />);

      expect(component).toMatchSnapshot();
    });

    it("should not render a list of events if nil", () => {
      const component = render(<Events events={null} type={props.type} />);

      expect(component).toMatchSnapshot();
    });

    it("should not render a list of events if string", () => {
      const component = render(<Events events="evento" type={props.type} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe("<Personas />", () => {
    /**
     * @type {IPersonasProps}
     */
    let props;

    beforeEach(() => {
      props = {
        ...PERSONAS_MOCK,
      };
    });

    it("should render a list of personas", () => {
      const component = render(<Personas values={props.values} />);

      expect(component).toMatchSnapshot();
    });

    it("should not render a list of personas if nil", () => {
      const component = render(<Personas values={null} />);

      expect(component).toMatchSnapshot();
    });
  });
});
