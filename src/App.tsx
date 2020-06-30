import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Segment, Header } from "semantic-ui-react";

import Menu from "./features/Menu";
import Welcome from "./features/Welcome";
import Nouns from "./features/Nouns";
import Verbs from "./features/verbs/components/Verbs";

const Styling = styled.div`
  * {
    font-family: Arial;
  }
`;

const App = () => {
  return (
    <Styling>
      <Header as="h1">French verbs</Header>

      <Router>
        <Menu />

        <Segment>
          <Switch>
            <Route exact path="/french-verbs" component={Welcome} />
            <Route path="/french-verbs/nouns" component={Nouns} />
            <Route path="/french-verbs/verbs" component={Verbs} />
          </Switch>
        </Segment>
      </Router>
    </Styling>
  );
};

export default App;
