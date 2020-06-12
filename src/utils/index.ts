import {
  Verb,
  Meta,
  Conjugation,
  QuestionRankings,
  RankingItem,
} from "../types";
import { getPronoun } from "../hooks/helpers";

export const getVerbTextWithPronoun = (verbs: Verb[], meta: Meta): string => {
  const conjugation: Conjugation = verbs[meta.verbIndex][meta.conjugation];
  const pronoun: string = getPronoun(
    meta.conjugation,
    meta.questionLanguage,
    !!conjugation.concatenate
  );
  const verb: string = conjugation[meta.questionLanguage];
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
