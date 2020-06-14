// Choose first verb
// Ask each conjugation once, in each language, at random (14 combinations)
//   Each incorrect answer gets put to the side
// Once every conjugation has been asked once, ask the incorrect ones at random
//   If correct, remove from list
//   If wrong, keep in list
// Once list is empty, repeat with another verb

// const currentVerb = 0
// const mistakes = [{ conjugation: '', language: '' }]

import { Meta } from "../types";

const randomNumber = (rng: Function, min: number, max: number): number =>
  Math.floor(rng() * (max - min + 1) + min);

const pickQuestion = (rng: Function, list: Meta[]): number => {
  return randomNumber(rng, 0, list.length - 1);
};

export default pickQuestion;
