import React from "react";
import { Input, Header } from "semantic-ui-react";

import useQuestion from "./useQuestion";
import { Verb } from "../types";

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
      <Header as="h1">{question}</Header>
      <Feedback
        hasSubmittedAnswer={hasSubmittedAnswer}
        isCorrect={isCorrect}
        answer={answer}
      />
      <Input value={guess} onChange={onInputChange} onKeyPress={onKeyPress} />
    </div>
  );
};

const Feedback: React.FC<{
  hasSubmittedAnswer: Boolean;
  isCorrect: Boolean;
  answer: string | undefined;
}> = ({ hasSubmittedAnswer, isCorrect, answer }) => {
  if (hasSubmittedAnswer) {
    if (isCorrect) {
      return <span>{"✅"}</span>;
    } else {
      return <span>{`Answer should have been: ${answer}`}</span>;
    }
  }
  return null;
};

export default TestConjugation;
