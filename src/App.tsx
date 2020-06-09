import React from "react";
import styled from "styled-components";

import DisplayVerb from "./components/DisplayVerb";

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
  </Styling>
);

export default App;
