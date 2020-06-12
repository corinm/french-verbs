import { useState } from "react";

import { Meta, AnswerHistoryItem, OtherHistory } from "../types";

const blankMeta = {
  verbIndex: 0,
  conjugation: "",
  questionLanguage: "",
  answerLanguage: "",
};

const useAnswerHistory = (question = "", meta: Meta = { ...blankMeta }) => {
  const [answerHistory, setAnswerHistory] = useState<AnswerHistoryItem[]>([]);
  const [questionRankings, setQuestionRankings] = useState<OtherHistory>({});

  const addToRankings = (meta: Meta, wasCorrect: boolean) => {
    const key = `${meta.questionLanguage}-${meta.verbIndex}-${meta.conjugation}`;
    const value = wasCorrect ? 1 : -1;

    if (questionRankings[key] !== undefined) {
      setQuestionRankings({
        ...questionRankings,
        [key]: questionRankings[key] + value,
      });
    } else {
      setQuestionRankings({ ...questionRankings, [key]: value });
    }
  };

  const recordOutcome = (wasCorrect: boolean) => {
    setAnswerHistory([
      ...answerHistory,
      {
        question,
        meta,
        wasCorrect,
      },
    ]);
    addToRankings(meta, wasCorrect);
  };

  return {
    answerHistory,
    questionRankings,
    recordOutcome,
  };
};

export default useAnswerHistory;
