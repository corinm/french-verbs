import { useState } from "react";

import { Meta, QuestionHistoryItem, OtherHistory } from "../types";

const useQuestionHistory = (question = "", meta: Meta | undefined) => {
  const [questionHistory, setQuestionHistory] = useState<QuestionHistoryItem[]>(
    []
  );

  const [otherHistory, setOtherHistory] = useState<OtherHistory>({});

  const addToOtherHistory = (meta: Meta | undefined, wasCorrect: boolean) => {
    const key = `${meta?.questionLanguage}-${meta?.verbIndex}-${meta?.conjugation}`;
    const value = wasCorrect ? 1 : -1;

    if (otherHistory[key] !== undefined) {
      setOtherHistory({ ...otherHistory, [key]: otherHistory[key] + value });
    } else {
      setOtherHistory({ ...otherHistory, [key]: value });
    }
  };

  const recordOutcome = (wasCorrect: boolean) => {
    setQuestionHistory([
      ...questionHistory,
      {
        question,
        meta: meta || {
          verbIndex: 0,
          conjugation: "",
          questionLanguage: "",
          answerLanguage: "",
        },
        wasCorrect,
      },
    ]);
    addToOtherHistory(meta, wasCorrect);
  };

  return { questionHistory, otherHistory, recordOutcome };
};

export default useQuestionHistory;
