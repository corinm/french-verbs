import { useState } from "react";
import { Verb } from "../types";
import {
  randomVerb,
  randomConjugation,
  randomLanguage,
  getPronoun,
} from "./helpers";

const isSame = (guess: string, answer: string): boolean => {
  const answerWithoutPlural = answer.replace(" (p) ", " ");
  return guess.toLowerCase() === answerWithoutPlural.toLowerCase();
};

const useQuestion = (verbs: Verb[]) => {
  const [question, setQuestion] = useState<string>();
  const [answer, setAnswer] = useState<string>("");
  const [guess, setGuess] = useState("");
  const [hasSubmittedAnswer, setHasSubmittedAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const newQuestion = () => {
    const verbIndex = randomVerb(verbs);
    const verb = verbs[verbIndex];
    const conjugation = randomConjugation();
    const verbByConjugation = verb[conjugation];
    const [questionLanguage, answerLanguage] = randomLanguage();

    const questionPronoun = getPronoun(
      conjugation,
      questionLanguage,
      verbByConjugation.concatenate
    );
    const answerPronoun = getPronoun(
      conjugation,
      answerLanguage,
      verbByConjugation.concatenate
    );

    const questionWord = verbs[verbIndex][conjugation][questionLanguage];
    const answerWord = verbs[verbIndex][conjugation][answerLanguage];
    const question = `${questionPronoun}${questionWord}`;
    const answer = `${answerPronoun}${answerWord}`;
    setQuestion(question);
    setAnswer(answer);
    setGuess("");
    setHasSubmittedAnswer(false);
  };

  if (!question) {
    newQuestion();
  }

  const onSubmit = () => {
    if (hasSubmittedAnswer) {
      newQuestion();
    } else {
      if (guess !== "") {
        setHasSubmittedAnswer(true);
        if (isSame(guess, answer)) {
          setIsCorrect(true);
        } else {
          setIsCorrect(false);
        }
      }
    }
  };

  return {
    question,
    answer,
    guess,
    setGuess,
    hasSubmittedAnswer,
    isCorrect,
    onSubmit,
  };
};

export default useQuestion;
