import React from "react";

import {
  Verb,
  AnswerHistoryItem,
  QuestionRankings as QuestionRankingsType,
} from "../types";
import NoHistory from "./NoHistory";
import AnswerList from "./AnswerList";
import QuestionRankings from "./QuestionRankings";

const History: React.FC<{
  answerHistory: AnswerHistoryItem[];
  questionRankings: QuestionRankingsType;
  verbs: Verb[];
}> = ({ answerHistory, questionRankings, verbs }) => {
  if (answerHistory.length === 0) {
    return <NoHistory />;
  }

  return (
    <div>
      <QuestionRankings verbs={verbs} questionRankings={questionRankings} />
      <AnswerList answerHistory={answerHistory} />
    </div>
  );
};

export default History;
