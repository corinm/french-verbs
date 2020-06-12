import { Verb, Conjugation, QuestionRankings, RankingItem } from "../types";
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

export const convertRankingsIntoList = (
  questionRankings: QuestionRankings
): RankingItem[] =>
  Object.entries(questionRankings).map(([hash, { meta, score }]) => ({
    hash,
    meta,
    score,
  }));

export const byWorstFirst = (a: RankingItem, b: RankingItem): number => {
  if (a.score > b.score) {
    return 1;
  } else if (a.score < b.score) {
    return -1;
  } else {
    return 0;
  }
};
