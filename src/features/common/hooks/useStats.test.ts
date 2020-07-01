import { renderHook, act } from "@testing-library/react-hooks";

import useStats from "./useStats";

describe("useStats", () => {
  it("should start with zeroes", () => {
    const { result } = renderHook(() => useStats());

    expect(result.current.correctCount).toEqual(0);
    expect(result.current.wrongCount).toEqual(0);
    expect(result.current.total).toEqual(0);
  });

  it("should increment correctCount and total after incrementCorrect is called", () => {
    const { result } = renderHook(() => useStats());

    expect(result.current.correctCount).toEqual(0);
    expect(result.current.total).toEqual(0);

    act(() => result.current.incrementCorrect());

    expect(result.current.correctCount).toEqual(1);
    expect(result.current.total).toEqual(1);
  });

  it("should not increment wrongCount incrementCorrect is called", () => {
    const { result } = renderHook(() => useStats());

    expect(result.current.wrongCount).toEqual(0);

    act(() => result.current.incrementCorrect());

    expect(result.current.wrongCount).toEqual(0);
  });

  it("should increment wrongCount and total after incrementWrong is called", () => {
    const { result } = renderHook(() => useStats());

    expect(result.current.wrongCount).toEqual(0);
    expect(result.current.total).toEqual(0);

    act(() => result.current.incrementWrong());

    expect(result.current.wrongCount).toEqual(1);
    expect(result.current.total).toEqual(1);
  });

  it("should not increment correctCount incrementWrong is called", () => {
    const { result } = renderHook(() => useStats());

    expect(result.current.correctCount).toEqual(0);

    act(() => result.current.incrementWrong());

    expect(result.current.correctCount).toEqual(0);
  });
});
