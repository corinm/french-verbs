import { renderHook, act } from "@testing-library/react-hooks";
import seedrandom from "seedrandom";

import { Verb } from "../types";
import useGenerateQuestions from "./useGenerateQuestions";

describe("useGenerateQuestions", () => {
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

  it("should ask a full verb once in a random order if all answers correct", () => {
    const rng = seedrandom("abc");
    const { result } = renderHook(() => useGenerateQuestions(verbs, 0, rng));
    const questionsAsked = [];

    for (let i = 0; i < 14; i++) {
      questionsAsked.push(result.current.question); // 1 - 14
      act(() => result.current.recordOutcome(true));
    }

    expect(questionsAsked).toHaveLength(14);
    expect(questionsAsked).toEqual([
      "he/she likes",
      "I like",
      "you like",
      "ils/elles aiment",
      "il/elle aime",
      "tu aimes",
      "to like",
      "you (p) like",
      "nous aimons",
      "they like",
      "j'aime",
      "aimer",
      "vous aimez",
      "we like",
    ]);
  });

  it("should ask a full verb once if all answers were incorrect", () => {
    const rng = seedrandom("abc");
    const { result } = renderHook(() => useGenerateQuestions(verbs, 0, rng));
    const questionsAsked = [];

    for (let i = 0; i < 14; i++) {
      questionsAsked.push(result.current.question); // 1 - 14
      act(() => result.current.recordOutcome(false));
    }

    expect(questionsAsked).toHaveLength(14);
    expect(questionsAsked).toEqual([
      "he/she likes",
      "I like",
      "you like",
      "ils/elles aiment",
      "il/elle aime",
      "tu aimes",
      "to like",
      "you (p) like",
      "nous aimons",
      "they like",
      "j'aime",
      "aimer",
      "vous aimez",
      "we like",
    ]);
  });

  it("should ask a full verb once, then any that were wrong", () => {
    const rng = seedrandom("abc");
    const { result } = renderHook(() => useGenerateQuestions(verbs, 0, rng));
    const questionsAsked = [];

    for (let i = 0; i < 14 + 2; i++) {
      questionsAsked.push(result.current.question);

      if (i === 2 || i === 3) {
        act(() => result.current.recordOutcome(false));
      } else {
        act(() => result.current.recordOutcome(true));
      }
    }

    expect(questionsAsked).toHaveLength(16);
    expect(questionsAsked).toEqual([
      "he/she likes",
      "I like",
      "you like",
      "ils/elles aiment",
      "il/elle aime",
      "tu aimes",
      "to like",
      "you (p) like",
      "nous aimons",
      "they like",
      "j'aime",
      "aimer",
      "vous aimez",
      "we like",

      // Wrong
      "ils/elles aiment",
      "you like",
    ]);
  });

  it("should ask a full verb twice if all were correct", () => {
    // Actual:  10 8 8 6 3   2 4 5 2 4   1 0 0 0 10   2 2 9 9 6   3 5 0 4 1   1 0 0
    const rng = seedrandom("abc");

    const { result } = renderHook(() => useGenerateQuestions(verbs, 0, rng));
    const questionsAsked = [];

    for (let i = 0; i < 14; i++) {
      questionsAsked.push(result.current.question); // 1 - 14
      act(() => result.current.recordOutcome(true));
    }

    for (let i = 0; i < 14; i++) {
      questionsAsked.push(result.current.question); // 1 - 14
      act(() => result.current.recordOutcome(true));
    }

    expect(questionsAsked).toHaveLength(28);
    expect(questionsAsked).toEqual([
      "he/she likes",
      "I like",
      "you like",
      "ils/elles aiment",
      "il/elle aime",
      "tu aimes",
      "to like",
      "you (p) like",
      "nous aimons",
      "they like",
      "j'aime",
      "aimer",
      "vous aimez",
      "we like",

      // Double check
      "j'aime",
      "you like",
      "ils/elles aiment",
      "vous aimez",
      "we like",
      "nous aimons",
      "tu aimes",
      "they like",
      "he/she likes",
      "aimer",
      "il/elle aime",
      "to like",
      "I like",
      "you (p) like",
    ]);
  });

  it("should ask a full verb once, then two incorrect ones, then full verb again", () => {
    const rng = seedrandom("abc");
    const { result } = renderHook(() => useGenerateQuestions(verbs, 0, rng));
    const questionsAsked = [];

    for (let i = 0; i < 14; i++) {
      questionsAsked.push(result.current.question); // 1 - 14

      if (i === 2 || i === 3) {
        act(() => result.current.recordOutcome(false));
      } else {
        act(() => result.current.recordOutcome(true));
      }
    }

    for (let i = 0; i < 2; i++) {
      questionsAsked.push(result.current.question); // 15 - 16
      act(() => result.current.recordOutcome(true));
    }

    for (let i = 0; i < 14; i++) {
      questionsAsked.push(result.current.question); // 17 - 30
      act(() => result.current.recordOutcome(true));
    }

    expect(questionsAsked).toHaveLength(30);
    expect(questionsAsked).toEqual([
      "he/she likes",
      "I like",
      "you like",
      "ils/elles aiment",
      "il/elle aime",
      "tu aimes",
      "to like",
      "you (p) like",
      "nous aimons",
      "they like",
      "j'aime",
      "aimer",
      "vous aimez",
      "we like",

      // Wrong
      "ils/elles aiment",
      "you like",

      // Double check
      "il/elle aime",
      "ils/elles aiment",
      "you like",
      "j'aime",
      "you (p) like",
      "vous aimez",
      "he/she likes",
      "aimer",
      "to like",
      "they like",
      "tu aimes",
      "we like",
      "nous aimons",
      "I like",
    ]);
  });
});
