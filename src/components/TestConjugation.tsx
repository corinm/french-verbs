import React from "react";
import { Input, Header, Form } from "semantic-ui-react";

import useQuestion from "./useQuestion";
import useStats from "./useStats";
import useManageGuess from "./useManageGuess";
import { Verb } from "../types";
import Feedback from "./Feedback";
import Stats from "./Stats";

const TestConjugation: React.FC<{ verbs: Verb[] }> = ({ verbs }) => {
  const { correctCount, total, incrementCorrect, incrementWrong } = useStats();
  const { question, answer, newQuestion, meta } = useQuestion(verbs);
  const {
    guess,
    setGuess,
    hasSubmittedAnswer,
    isCorrect,
    onSubmit,
  } = useManageGuess(answer, incrementCorrect, incrementWrong, newQuestion);

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
      <Stats correct={correctCount} total={total} meta={meta} />
    </div>
  );
};

export default TestConjugation;
