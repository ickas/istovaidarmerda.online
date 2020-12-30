import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RouterContext } from "next/dist/next-server/lib/router-context";

/**
 * @type {import("next/dist/next-server/lib/router/router").NextRouterr}
 */
export const mockRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn().mockResolvedValue(true),
  replace: jest.fn().mockResolvedValue(true),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};

/**
 *
 * @param {React.ReactElement} component
 * @returns {import("@testing-library/react").RenderResult}
 */
export const renderWithRouter = (component) =>
  render(<RouterContext.Provider value={mockRouter}>{component}</RouterContext.Provider>);
