import { getVerbTextWithPronoun } from ".";

import { Verb, Meta } from "../types";

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

describe("getVerbTextWithPronoun", () => {
  it("should return 'j'aime' given 0|firstPersonSingular|french", () => {
    const meta: Meta = {
      verbIndex: 0,
      conjugation: "firstPersonSingular",
      questionLanguage: "french",
      answerLanguage: "english",
    };

    expect(getVerbTextWithPronoun(verbs, meta)).toEqual("j'aime");
  });

  it("should return 'ils/elles aiment' given 0|thirdPersonPlural|french", () => {
    const meta: Meta = {
      verbIndex: 0,
      conjugation: "thirdPersonPlural",
      questionLanguage: "french",
      answerLanguage: "english",
    };

    expect(getVerbTextWithPronoun(verbs, meta)).toEqual("ils/elles aiment");
  });
});
