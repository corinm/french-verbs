import { Meta, Verb, Conjugation } from "../types";
import { getPronoun } from "../features/verbs/hooks/helpers";

const randomNumber = (rng: Function, min: number, max: number): number =>
  Math.floor(rng() * (max - min + 1) + min);

export const pickQuestion = (rng: Function, list: Meta[]): number => {
  return randomNumber(rng, 0, list.length - 1);
};

export const getVerb = (
  verbs: Verb[],
  verbIndex: number,
  conjugation: string,
  language: string
): string => {
  const conjugationData: Conjugation = verbs[verbIndex][conjugation];
  const pronoun: string = getPronoun(
    conjugation,
    language,
    !!conjugationData.concatenate
  );
  const verb: string = conjugationData[language];
  return `${pronoun}${verb}`;
};

export const isNounsPath = (path: string): boolean =>
  path.includes("/french-verbs/nouns");

export const isVerbsPath = (path: string): boolean =>
  path.includes("/french-verbs/verbs");
