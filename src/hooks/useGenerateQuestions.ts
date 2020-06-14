import { useState, useEffect } from "react";

import { Verb, Meta } from "../types";
import useAnswerHistory from "./useAnswerHistory";
import { getVerb } from "../utils";
import pickQuestion from "../utils/pickQuestion";
import useLists from "./useLists";

const useGenerateQuestion = (verbs: Verb[], rng: Function) => {
  const [question, setQuestion] = useState<string>();
  const [answer, setAnswer] = useState<string>("");
  const [meta, setMeta] = useState<Meta>();

  const {
    answerHistory,
    questionRankings,
    recordOutcome: recordOutcomeInHistory,
  } = useAnswerHistory(question, meta);

  const {
    initialise,
    toTest,
    incorrect,
    doubleCheck,
    moveFromTestToIncorrect,
    moveFromToTestToDoubleCheck,
    moveFromIncorrectToDoubleCheck,
    moveFromDoubleCheckToIncorrect,
    removeFromDoubleCheck,
  } = useLists();
  const [listIndex, setListIndex] = useState(0);

  useEffect(() => {
    const newQuestion = () => {
      let chosen: Meta = {
        verbIndex: 0,
        conjugation: "infinitive",
        language: "french",
      };

      if (toTest.length > 0) {
        const index = pickQuestion(rng, toTest);
        setListIndex(index);
        chosen = toTest[index];
      } else if (incorrect.length > 0) {
        const index = pickQuestion(rng, incorrect);
        setListIndex(index);
        chosen = incorrect[index];
      } else if (doubleCheck.length > 0) {
        const index = pickQuestion(rng, doubleCheck);
        setListIndex(index);
        chosen = doubleCheck[index];
      }

      const { verbIndex, conjugation, language } = chosen;

      const answerLanguage = language === "french" ? "english" : "french";
      const question = getVerb(verbs, verbIndex, conjugation, language);
      const answer = getVerb(verbs, verbIndex, conjugation, answerLanguage);

      setQuestion(question);
      setAnswer(answer);
      setMeta({ verbIndex, conjugation, language });
    };

    if (toTest.length > 0 || incorrect.length > 0 || doubleCheck.length > 0) {
      newQuestion();
    }
  }, [toTest, incorrect, doubleCheck, rng, verbs]);

  const recordOutcome = (wasCorrect: boolean) => {
    if (toTest.length > 0) {
      if (wasCorrect) {
        moveFromToTestToDoubleCheck(listIndex);
      } else {
        moveFromTestToIncorrect(listIndex);
      }
    } else if (incorrect.length > 0) {
      if (wasCorrect) {
        moveFromIncorrectToDoubleCheck(listIndex);
      } else {
        // Do nothing, it's still wrong
      }
    } else {
      if (wasCorrect) {
        removeFromDoubleCheck(listIndex);
      } else {
        moveFromDoubleCheckToIncorrect(listIndex);
      }
    }

    recordOutcomeInHistory(wasCorrect);
  };

  if (toTest.length === 0 && incorrect.length === 0) {
    initialise([
      { verbIndex: 0, conjugation: "infinitive", language: "french" },
      { verbIndex: 0, conjugation: "firstPersonSingular", language: "french" },
      { verbIndex: 0, conjugation: "secondPersonSingular", language: "french" },
      { verbIndex: 0, conjugation: "thirdPersonSingular", language: "french" },
      { verbIndex: 0, conjugation: "firstPersonPlural", language: "french" },
      { verbIndex: 0, conjugation: "secondPersonPlural", language: "french" },
      { verbIndex: 0, conjugation: "thirdPersonPlural", language: "french" },
      { verbIndex: 0, conjugation: "infinitive", language: "english" },
      { verbIndex: 0, conjugation: "firstPersonSingular", language: "english" },
      {
        verbIndex: 0,
        conjugation: "secondPersonSingular",
        language: "english",
      },
      { verbIndex: 0, conjugation: "thirdPersonSingular", language: "english" },
      { verbIndex: 0, conjugation: "firstPersonPlural", language: "english" },
      { verbIndex: 0, conjugation: "secondPersonPlural", language: "english" },
      { verbIndex: 0, conjugation: "thirdPersonPlural", language: "english" },
    ]);
  }

  return {
    question,
    answer,
    recordOutcome,
    answerHistory,
    questionRankings,
  };
};

export default useGenerateQuestion;
