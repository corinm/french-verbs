import { useState } from "react";

import { Meta } from "../types";

const useLists = () => {
  const [toTest, setToTest] = useState<Meta[]>([]);
  const [incorrect, setIncorrect] = useState<Meta[]>([]);
  const [doubleCheck, setDoubleCheck] = useState<Meta[]>([]);

  const initialise = (thingsToTest: Meta[]) => {
    setToTest(thingsToTest);
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
