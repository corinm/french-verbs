import { useState } from "react";

const isSame = (guess: string, answer: string): boolean => {
  const answerWithoutPlural = answer.replace(" (p) ", " ");
  return guess.toLowerCase() === answerWithoutPlural.toLowerCase();
};

const useManageGuess = (
  correctAnswer: string,
  onCorrect: Function,
  onWrong: Function,
  onSecondSubmit: Function
) => {
  const [guess, setGuess] = useState("");
  const [hasSubmittedAnswer, setHasSubmittedAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const onSubmit = () => {
    if (hasSubmittedAnswer) {
      setGuess("");
      setHasSubmittedAnswer(false);
      onSecondSubmit();
    } else {
      if (guess !== "") {
        setHasSubmittedAnswer(true);
        if (isSame(guess, correctAnswer)) {
          setIsCorrect(true);
          onCorrect();
        } else {
          setIsCorrect(false);
          onWrong();
        }
      }
    }
  };

  return { guess, setGuess, hasSubmittedAnswer, isCorrect, onSubmit };
};

export default useManageGuess;
