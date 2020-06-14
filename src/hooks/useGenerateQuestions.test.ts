import { renderHook, act } from "@testing-library/react-hooks";
import seedrandom from "seedrandom";

import { Verb } from "../types";
import useGenerateQuestions from "./useGenerateQuestions";

describe("useGenerateQuestions", () => {
  it("should ask a full verb once if all answers correct", () => {
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
    const rng = seedrandom("abc");

    const { result } = renderHook(() => useGenerateQuestions(verbs, rng));

    expect(result.current.question).toEqual("he/she likes"); // 1

    act(() => result.current.recordOutcome(true));
    expect(result.current.question).toEqual("I like"); // 2

    act(() => result.current.recordOutcome(true));
    expect(result.current.question).toEqual("you like"); // 3

    act(() => result.current.recordOutcome(true));
    expect(result.current.question).toEqual("ils/elles aiment"); // 4

    act(() => result.current.recordOutcome(true));
    expect(result.current.question).toEqual("il/elle aime"); // 5

    act(() => result.current.recordOutcome(true));
    expect(result.current.question).toEqual("tu aimes"); // 6

    act(() => result.current.recordOutcome(true));
    expect(result.current.question).toEqual("to like"); // 7

    act(() => result.current.recordOutcome(true));
    expect(result.current.question).toEqual("you (p) like"); // 8

    act(() => result.current.recordOutcome(true));
    expect(result.current.question).toEqual("nous aimons"); // 9

    act(() => result.current.recordOutcome(true));
    expect(result.current.question).toEqual("they like"); // 10

    act(() => result.current.recordOutcome(true));
    expect(result.current.question).toEqual("j'aime"); // 11

    act(() => result.current.recordOutcome(true));
    expect(result.current.question).toEqual("aimer"); // 12

    act(() => result.current.recordOutcome(true));
    expect(result.current.question).toEqual("vous aimez"); // 13

    act(() => result.current.recordOutcome(true));
    expect(result.current.question).toEqual("we like"); // 14
  });

  it("should ask a full verb once if all answers were incorrect", () => {
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
    const rng = seedrandom("abc");

    const { result } = renderHook(() => useGenerateQuestions(verbs, rng));

    expect(result.current.question).toEqual("he/she likes"); // 1

    act(() => result.current.recordOutcome(false));
    expect(result.current.question).toEqual("I like"); // 2

    act(() => result.current.recordOutcome(false));
    expect(result.current.question).toEqual("you like"); // 3

    act(() => result.current.recordOutcome(false));
    expect(result.current.question).toEqual("ils/elles aiment"); // 4

    act(() => result.current.recordOutcome(false));
    expect(result.current.question).toEqual("il/elle aime"); // 5

    act(() => result.current.recordOutcome(false));
    expect(result.current.question).toEqual("tu aimes"); // 6

    act(() => result.current.recordOutcome(false));
    expect(result.current.question).toEqual("to like"); // 7

    act(() => result.current.recordOutcome(false));
    expect(result.current.question).toEqual("you (p) like"); // 8

    act(() => result.current.recordOutcome(false));
    expect(result.current.question).toEqual("nous aimons"); // 9

    act(() => result.current.recordOutcome(false));
    expect(result.current.question).toEqual("they like"); // 10

    act(() => result.current.recordOutcome(false));
    expect(result.current.question).toEqual("j'aime"); // 11

    act(() => result.current.recordOutcome(false));
    expect(result.current.question).toEqual("aimer"); // 12

    act(() => result.current.recordOutcome(false));
    expect(result.current.question).toEqual("vous aimez"); // 13

    act(() => result.current.recordOutcome(false));
    expect(result.current.question).toEqual("we like"); // 14
  });

  it("should ask a full verb once, then any that were wrong", () => {
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
    const rng = seedrandom("abc");

    const { result } = renderHook(() => useGenerateQuestions(verbs, rng));

    act(() => result.current.recordOutcome(true));
    act(() => result.current.recordOutcome(true));
    act(() => result.current.recordOutcome(false));
    act(() => result.current.recordOutcome(false));
    act(() => result.current.recordOutcome(true));
    act(() => result.current.recordOutcome(true));
    act(() => result.current.recordOutcome(true));
    act(() => result.current.recordOutcome(true));
    act(() => result.current.recordOutcome(true));
    act(() => result.current.recordOutcome(true));
    act(() => result.current.recordOutcome(true));
    act(() => result.current.recordOutcome(true));
    act(() => result.current.recordOutcome(true));
    expect(result.current.question).toEqual("we like"); // 14

    act(() => result.current.recordOutcome(true));
    expect(result.current.question).toEqual("ils/elles aiment"); // Wrong 1 / 15

    act(() => result.current.recordOutcome(true));
    expect(result.current.question).toEqual("il/elle aime"); // Wrong 2 / 16
  });
});
