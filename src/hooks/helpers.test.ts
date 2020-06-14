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

xdescribe("pickQuestion", () => {
  it("should return the 0.infinitive.french first", () => {
    const rankings: any = {};
    expect(pickQuestion(verbs, rankings)).toEqual({
      verbIndex: 0,
      conjugation: "infinitive",
      questionLanguage: "french",
      answerLanguage: "english",
    });
  });

  it("should return the 0.firstPersonSingular.french second", () => {
    const rankings: any = { a: { score: 1 } };
    expect(pickQuestion(verbs, rankings)).toEqual({
      verbIndex: 0,
      conjugation: "firstPersonSingular",
      questionLanguage: "french",
      answerLanguage: "english",
    });
  });

  it("should return the 0.secondPersonSingular.french third", () => {
    const rankings: any = { a: { score: 1 }, b: { score: 1 } };
    expect(pickQuestion(verbs, rankings)).toEqual({
      verbIndex: 0,
      conjugation: "secondPersonSingular",
      questionLanguage: "french",
      answerLanguage: "english",
    });
  });

  it("should return the 0.thirdPersonPlural.french seventh", () => {
    const rankings: any = {
      a: { score: 1 },
      b: { score: 1 },
      c: { score: 1 },
      d: { score: 1 },
      e: { score: 1 },
      f: { score: 1 },
    };
    expect(pickQuestion(verbs, rankings)).toEqual({
      verbIndex: 0,
      conjugation: "thirdPersonPlural",
      questionLanguage: "french",
      answerLanguage: "english",
    });
  });

  it("should return the 1.infinitive.french eighth if all scores are 2", () => {
    const rankings: any = {
      a: { score: 2 },
      b: { score: 2 },
      c: { score: 2 },
      d: { score: 2 },
      e: { score: 2 },
      f: { score: 2 },
      g: { score: 2 },
    };
    expect(pickQuestion(verbs, rankings)).toEqual({
      verbIndex: 1,
      conjugation: "infinitive",
      questionLanguage: "french",
      answerLanguage: "english",
    });
  });

  // it("should return the first verb in french then english", () => {
  //   const firstQuestions = [
  //     pickQuestion(verbs, rankings),
  //     pickQuestion(verbs, rankings),
  //     pickQuestion(verbs, rankings),
  //     pickQuestion(verbs, rankings),
  //     pickQuestion(verbs, rankings),
  //     pickQuestion(verbs, rankings),
  //     pickQuestion(verbs, rankings),

  //     pickQuestion(verbs, rankings),
  //     pickQuestion(verbs, rankings),
  //     pickQuestion(verbs, rankings),
  //     pickQuestion(verbs, rankings),
  //     pickQuestion(verbs, rankings),
  //     pickQuestion(verbs, rankings),
  //     pickQuestion(verbs, rankings),
  //   ];

  //   expect(firstQuestions).toEqual([
  //     {
  //       verbIndex: 0,
  //       conjugation: "infinitive",
  //       questionLanguage: "french",
  //       answerLanguage: "english",
  //     },
  //     {
  //       verbIndex: 0,
  //       conjugation: "firstPersonSingular",
  //       questionLanguage: "french",
  //       answerLanguage: "english",
  //     },
  //     {
  //       verbIndex: 0,
  //       conjugation: "secondPersonSingular",
  //       questionLanguage: "french",
  //       answerLanguage: "english",
  //     },
  //     {
  //       verbIndex: 0,
  //       conjugation: "thirdPersonSingular",
  //       questionLanguage: "french",
  //       answerLanguage: "english",
  //     },
  //     {
  //       verbIndex: 0,
  //       conjugation: "firstPersonPlural",
  //       questionLanguage: "french",
  //       answerLanguage: "english",
  //     },
  //     {
  //       verbIndex: 0,
  //       conjugation: "secondPersonPlural",
  //       questionLanguage: "french",
  //       answerLanguage: "english",
  //     },
  //     {
  //       verbIndex: 0,
  //       conjugation: "thirdPersonPlural",
  //       questionLanguage: "french",
  //       answerLanguage: "english",
  //     },

  //     {
  //       verbIndex: 0,
  //       conjugation: "infinitive",
  //       questionLanguage: "english",
  //       answerLanguage: "french",
  //     },
  //     {
  //       verbIndex: 0,
  //       conjugation: "firstPersonSingular",
  //       questionLanguage: "english",
  //       answerLanguage: "french",
  //     },
  //     {
  //       verbIndex: 0,
  //       conjugation: "secondPersonSingular",
  //       questionLanguage: "english",
  //       answerLanguage: "french",
  //     },
  //     {
  //       verbIndex: 0,
  //       conjugation: "thirdPersonSingular",
  //       questionLanguage: "english",
  //       answerLanguage: "french",
  //     },
  //     {
  //       verbIndex: 0,
  //       conjugation: "firstPersonPlural",
  //       questionLanguage: "english",
  //       answerLanguage: "french",
  //     },
  //     {
  //       verbIndex: 0,
  //       conjugation: "secondPersonPlural",
  //       questionLanguage: "english",
  //       answerLanguage: "french",
  //     },
  //     {
  //       verbIndex: 0,
  //       conjugation: "thirdPersonPlural",
  //       questionLanguage: "english",
  //       answerLanguage: "french",
  //     },
  //   ]);
  // });
});
