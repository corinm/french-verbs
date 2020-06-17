import { useState } from "react";

import { Meta, AnswerHistoryItem, QuestionRankings } from "../types";

const blankMeta = {
  verbIndex: 0,
  conjugation: "",
  language: "",
};

const useAnswerHistory = (question = "", meta: Meta = { ...blankMeta }) => {
  const [answerHistory, setAnswerHistory] = useState<AnswerHistoryItem[]>([]);
  const [questionRankings, setQuestionRankings] = useState<QuestionRankings>(
    {}
  );

  const addToRankings = (meta: Meta, wasCorrect: boolean) => {
    const key = `${meta.verbIndex}-${meta.conjugation}-${meta.language}`;
    const score = wasCorrect ? 1 : -1;

    if (questionRankings[key] !== undefined) {
      const newScore = questionRankings[key].score + score;
      setQuestionRankings({
        ...questionRankings,
        [key]: { meta, score: newScore },
      });
    } else {
      setQuestionRankings({
        ...questionRankings,
        [key]: { meta, score },
      });
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
