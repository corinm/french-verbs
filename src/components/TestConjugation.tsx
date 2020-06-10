import React from "react";
import { Input, Header, Form, Label } from "semantic-ui-react";

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

      <Form.Field inline>
        <Input value={guess} onChange={onInputChange} onKeyPress={onKeyPress} />
        <Feedback
          hasSubmittedAnswer={hasSubmittedAnswer}
          isCorrect={isCorrect}
          answer={answer}
        />
      </Form.Field>
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
