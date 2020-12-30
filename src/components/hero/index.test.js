import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import MatchMediaMock from "jest-matchmedia-mock";
import Hero, { MOUSE_BREAKPOINT, WIDTH_BREAKPOINT } from "./index";
import KonamiProvider from "../konami-code";
import KonamiTrigger from "../konami-code/trigger";
import { renderWithRouter } from "../../../utils/renderWithRouter";

/**
 * Builds the Media Query Stub
 *
 * @param {string} widthQuery
 * @param {MatchMediaMock} matchMedia
 */
function setupMediaQuery(widthQuery = WIDTH_BREAKPOINT, matchMedia) {
  const mediaQuery = widthQuery;
  const firstListener = jest.fn();
  const secondListener = jest.fn();
  const mediaQueryList = window.matchMedia(mediaQuery);

  mediaQueryList.addListener((ev) => ev.matches && firstListener());
  mediaQueryList.addListener((ev) => ev.matches && secondListener());

  matchMedia.useMediaQuery(mediaQuery);
}

describe("src/components/hero", () => {
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

  it("should render without errors", () => {
    const component = render(<Hero />);

    expect(component).toMatchSnapshot();
  });

  it("should render a mouse icon", () => {
    setupMediaQuery(MOUSE_BREAKPOINT, matchMedia);

    const component = render(<Hero />);

    expect(component).toMatchSnapshot();
  });

  it("should not play the song when the user hasn't unlocked", () => {
    const playMock = jest.fn();
    act(() => {
      renderWithRouter(
        <KonamiProvider>
          <KonamiTrigger />
          <Hero onPlaySound={playMock} />
        </KonamiProvider>,
      );
    });

    userEvent.click(screen.getByLabelText("Consulta a Agenda"));

    expect(playMock).not.toHaveBeenCalled();
  });

  it("should be able to play the easter egg", () => {
    const playMock = jest.fn();
    act(() => {
      renderWithRouter(
        <KonamiProvider>
          <KonamiTrigger />
          <Hero onPlaySound={playMock} />
        </KonamiProvider>,
      );
    });

    const wrapper = screen.getByTestId("hero");

    act(() => {
      userEvent.type(
        wrapper,
        "{arrowup}{arrowup}{arrowdown}{arrowdown}{arrowleft}{arrowright}{arrowleft}{arrowright}ba",
      );
    });
    userEvent.click(screen.getByLabelText("Consulta a Agenda"));

    expect(playMock).toHaveBeenCalled();
  });

  it("should not call the onPlaySound callback if undefined", () => {
    const playMock = jest.fn();
    act(() => {
      renderWithRouter(
        <KonamiProvider>
          <KonamiTrigger />
          <Hero onPlaySound={null} />
        </KonamiProvider>,
      );
    });

    const wrapper = screen.getByTestId("hero");

    act(() => {
      userEvent.type(
        wrapper,
        "{arrowup}{arrowup}{arrowdown}{arrowdown}{arrowleft}{arrowright}{arrowleft}{arrowright}ba",
      );
    });
    userEvent.click(screen.getByLabelText("Consulta a Agenda"));

    expect(playMock).not.toHaveBeenCalled();
  });
});
