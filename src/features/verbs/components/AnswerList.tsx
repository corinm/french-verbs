import React from "react";
import { List } from "semantic-ui-react";

import { AnswerHistoryItem } from "../../../types";

const AnswerList: React.FC<{ answerHistory: AnswerHistoryItem[] }> = ({
  answerHistory,
}) => (
  <List>
    {answerHistory.map((item, i) => (
      <List.Item key={i} style={{ color: item.wasCorrect ? "green" : "red" }}>
        <List.Icon name={item.wasCorrect ? "check" : "times"} />
        <List.Content>{item.question}</List.Content>
      </List.Item>
    ))}
  </List>
);

export default AnswerList;
