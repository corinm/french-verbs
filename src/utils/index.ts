import { Verb, Conjugation } from "../types";
import { getPronoun } from "../hooks/helpers";

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
