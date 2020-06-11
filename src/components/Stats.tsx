import React from "react";
import { Statistic } from "semantic-ui-react";

import { Meta } from "../types";

const Stats: React.FC<{
  correct: number;
  total: number;
  meta: Meta | undefined;
}> = ({ correct, total, meta }) => {
  console.log(meta);
  if (total === 0) {
    return null;
  } else {
    return (
      <Statistic>
        <Statistic.Value>
          {correct} / {total}
        </Statistic.Value>
        <Statistic.Label>Correct</Statistic.Label>
      </Statistic>
    );
  }
};

export default Stats;
