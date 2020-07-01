import React from "react";
import { Input, Header, Form } from "semantic-ui-react";

import Feedback from "../../Feedback";
import Stats from "../../Stats";

const TestNoun: React.FC<{
  setGuess: Function;
  onSubmit: Function;
  question: string | undefined;
  answer: string;
  guess: string;
  hasSubmittedAnswer: boolean;
  isCorrect: boolean;
  total: number;
  correctCount: number;
}> = ({
  setGuess,
  onSubmit,
  question,
  answer,
  guess,
  hasSubmittedAnswer,
  isCorrect,
  total,
  correctCount,
}) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setGuess(event.target.value);

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };
  const doNothing = () => {};

  return (
    <div>
      <Header as="h1">{question}</Header>
      <Form.Field inline>
        <Input
          placeholder="Answer"
          value={guess}
          onChange={hasSubmittedAnswer ? doNothing : onInputChange}
          onKeyPress={onKeyPress}
        />
        <Feedback
          hasSubmittedAnswer={hasSubmittedAnswer}
          isCorrect={isCorrect}
          answer={answer}
        />
      </Form.Field>
      <Stats correct={correctCount} total={total} />
    </div>
  );
};

export default TestNoun;
