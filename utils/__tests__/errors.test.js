import { throwError } from "../errors";

describe("helpers/errors", () => {
  describe("throwError", () => {
    test("should thrown an Error", () => {
      expect(() => throwError("helpers", "throwError", "This throws errors.")).toThrow(
        "helpers.throwError: This throws errors.",
      );
    });
  });
});
