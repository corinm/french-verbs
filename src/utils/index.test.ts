import { getVerb } from ".";

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
