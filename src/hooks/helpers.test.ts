import { isSame } from "./helpers";

describe("isSame", () => {
  it("should return true given 'tu vas' and 'tu vas'", () => {
    expect(isSame("tu vas", "tu vas")).toBe(true);
  });

  it("should return false given 'tu vas' and 'tu vais'", () => {
    expect(isSame("tu vas", "tu vais")).toBe(false);
  });

  it("should remove (p) from the answer", () => {
    expect(isSame("you go", "you (p) go")).toBe(true);
  });
});
