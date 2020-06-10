import React from "react";
import { Statistic } from "semantic-ui-react";

const Stats: React.FC<{ correct: number; total: number }> = ({
  correct,
  total,
}) => {
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
