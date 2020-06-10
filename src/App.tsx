import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Segment } from "semantic-ui-react";

import Menu from "./components/Menu";
import ListVerbs from "./components/ListVerbs";
import TestConjugation from "./components/TestConjugation";

import verbs from "./data";

const Styling = styled.div`
  * {
    font-family: Arial;
  }
`;

const App = () => (
  <Styling>
    <div>App</div>

    <Router>
      <Menu />

      <Segment>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <TestConjugation verbs={verbs} />}
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

export default App;
