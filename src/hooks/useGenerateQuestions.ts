import { useState, useEffect } from "react";

import { Verb, Meta } from "../types";
import useAnswerHistory from "./useAnswerHistory";
import { getVerb } from "../utils";
import pickQuestion from "../utils/pickQuestion";
import useLists from "./useLists";

const useReinitialiseIfVerbChanges = (
  storedVerb: number | undefined,
  selectedVerb: number,
  setStoredVerb: Function,
  initialise: Function,
  setWantNewQuestion: Function
) => {
  useEffect(() => {
    if (storedVerb !== selectedVerb) {
      setStoredVerb(selectedVerb);
      initialise(selectedVerb);
      setWantNewQuestion(true);
    }
  }, [selectedVerb, initialise, storedVerb, setStoredVerb, setWantNewQuestion]);
};

const useGenerateQuestion = (
  verbs: Verb[],
  selectedVerb: number,
  rng: Function
) => {
  const [question, setQuestion] = useState<string>();
  const [answer, setAnswer] = useState<string>("");
  const [meta, setMeta] = useState<Meta>();
  const [wantNewQuestion, setWantNewQuestion] = useState(true);
  const [learned, setLearned] = useState(false);

  const {
    answerHistory,
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
  const [storedVerb, setStoredVerb] = useState<number | undefined>();

  useReinitialiseIfVerbChanges(
    storedVerb,
    selectedVerb,
    setStoredVerb,
    initialise,
    setWantNewQuestion
  );

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

    if (
      (toTest.length > 0 || incorrect.length > 0 || doubleCheck.length > 0) &&
      wantNewQuestion
    ) {
      newQuestion();
      setWantNewQuestion(false);
    }
  }, [toTest, incorrect, doubleCheck, rng, verbs, wantNewQuestion]);

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
        if (doubleCheck.length < 2) {
          // Use has completed two rounds
          setLearned(true);
          initialise(selectedVerb);
        }
      } else {
        moveFromDoubleCheckToIncorrect(listIndex);
      }
    }

    recordOutcomeInHistory(wasCorrect);
    setWantNewQuestion(true);
  };

  return {
    question,
    answer,
    recordOutcome,
    answerHistory,
    learned,
  };
};

export default useGenerateQuestion;
