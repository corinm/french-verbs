import React from "react";
import {
  Input,
  Header,
  Form,
  Dropdown,
  DropdownItemProps,
  DropdownProps,
} from "semantic-ui-react";

import { Verb } from "../types";
import Feedback from "./Feedback";
import Stats from "./Stats";
import VerbLearnedMessage from "./VerbLearnedMessage";
import ChooseLanguage from "./ChooseLanguage";

const TestConjugation: React.FC<{
  language: string;
  setLanguage: Function;
  verbs: Verb[];
  selectedVerb: number;
  setSelectedVerb: Function;
  setGuess: Function;
  onSubmit: Function;
  question: string | undefined;
  answer: string;
  guess: string;
  hasSubmittedAnswer: boolean;
  isCorrect: boolean;
  total: number;
  correctCount: number;
  learned: boolean;
}> = ({
  language,
  setLanguage,
  verbs,
  selectedVerb,
  setSelectedVerb,
  setGuess,
  onSubmit,
  question,
  answer,
  guess,
  hasSubmittedAnswer,
  isCorrect,
  total,
  correctCount,
  learned,
}) => {
  const verbOptions = verbs
    .map((verb: Verb): string => verb.infinitive.french)
    .map(
      (infinitive: string, i: number): DropdownItemProps => ({
        key: i,
        text: infinitive,
        value: i,
      })
    );

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
      <ChooseLanguage language={language} setLanguage={setLanguage} />
      <Dropdown
        placeholder="Select a verb"
        fluid
        selection
        value={selectedVerb}
        options={verbOptions}
        onChange={(_, props: DropdownProps) => setSelectedVerb(props.value)}
      />
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
        <VerbLearnedMessage learned={learned} />
      </Form.Field>
      <Stats correct={correctCount} total={total} />
    </div>
  );
};

export default TestConjugation;
