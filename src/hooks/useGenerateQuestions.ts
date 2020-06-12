import { useState } from "react";

import { Verb, Meta } from "../types";
import useAnswerHistory from "./useAnswerHistory";
import { getVerb } from "../utils";
import { pickQuestion } from "./helpers";

const useQuestion = (verbs: Verb[]) => {
  const [question, setQuestion] = useState<string>();
  const [answer, setAnswer] = useState<string>("");
  const [meta, setMeta] = useState<Meta>();

  const { answerHistory, questionRankings, recordOutcome } = useAnswerHistory(
    question,
    meta
  );

  const newQuestion = () => {
    const {
      verbIndex,
      conjugation,
      questionLanguage,
      answerLanguage,
    } = pickQuestion(verbs, questionRankings);

    const question = getVerb(verbs, verbIndex, conjugation, questionLanguage);
    const answer = getVerb(verbs, verbIndex, conjugation, answerLanguage);

    setQuestion(question);
    setAnswer(answer);
    setMeta({ verbIndex, conjugation, questionLanguage, answerLanguage });
  };

  if (!question) {
    newQuestion();
  }

  return {
    question,
    answer,
    newQuestion,
    recordOutcome,
    answerHistory,
    questionRankings,
  };
};

export default useQuestion;
