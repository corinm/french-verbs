import { renderHook, act } from "@testing-library/react-hooks";

import useManageGuess from "./useManageGuess";

describe("useManageGuess", () => {
  it("should return the user's guess", () => {
    const onCorrect = () => {};
    const onWrong = () => {};
    const recordOutcome = () => {};
    const { result } = renderHook(() =>
      useManageGuess("a", onCorrect, onWrong, recordOutcome)
    );

    expect(result.current.guess).toEqual("");
    act(() => result.current.setGuess("b"));
    expect(result.current.guess).toEqual("b");
  });

  it("should call onCorrect when user first submits a correct guess", () => {
    const onCorrect = jest.fn();
    const onWrong = () => {};
    const recordOutcome = () => {};
    const { result } = renderHook(() =>
      useManageGuess("a", onCorrect, onWrong, recordOutcome)
    );

    act(() => result.current.setGuess("a"));

    expect(onCorrect).not.toHaveBeenCalled();
    act(() => result.current.onSubmit());
    expect(onCorrect).toHaveBeenCalled();
  });

  it("should call onWrong when user first submits an incorrect guess", () => {
    const onCorrect = () => {};
    const onWrong = jest.fn();
    const recordOutcome = () => {};
    const { result } = renderHook(() =>
      useManageGuess("a", onCorrect, onWrong, recordOutcome)
    );

    act(() => result.current.setGuess("b"));

    expect(onWrong).not.toHaveBeenCalled();
    act(() => result.current.onSubmit());
    expect(onWrong).toHaveBeenCalled();
  });

  it("should not record an outcome of incorrect until the user has had a chance to view feedback (bug)", () => {
    const onCorrect = () => {};
    const onWrong = () => {};
    const recordOutcome = jest.fn();
    const { result } = renderHook(() =>
      useManageGuess("a", onCorrect, onWrong, recordOutcome)
    );

    act(() => result.current.setGuess("b"));
    act(() => result.current.onSubmit());

    expect(recordOutcome).not.toHaveBeenCalled();

    act(() => result.current.onSubmit());

    expect(recordOutcome).toHaveBeenCalled();
  });
});
