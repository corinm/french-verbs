import {
  isSame,
  determineCurrentVerb,
  determineCurrentConjugation,
} from "./helpers";

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

describe("determineCurrentVerb", () => {
  it.each([
    [0, 0],
    [0, 1],
    [0, 7],
    [1, 8],
    [1, 14],
    [2, 15],
    [2, 21],
    [3, 22],
    [3, 28],
  ])("should return %d given %d", (index, keysCount) => {
    expect(determineCurrentVerb(keysCount)).toEqual(index);
  });
});

describe("determineCurrentConjugation", () => {
  it.each([
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
    [0, 7],
    [1, 8],
    [2, 9],
    [3, 10],
    [4, 11],
    [5, 12],
    [6, 13],
    [0, 14],
    [0, 21],
    [6, 27],
  ])("should return %d given %d", (index, keysCount) => {
    expect(determineCurrentConjugation(keysCount)).toEqual(index);
  });
});
