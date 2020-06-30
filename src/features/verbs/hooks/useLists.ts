import { useState } from "react";

import { Meta } from "../../../types";

const useLists = () => {
  const [toTest, setToTest] = useState<Meta[]>([]);
  const [incorrect, setIncorrect] = useState<Meta[]>([]);
  const [doubleCheck, setDoubleCheck] = useState<Meta[]>([]);

  const initialise = (selectedVerb: number) => {
    setToTest([
      {
        verbIndex: selectedVerb,
        conjugation: "infinitive",
        language: "french",
      },
      {
        verbIndex: selectedVerb,
        conjugation: "firstPersonSingular",
        language: "french",
      },
      {
        verbIndex: selectedVerb,
        conjugation: "secondPersonSingular",
        language: "french",
      },
      {
        verbIndex: selectedVerb,
        conjugation: "thirdPersonSingular",
        language: "french",
      },
      {
        verbIndex: selectedVerb,
        conjugation: "firstPersonPlural",
        language: "french",
      },
      {
        verbIndex: selectedVerb,
        conjugation: "secondPersonPlural",
        language: "french",
      },
      {
        verbIndex: selectedVerb,
        conjugation: "thirdPersonPlural",
        language: "french",
      },
      {
        verbIndex: selectedVerb,
        conjugation: "infinitive",
        language: "english",
      },
      {
        verbIndex: selectedVerb,
        conjugation: "firstPersonSingular",
        language: "english",
      },
      {
        verbIndex: selectedVerb,
        conjugation: "secondPersonSingular",
        language: "english",
      },
      {
        verbIndex: selectedVerb,
        conjugation: "thirdPersonSingular",
        language: "english",
      },
      {
        verbIndex: selectedVerb,
        conjugation: "firstPersonPlural",
        language: "english",
      },
      {
        verbIndex: selectedVerb,
        conjugation: "secondPersonPlural",
        language: "english",
      },
      {
        verbIndex: selectedVerb,
        conjugation: "thirdPersonPlural",
        language: "english",
      },
    ]);
    setIncorrect([]);
    setDoubleCheck([]);
  };

  const moveFromTestToIncorrect = (i: number) => {
    const itemToMove = toTest[i];
    setToTest([...toTest.slice(0, i), ...toTest.slice(i + 1)]);
    setIncorrect([...incorrect, { ...itemToMove }]);
  };
  const moveFromToTestToDoubleCheck = (i: number) => {
    const itemToMove = toTest[i];
    setToTest([...toTest.slice(0, i), ...toTest.slice(i + 1)]);
    setDoubleCheck([...doubleCheck, { ...itemToMove }]);
  };

  const moveFromIncorrectToDoubleCheck = (i: number) => {
    const itemToMove = incorrect[i];
    setIncorrect([...incorrect.slice(0, i), ...incorrect.slice(i + 1)]);
    setDoubleCheck([...doubleCheck, { ...itemToMove }]);
  };
  const moveFromDoubleCheckToIncorrect = (i: number) => {
    const itemToMove = doubleCheck[i];
    setDoubleCheck([...doubleCheck.slice(0, i), ...doubleCheck.slice(i + 1)]);
    setIncorrect([...incorrect, { ...itemToMove }]);
  };

  const removeFromDoubleCheck = (i: number) => {
    setDoubleCheck([...doubleCheck.slice(0, i), ...doubleCheck.slice(i + 1)]);
  };

  return {
    toTest,
    incorrect,
    doubleCheck,
    initialise,
    moveFromTestToIncorrect,
    moveFromToTestToDoubleCheck,
    moveFromIncorrectToDoubleCheck,
    moveFromDoubleCheckToIncorrect,
    removeFromDoubleCheck,
  };
};

export default useLists;
