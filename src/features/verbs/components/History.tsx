import React from "react";

import { AnswerHistoryItem } from "../../../types";
import NoHistory from "./NoHistory";
import AnswerList from "./AnswerList";

const History: React.FC<{
  answerHistory: AnswerHistoryItem[];
}> = ({ answerHistory }) => {
  if (answerHistory.length === 0) {
    return <NoHistory />;
  }

  return <AnswerList answerHistory={answerHistory} />;
};

export default History;
