import {
  isSame,
  pickQuestion,
  determineCurrentVerb,
  determineCurrentConjugation,
  allRankingsAboveOne,
} from "./helpers";
import { Verb } from "../types";

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

const verbs: Verb[] = [
  {
    infinitive: { french: "aimer", english: "to like" },
    firstPersonSingular: { french: "aime", english: "like", concatenate: true },
    secondPersonSingular: { french: "aimes", english: "like" },
    thirdPersonSingular: { french: "aime", english: "likes" },
    firstPersonPlural: { french: "aimons", english: "like" },
    secondPersonPlural: { french: "aimez", english: "like" },
    thirdPersonPlural: { french: "aiment", english: "like" },
  },
  {
    infinitive: { french: "avoir", english: "to have" },
    firstPersonSingular: { french: "ai", english: "have", concatenate: true },
    secondPersonSingular: { french: "as", english: "have" },
    thirdPersonSingular: { french: "a", english: "has" },
    firstPersonPlural: { french: "avons", english: "have" },
    secondPersonPlural: { french: "avez", english: "have" },
    thirdPersonPlural: { french: "ont", english: "have" },
  },
];

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

describe("allRankingsAboveOne", () => {
  const allTwo: any = { a: { score: 2 } };
  const oneOne: any = { a: { score: 2 }, b: { score: 1 } };

  it.each([
    [true, allTwo],
    [false, oneOne],
  ])("should return %p given %o", (output, ranking) => {
    expect(allRankingsAboveOne(ranking)).toEqual(output);
  });
});
