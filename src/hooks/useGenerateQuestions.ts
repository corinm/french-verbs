import { useState } from "react";

import { Verb, Meta } from "../types";
import {
  randomVerb,
  randomConjugation,
  randomLanguage,
  getPronoun,
} from "./helpers";
import useAnswerHistory from "./useAnswerHistory";

const useQuestion = (verbs: Verb[]) => {
  const [question, setQuestion] = useState<string>();
  const [answer, setAnswer] = useState<string>("");
  const [meta, setMeta] = useState<Meta>();

  const { answerHistory, questionRankings, recordOutcome } = useAnswerHistory(
    question,
    meta
  );

  const newQuestion = () => {
    const verbIndex = randomVerb(verbs);
    const verb = verbs[verbIndex];
    const conjugation = randomConjugation();
    const verbByConjugation = verb[conjugation];
    const [questionLanguage, answerLanguage] = randomLanguage();

    const questionPronoun = getPronoun(
      conjugation,
      questionLanguage,
      verbByConjugation.concatenate
    );
    const answerPronoun = getPronoun(
      conjugation,
      answerLanguage,
      verbByConjugation.concatenate
    );

    const questionWord = verbs[verbIndex][conjugation][questionLanguage];
    const answerWord = verbs[verbIndex][conjugation][answerLanguage];
    const question = `${questionPronoun}${questionWord}`;
    const answer = `${answerPronoun}${answerWord}`;
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
