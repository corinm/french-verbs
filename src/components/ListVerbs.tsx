import React from "react";

import DisplayVerb from "./DisplayVerb";
import { Verb } from "../types";

const ListVerbs: React.FC<{ verbs: Verb[] }> = ({ verbs }) => (
  <div>
    {verbs.map((verb, i) => (
      <DisplayVerb key={i} {...verb} />
    ))}
  </div>
);

export default ListVerbs;
