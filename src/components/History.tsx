import React from "react";
import { List } from "semantic-ui-react";

import { QuestionHistoryItem } from "../types";

const History: React.FC<{ questionHistory: QuestionHistoryItem[] }> = ({
  questionHistory,
}) => {
  return (
    <List>
      {questionHistory.map((item, i) => (
        <List.Item key={i}>
          <List.Icon name={item.wasCorrect ? "check" : "times"} />
          <List.Content>{item.question}</List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default History;
