/**
 * The copyright of this file belongs to Feedzai. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system,
 * transmitted in any form, or by any means electronic, mechanical,
 * photocopying, or otherwise, without the prior permission of the owner.
 *
 * © 2020 Feedzai, Strictly Confidential
 */

/**
 * useHotKey.test
 *
 * Test suite for the useHotKey component
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */
import { renderHook } from "@testing-library/react-hooks";
import TestRenderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import useHotKey, { createKeyChecker } from "../useHotKey";

const sequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

describe("src/components/konami-code/__tests__/useHotKey", () => {
  it("should return false by default", () => {
    const { result } = renderHook(() => useHotKey(sequence, () => {}));

    expect(result.current).toBeFalsy();
  });

  it("should return true if has match", () => {
    const mockOnMatch = jest.fn();
    const { result } = renderHook(() => useHotKey(sequence, mockOnMatch));

    TestRenderer.act(() => {
      userEvent.type(
        document.body,
        "{arrowup}{arrowup}{arrowdown}{arrowdown}{arrowleft}{arrowright}{arrowleft}{arrowright}ba",
      );
    });

    expect(result.current).toBeTruthy();
    expect(mockOnMatch).toHaveBeenCalled();
  });

  describe("createKeyChecker", () => {
    it("should return false by default", () => {
      const keyCrawler = createKeyChecker();

      expect(keyCrawler("b")).toBe(false);
    });

    it("should return false if the key does not match", () => {
      const keyCrawler = createKeyChecker([].concat());

      expect(keyCrawler("r")).toBe(false);
    });
  });
});
