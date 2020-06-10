import { useState } from "react";

const useStats = () => {
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const incrementCorrect = () => setCorrectCount(correctCount + 1);
  const incrementWrong = () => setWrongCount(wrongCount + 1);

  return {
    correctCount,
    incrementCorrect,
    wrongCount,
    incrementWrong,
    total: correctCount + wrongCount,
  };
};

export default useStats;
