import React from "react";
import { Route } from "react-router-dom";

import NounsMenu from "./NounsMenu";
import ListNouns from "./ListNouns";
import TestNoun from "./TestNoun";

import useStats from "../../common/hooks/useStats";
import useManageGuess from "../../common/hooks/useManageGuess";

import nouns from "../data";

const root = "/french-verbs/nouns";
const testPath = `${root}/test`;
const answersPath = `${root}/answers`;
const listPath = `${root}/list`;

const Nouns: React.FC = () => {
  const questionProps = { question: "a", answer: "b", recordOutcome: () => {} };

  const statsProps = useStats();
  const guessProps = useManageGuess(
    questionProps.answer,
    statsProps.incrementCorrect,
    statsProps.incrementWrong,
    questionProps.recordOutcome
  );

  return (
    <>
      <NounsMenu />
      <Route
        path={testPath}
        render={() => (
          <TestNoun
            setGuess={guessProps.setGuess}
            onSubmit={guessProps.onSubmit}
            question={questionProps.question}
            answer={questionProps.answer}
            guess={guessProps.guess}
            hasSubmittedAnswer={guessProps.hasSubmittedAnswer}
            isCorrect={guessProps.isCorrect}
            total={statsProps.total}
            correctCount={statsProps.correctCount}
          />
        )}
      ></Route>
      <Route path={answersPath} render={() => <div>Answers</div>}></Route>
      <Route path={listPath} render={() => <ListNouns nouns={nouns} />}></Route>
    </>
  );
};

export default Nouns;
