import { renderHook, act } from "@testing-library/react-hooks";

import { Meta } from "../types";
import useLists from "./useLists";

const combinations: Meta[] = [
  { verbIndex: 0, conjugation: "infinitive", language: "french" },
  { verbIndex: 0, conjugation: "firstPersonSingular", language: "french" },
  { verbIndex: 0, conjugation: "secondPersonSingular", language: "french" },
  { verbIndex: 0, conjugation: "thirdPersonSingular", language: "french" },
  { verbIndex: 0, conjugation: "firstPersonPlural", language: "french" },
  { verbIndex: 0, conjugation: "secondPersonPlural", language: "french" },
  { verbIndex: 0, conjugation: "thirdPersonPlural", language: "french" },
  { verbIndex: 0, conjugation: "infinitive", language: "english" },
  { verbIndex: 0, conjugation: "firstPersonSingular", language: "english" },
  {
    verbIndex: 0,
    conjugation: "secondPersonSingular",
    language: "english",
  },
  { verbIndex: 0, conjugation: "thirdPersonSingular", language: "english" },
  { verbIndex: 0, conjugation: "firstPersonPlural", language: "english" },
  { verbIndex: 0, conjugation: "secondPersonPlural", language: "english" },
  { verbIndex: 0, conjugation: "thirdPersonPlural", language: "english" },
];

describe("useLists", () => {
  it("should start off with empty lists", () => {
    const { result } = renderHook(() => useLists());
    expect(result.current.toTest).toHaveLength(0);
    expect(result.current.incorrect).toHaveLength(0);
    expect(result.current.doubleCheck).toHaveLength(0);
  });

  it("should initialise toTest", () => {
    const { result } = renderHook(() => useLists());

    act(() => {
      result.current.initialise(combinations);
    });

    expect(result.current.toTest).toHaveLength(14);
    expect(result.current.incorrect).toHaveLength(0);
    expect(result.current.doubleCheck).toHaveLength(0);
  });

  it("should move an item from toTest to incorrect", () => {
    const { result } = renderHook(() => useLists());

    act(() => {
      result.current.initialise(combinations);
    });
    act(() => {
      result.current.moveFromTestToIncorrect(2);
    });

    expect(result.current.toTest).toHaveLength(13);
    expect(result.current.incorrect).toHaveLength(1);
    expect(result.current.doubleCheck).toHaveLength(0);

    expect(result.current.toTest).not.toContainEqual({
      verbIndex: 0,
      conjugation: "secondPersonSingular",
      language: "french",
    });
    expect(result.current.incorrect).toContainEqual({
      verbIndex: 0,
      conjugation: "secondPersonSingular",
      language: "french",
    });
  });

  it("should move an item from toTest to doubleCheck", () => {
    const { result } = renderHook(() => useLists());

    act(() => {
      result.current.initialise(combinations);
    });
    act(() => {
      result.current.moveFromToTestToDoubleCheck(2);
    });

    expect(result.current.toTest).toHaveLength(13);
    expect(result.current.incorrect).toHaveLength(0);
    expect(result.current.doubleCheck).toHaveLength(1);

    expect(result.current.toTest).not.toContainEqual({
      verbIndex: 0,
      conjugation: "secondPersonSingular",
      language: "french",
    });
    expect(result.current.doubleCheck).toContainEqual({
      verbIndex: 0,
      conjugation: "secondPersonSingular",
      language: "french",
    });
  });

  it("should move an item from incorrect to doubleCheck", () => {
    const { result } = renderHook(() => useLists());

    act(() => {
      result.current.initialise(combinations);
    });
    act(() => {
      result.current.moveFromTestToIncorrect(2);
    });
    act(() => {
      result.current.moveFromIncorrectToDoubleCheck(0);
    });

    expect(result.current.toTest).toHaveLength(13);
    expect(result.current.incorrect).toHaveLength(0);
    expect(result.current.doubleCheck).toHaveLength(1);

    expect(result.current.toTest).not.toContainEqual({
      verbIndex: 0,
      conjugation: "secondPersonSingular",
      language: "french",
    });
    expect(result.current.incorrect).not.toContainEqual({
      verbIndex: 0,
      conjugation: "secondPersonSingular",
      language: "french",
    });
    expect(result.current.doubleCheck).toContainEqual({
      verbIndex: 0,
      conjugation: "secondPersonSingular",
      language: "french",
    });
  });

  it("should move an item from doubleCheck to incorrect", () => {
    const { result } = renderHook(() => useLists());

    act(() => {
      result.current.initialise(combinations);
    });
    act(() => {
      result.current.moveFromToTestToDoubleCheck(2);
    });
    act(() => {
      result.current.moveFromDoubleCheckToIncorrect(0);
    });

    expect(result.current.toTest).toHaveLength(13);
    expect(result.current.incorrect).toHaveLength(1);
    expect(result.current.doubleCheck).toHaveLength(0);

    expect(result.current.toTest).not.toContainEqual({
      verbIndex: 0,
      conjugation: "secondPersonSingular",
      language: "french",
    });
    expect(result.current.incorrect).toContainEqual({
      verbIndex: 0,
      conjugation: "secondPersonSingular",
      language: "french",
    });
    expect(result.current.doubleCheck).not.toContainEqual({
      verbIndex: 0,
      conjugation: "secondPersonSingular",
      language: "french",
    });
  });

  it("should remove an item from doubleCheck", () => {
    const { result } = renderHook(() => useLists());

    act(() => {
      result.current.initialise(combinations);
    });
    act(() => {
      result.current.moveFromToTestToDoubleCheck(2);
    });
    act(() => {
      result.current.removeFromDoubleCheck(0);
    });

    expect(result.current.toTest).toHaveLength(13);
    expect(result.current.incorrect).toHaveLength(0);
    expect(result.current.doubleCheck).toHaveLength(0);

    expect(result.current.toTest).not.toContainEqual({
      verbIndex: 0,
      conjugation: "secondPersonSingular",
      language: "french",
    });
    expect(result.current.doubleCheck).not.toContainEqual({
      verbIndex: 0,
      conjugation: "secondPersonSingular",
      language: "french",
    });
  });
});
