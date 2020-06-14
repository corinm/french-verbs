import seedrandom from "seedrandom";

import { Verb, QuestionRankings } from "../types";

const randomNumber = (max: number): number => {
  const min = 0;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomVerb = (verbs: Verb[]): number =>
  randomNumber(verbs.length - 1);

const conjugations = [
  "infinitive",
  "firstPersonSingular",
  "secondPersonSingular",
  "thirdPersonSingular",
  "firstPersonPlural",
  "secondPersonPlural",
  "thirdPersonPlural",
];

export const randomConjugation = () => {
  return conjugations[randomNumber(conjugations.length - 1)];
};

export const randomLanguage = () => {
  const rand = randomNumber(1);
  if (rand === 0) {
    return ["french", "english"];
  } else {
    return ["english", "french"];
  }
};

interface Pronouns {
  [key: string]: string;
}

const otherFrenchPronouns: Pronouns = {
  secondPersonSingular: "tu ",
  thirdPersonSingular: "il/elle ",
  firstPersonPlural: "nous ",
  secondPersonPlural: "vous ",
  thirdPersonPlural: "ils/elles ",
};

export const frenchPronounFromConjugation = (
  conjugation: string,
  concatenate: Boolean
): string => {
  if (conjugation === "firstPersonSingular") {
    return concatenate ? "j'" : "je ";
  } else {
    return otherFrenchPronouns[conjugation];
  }
};

const englishPronouns: Pronouns = {
  firstPersonSingular: "I ",
  secondPersonSingular: "you ",
  thirdPersonSingular: "he/she ",
  firstPersonPlural: "we ",
  secondPersonPlural: "you (p) ",
  thirdPersonPlural: "they ",
};

export const englishPronounFromConjugation = (conjugation: string): string =>
  englishPronouns[conjugation];

export const getPronoun = (
  conjugation: string,
  language: string,
  concatenate: Boolean
) => {
  if (language === "french") {
    return frenchPronounFromConjugation(conjugation, concatenate) || "";
  } else {
    return englishPronounFromConjugation(conjugation) || "";
  }
};

/**
 * Compares the user's guess with the desired answer, taking into account
 * plural notation and case
 * @param guess
 * @param answer
 */
export const isSame = (guess: string, answer: string): boolean => {
  const answerWithoutPlural = answer.replace(" (p) ", " ");
  return guess.toLowerCase() === answerWithoutPlural.toLowerCase();
};

/**
 * Returns the current verb the user is learning
 * @param keysCount
 */
export const determineCurrentVerb = (keysCount: number) => {
  if (keysCount === 0) {
    return 0;
  } else {
    return Math.floor((keysCount - 1) / 7);
  }
};

/**
 * Return the current conjugation the user is learning (from 0 to 6)
 * @param keysCount
 */
export const determineCurrentConjugation = (keysCount: number) => {
  return keysCount % 7;
};

/**
 * Returns true if use has scored 2 or more on every verb-conjugation pair asked so far
 * @param rankings
 */
export const allRankingsAboveOne = (rankings: QuestionRankings): boolean => {
  return Object.values(rankings).filter((item) => item.score < 2).length === 0;
};

/**
 * Returns a conjugation number from 0 - 6 based on a mixture of chance and
 * which ones have a lower score (i.e. the user is getting them wrong)
 * @param rankings
 */
export const chooseConjugationFromRankings = (
  rankings: QuestionRankings,
  seed: string
): number => {
  const rng = seedrandom(seed); // Need to round this
  return rng();
};
