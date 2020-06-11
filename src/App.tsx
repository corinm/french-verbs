import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Segment } from "semantic-ui-react";

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
      <div>App</div>

      <Router>
        <Menu />

        <Segment>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <TestConjugation
                  {...statsProps}
                  {...questionProps}
                  {...guessProps}
                />
              )}
            />
            <Route
              path="/history"
              render={() => (
                <History questionHistory={questionProps.questionHistory} />
              )}
            />
            <Route
              path="/list"
              render={() => <ListVerbs verbs={verbs} />}
            ></Route>
          </Switch>
        </Segment>
      </Router>
    </Styling>
  );
};

export default App;
