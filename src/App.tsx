import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Segment, Header } from "semantic-ui-react";

import Menu from "./components/Menu";
import TestConjugation from "./components/TestConjugation";
import History from "./components/History";
import ListVerbs from "./components/ListVerbs";

import useGenerateQuestions from "./hooks/useGenerateQuestions";
import useStats from "./hooks/useStats";
import useManageGuess from "./hooks/useManageGuess";

import verbs from "./data";

const Styling = styled.div`
  * {
    font-family: Arial;
  }
`;

const App = () => {
  const statsProps = useStats();
  const questionProps = useGenerateQuestions(verbs);
  const guessProps = useManageGuess(
    questionProps.answer,
    statsProps.incrementCorrect,
    statsProps.incrementWrong,
    questionProps.newQuestion,
    questionProps.recordOutcome
  );

  return (
    <Styling>
      <Header as="h1">French verbs</Header>

      <Router>
        <Menu />

        <Segment>
          <Switch>
            <Route
              exact
              path="/french-verbs/"
              render={() => (
                <TestConjugation
                  correctCount={statsProps.correctCount}
                  total={statsProps.total}
                  question={questionProps.question}
                  answer={questionProps.answer}
                  guess={guessProps.guess}
                  setGuess={guessProps.setGuess}
                  onSubmit={guessProps.onSubmit}
                  hasSubmittedAnswer={guessProps.hasSubmittedAnswer}
                  isCorrect={guessProps.isCorrect}
                />
              )}
            />
            <Route
              path="/french-verbs/history"
              render={() => (
                <History
                  answerHistory={questionProps.answerHistory}
                  questionRankings={questionProps.questionRankings}
                  verbs={verbs}
                />
              )}
            />
            <Route
              path="/french-verbs/list"
              render={() => <ListVerbs verbs={verbs} />}
            ></Route>
          </Switch>
        </Segment>
      </Router>
    </Styling>
  );
};

export default App;
