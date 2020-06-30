import { getVerb, isNounsPath, isVerbsPath } from ".";

import { Verb } from "../types";

const verbs: Verb[] = [
  {
    infinitive: { french: "aimer", english: "to like" },
    firstPersonSingular: {
      french: "aime",
      english: "like",
      concatenate: true,
    },
    secondPersonSingular: { french: "aimes", english: "like" },
    thirdPersonSingular: { french: "aime", english: "likes" },
    firstPersonPlural: { french: "aimons", english: "like" },
    secondPersonPlural: { french: "aimez", english: "like" },
    thirdPersonPlural: { french: "aiment", english: "like" },
  },
];

describe("getVerb", () => {
  it("should return 'j'aime' given 0|firstPersonSingular|french", () => {
    expect(getVerb(verbs, 0, "firstPersonSingular", "french")).toEqual(
      "j'aime"
    );
  });

  it("should return 'ils/elles aiment' given 0|thirdPersonPlural|french", () => {
    expect(getVerb(verbs, 0, "thirdPersonPlural", "french")).toEqual(
      "ils/elles aiment"
    );
  });
});

describe("isNounsPath", () => {
  it.each([
    [true, "/french-verbs/nouns"],
    [true, "/french-verbs/nouns/"],
    [true, "/french-verbs/nouns/test"],
    [true, "/french-verbs/nouns/list"],
    [true, "/french-verbs/nouns/answers"],
    [false, "/french-verbs/"],
    [false, "/french-verbs/verbs"],
    [false, "/french-verbs/verbs/test"],
  ])("should return %p given %s", (result, path) => {
    expect(isNounsPath(path)).toBe(result);
  });
});

describe("isVerbsPath", () => {
  it.each([
    [true, "/french-verbs/verbs"],
    [true, "/french-verbs/verbs/"],
    [true, "/french-verbs/verbs/test"],
    [true, "/french-verbs/verbs/list"],
    [true, "/french-verbs/verbs/answers"],
    [false, "/french-verbs/"],
    [false, "/french-verbs/nouns"],
    [false, "/french-verbs/nouns/test"],
  ])("should return %p given %s", (result, path) => {
    expect(isVerbsPath(path)).toBe(result);
  });
});
