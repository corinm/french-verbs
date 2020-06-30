import { useState } from "react";

import { isSame } from "./helpers";

const useManageGuess = (
  correctAnswer: string,
  onCorrect: Function,
  onWrong: Function,
  recordOutcome: Function
) => {
  const [guess, setGuess] = useState("");
  const [hasAlreadyGuessed, setHasAlreadyGuessed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const onSubmit = () => {
    if (!hasAlreadyGuessed) {
      if (guess !== "") {
        setHasAlreadyGuessed(true);
        if (isSame(guess, correctAnswer)) {
          setIsCorrect(true);
          onCorrect();
        } else {
          setIsCorrect(false);
          onWrong();
        }
      }
    } else {
      setGuess("");
      setHasAlreadyGuessed(false);
      recordOutcome(isCorrect);
    }
  };

  return {
    guess,
    setGuess,
    hasSubmittedAnswer: hasAlreadyGuessed,
    isCorrect,
    onSubmit,
  };
};

export default useManageGuess;
