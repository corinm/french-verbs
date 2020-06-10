import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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
      <div>
        <Link to="/">
          <button>Test</button>
        </Link>
        <Link to="/list">
          <button>List</button>
        </Link>
      </div>

      <Switch>
        <Route
          exact
          path="/"
          render={() => <TestConjugation verbs={verbs} />}
        />
        <Route path="/list" render={() => <ListVerbs verbs={verbs} />}></Route>
      </Switch>
    </Router>
  </Styling>
);

export default App;
