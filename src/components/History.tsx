import React from "react";

import { Verb, AnswerHistoryItem } from "../types";
import NoHistory from "./NoHistory";
import AnswerList from "./AnswerList";

const History: React.FC<{
  answerHistory: AnswerHistoryItem[];
  verbs: Verb[];
}> = ({ answerHistory, verbs }) => {
  if (answerHistory.length === 0) {
    return <NoHistory />;
  }

  return (
    <div>
      <AnswerList answerHistory={answerHistory} />
    </div>
  );
};

export default History;
