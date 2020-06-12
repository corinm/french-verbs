import React from "react";
import { List } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { AnswerHistoryItem, OtherHistory as QuestionRankings } from "../types";

const NoHistory: React.FC = () => (
  <span>
    Nothing to display, try <Link to="/">answering some questions!</Link>
  </span>
);

const QuestionRanking: React.FC<{ questionRankings: QuestionRankings }> = ({
  questionRankings,
}) => (
  <List>
    {Object.entries(questionRankings)
      .map(([hash, score]) => ({ hash, score }))
      .sort((a, b) => {
        if (a.score > b.score) {
          return 1;
        } else if (a.score < b.score) {
          return -1;
        } else {
          return 0;
        }
      })
      .map((item, i) => (
        <List.Item key={i}>
          <List.Content>{item.hash}</List.Content>
          <List.Content>{item.score}</List.Content>
        </List.Item>
      ))}
  </List>
);

const AnswerList: React.FC<{ answerHistory: AnswerHistoryItem[] }> = ({
  answerHistory,
}) => (
  <List>
    {answerHistory.map((item, i) => (
      <List.Item key={i}>
        <List.Icon name={item.wasCorrect ? "check" : "times"} />
        <List.Content>{item.question}</List.Content>
      </List.Item>
    ))}
  </List>
);

const History: React.FC<{
  answerHistory: AnswerHistoryItem[];
  questionRankings: QuestionRankings;
}> = ({ answerHistory, questionRankings }) => {
  if (answerHistory.length === 0) {
    return <NoHistory />;
  }

  return (
    <div>
      <QuestionRanking questionRankings={questionRankings} />
      <AnswerList answerHistory={answerHistory} />
    </div>
  );
};

export default History;
