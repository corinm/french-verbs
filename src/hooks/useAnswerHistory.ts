import { useState } from "react";

import { Meta, AnswerHistoryItem } from "../types";

const blankMeta = {
  verbIndex: 0,
  conjugation: "",
  language: "",
};

const useAnswerHistory = (question = "", meta: Meta = { ...blankMeta }) => {
  const [answerHistory, setAnswerHistory] = useState<AnswerHistoryItem[]>([]);

  const recordOutcome = (wasCorrect: boolean) => {
    setAnswerHistory([
      ...answerHistory,
      {
        question,
        meta,
        wasCorrect,
      },
    ]);
  };

  return {
    answerHistory,
    recordOutcome,
  };
};

export default useAnswerHistory;
