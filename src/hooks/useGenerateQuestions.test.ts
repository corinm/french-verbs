import { renderHook, act } from "@testing-library/react-hooks";
import seedrandom from "seedrandom";

import { Verb } from "../types";
import useGenerateQuestions from "./useGenerateQuestions";

describe("useGenerateQuestions", () => {
  it("should ask a full verb twice if all answers correct", () => {
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

    expect(result.current.question).toEqual("he/she likes");

    act(() => {
      result.current.recordOutcome(true);
    });

    expect(result.current.question).toEqual("you like");

    act(() => {
      result.current.recordOutcome(true);
    });
    expect(result.current.question).toEqual("?");

    // act(() => {
    //   result.current.recordOutcome(true);
    // });
    // expect(result.current.question).toEqual("they like (french)");
  });
});
