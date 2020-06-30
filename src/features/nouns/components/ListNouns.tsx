import React from "react";

import DisplayNoun from "./DisplayNoun";
import { Noun } from "../../../types";

const ListNouns: React.FC<{ nouns: Noun[] }> = ({ nouns }) => (
  <div>
    {nouns.map((noun, i) => (
      <DisplayNoun key={i} {...noun} />
    ))}
  </div>
);

export default ListNouns;
