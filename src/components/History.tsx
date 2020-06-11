import React from "react";

import { QuestionHistoryItem } from "../types";

const History: React.FC<{ questionHistory: QuestionHistoryItem[] }> = ({
  questionHistory,
}) => {
  return (
    <div>
      {questionHistory.map((item, i) => (
        <div key={i}>
          {item.question}
          {item.wasCorrect ? " ✅" : " ❌"}
        </div>
      ))}
    </div>
  );
};

export default History;
