import React from "react";
import { List } from "semantic-ui-react";

import DisplayNoun from "./DisplayNoun";
import { Noun } from "../../../types";

const ListNouns: React.FC<{ nouns: Noun[] }> = ({ nouns }) => (
  <List divided verticalAlign="middle">
    {nouns.map((noun, i) => (
      <DisplayNoun key={i} {...noun} />
    ))}
  </List>
);

export default ListNouns;
