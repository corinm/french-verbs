import { isSame, pickQuestion } from "./helpers";
import { Verb, QuestionRankings } from "../types";

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

describe("pickQuestion", () => {
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

  it("should return the 0.secondPersonSingular.french second", () => {
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
