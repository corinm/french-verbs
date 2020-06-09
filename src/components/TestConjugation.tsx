import React, { useState } from "react";

import { Verb } from "../types";
import {
  randomVerb,
  randomConjugation,
  randomLanguage,
  getPronoun,
} from "./helpers";

const useQuestion = (verbs: Verb[]) => {
  const [question, setQuestion] = useState<string>();
  const [answer, setAnswer] = useState<string>();
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
        if (guess === answer) {
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

const TestConjugation: React.FC<{ verbs: Verb[] }> = ({ verbs }) => {
  const {
    question,
    answer,
    guess,
    setGuess,
    hasSubmittedAnswer,
    isCorrect,
    onSubmit,
  } = useQuestion(verbs);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setGuess(event.target.value);

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div>
      <div>
        <div>Q: {question}</div>
        <div>A: {answer}</div>
        <div>Correct? {hasSubmittedAnswer ? isCorrect.toString() : null}</div>
      </div>
      <input
        value={guess}
        onChange={onInputChange}
        onKeyPress={onKeyPress}
      ></input>
    </div>
  );
};

export default TestConjugation;
