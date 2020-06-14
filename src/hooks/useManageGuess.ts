import { useState } from "react";

import { isSame } from "./helpers";

const useManageGuess = (
  correctAnswer: string,
  onCorrect: Function,
  onWrong: Function,
  recordOutcome: Function
) => {
  const [guess, setGuess] = useState("");
  const [hasSubmittedAnswer, setHasSubmittedAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const onSubmit = () => {
    if (hasSubmittedAnswer) {
      setGuess("");
      setHasSubmittedAnswer(false);
      recordOutcome(isCorrect);
    } else {
      if (guess !== "") {
        setHasSubmittedAnswer(true);
        if (isSame(guess, correctAnswer)) {
          setIsCorrect(true);
          onCorrect();
        } else {
          setIsCorrect(false);
          recordOutcome(false);
          onWrong();
        }
      }
    }
  };

  return { guess, setGuess, hasSubmittedAnswer, isCorrect, onSubmit };
};

export default useManageGuess;
