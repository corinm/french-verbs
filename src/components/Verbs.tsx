import React, { useState } from "react";
import seedrandom from "seedrandom";
import { Route } from "react-router-dom";

import VerbsMenu from "./verbs/VerbsMenu";
import TestConjugation from "./TestConjugation";
import History from "./History";
import ListVerbs from "./ListVerbs";

import useGenerateQuestions from "../hooks/useGenerateQuestions";
import useStats from "../hooks/useStats";
import useManageGuess from "../hooks/useManageGuess";

import verbs from "../data";

const root = "/french-verbs/verbs";
const testPath = `${root}/test`;
const answersPath = `${root}/answers`;
const listPath = `${root}/list`;

const Verbs: React.FC = () => {
  const rng = seedrandom(Date.now().toString());

  const [selectedVerb, setSelectedVerb] = useState<number>(0);
  const statsProps = useStats();
  const questionProps = useGenerateQuestions(verbs, selectedVerb, rng);
  const guessProps = useManageGuess(
    questionProps.answer,
    statsProps.incrementCorrect,
    statsProps.incrementWrong,
    questionProps.recordOutcome
  );

  return (
    <>
      <VerbsMenu />
      <Route
        path={testPath}
        render={() => (
          <TestConjugation
            verbs={verbs}
            selectedVerb={selectedVerb}
            setSelectedVerb={setSelectedVerb}
            correctCount={statsProps.correctCount}
            total={statsProps.total}
            question={questionProps.question}
            answer={questionProps.answer}
            learned={questionProps.learned}
            guess={guessProps.guess}
            setGuess={guessProps.setGuess}
            onSubmit={guessProps.onSubmit}
            hasSubmittedAnswer={guessProps.hasSubmittedAnswer}
            isCorrect={guessProps.isCorrect}
          />
        )}
      />
      <Route
        path={answersPath}
        render={() => (
          <History answerHistory={questionProps.answerHistory} verbs={verbs} />
        )}
      />
      <Route path={listPath} render={() => <ListVerbs verbs={verbs} />}></Route>
    </>
  );
};

export default Verbs;
