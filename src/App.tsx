import React from "react";
import styled from "styled-components";

import DisplayVerb from "./components/DisplayVerb";
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
    {verbs.map((verb, i) => (
      <DisplayVerb key={i} {...verb} />
    ))}
    <TestConjugation verbs={verbs} />
  </Styling>
);

export default App;
