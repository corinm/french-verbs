import React, { useState } from "react";
import { Input, Header, Form, Label, Statistic } from "semantic-ui-react";

import useQuestion from "./useQuestion";
import { Verb } from "../types";

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

const TestConjugation: React.FC<{ verbs: Verb[] }> = ({ verbs }) => {
  const { correctCount, total, incrementCorrect, incrementWrong } = useStats();
  const {
    question,
    answer,
    guess,
    setGuess,
    hasSubmittedAnswer,
    isCorrect,
    onSubmit,
  } = useQuestion(verbs, incrementCorrect, incrementWrong);

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
      <Form.Field inline>
        <Input
          placeholder="Answer"
          value={guess}
          onChange={onInputChange}
          onKeyPress={onKeyPress}
        />
        <Feedback
          hasSubmittedAnswer={hasSubmittedAnswer}
          isCorrect={isCorrect}
          answer={answer}
        />
      </Form.Field>
      <Statistic>
        <Statistic.Value>
          {correctCount} / {total}
        </Statistic.Value>
        <Statistic.Label>Correct</Statistic.Label>
      </Statistic>
    </div>
  );
};

const Feedback: React.FC<{
  hasSubmittedAnswer: Boolean;
  isCorrect: Boolean;
  answer: string;
}> = ({ hasSubmittedAnswer, isCorrect, answer }) => {
  if (hasSubmittedAnswer) {
    if (isCorrect) {
      return (
        <Label pointing="left" color="green">
          {"✅"}
        </Label>
      );
    } else {
      return <Label pointing="left" color="red">{`╳ ${answer}`}</Label>;
    }
  }
  return null;
};

export default TestConjugation;
