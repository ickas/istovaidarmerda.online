/* eslint-disable no-console */
import React from "react";
import { render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import KonamiTrigger from "../trigger";
import { renderWithRouter } from "../../../../utils/renderWithRouter";
import KonamiProvider from "..";

describe("src/components/konami-code/__tests__/trigger", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it("should log a message on start", () => {
    const component = render(<KonamiTrigger />);

    expect(component).toMatchSnapshot();
    expect(console.log).toHaveBeenCalled();
  });

  it("should log when it has easter egg", () => {
    renderWithRouter(
      <KonamiProvider>
        <KonamiTrigger />
      </KonamiProvider>,
    );

    act(() => {
      userEvent.type(
        document.body,
        "{arrowup}{arrowup}{arrowdown}{arrowdown}{arrowleft}{arrowright}{arrowleft}{arrowright}ba",
      );
    });

    expect(console.log).toHaveBeenCalled();
  });
});
