import React from "react";
import { List } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { QuestionHistoryItem, OtherHistory } from "../types";

const NoHistory: React.FC = () => (
  <span>
    Nothing to display, try <Link to="/">answering some questions!</Link>
  </span>
);

const VerbRanking: React.FC<{ otherHistory: OtherHistory }> = ({
  otherHistory,
}) => (
  <List>
    {Object.entries(otherHistory)
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

const AnswerList: React.FC<{ questionHistory: QuestionHistoryItem[] }> = ({
  questionHistory,
}) => (
  <List>
    {questionHistory.map((item, i) => (
      <List.Item key={i}>
        <List.Icon name={item.wasCorrect ? "check" : "times"} />
        <List.Content>{item.question}</List.Content>
      </List.Item>
    ))}
  </List>
);

const History: React.FC<{
  questionHistory: QuestionHistoryItem[];
  otherHistory: OtherHistory;
}> = ({ questionHistory, otherHistory }) => {
  if (questionHistory.length === 0) {
    return <NoHistory />;
  }

  return (
    <div>
      <VerbRanking otherHistory={otherHistory} />
      <AnswerList questionHistory={questionHistory} />
    </div>
  );
};

export default History;
