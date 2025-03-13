import { types } from "../../../src/Auth/types/types";

describe("testing in types", () => {
  test("debe llamar los types ", () => {
    expect(types).toEqual({ login: "[Auth]login", logout: "[Auth]logout" });
  });
});
