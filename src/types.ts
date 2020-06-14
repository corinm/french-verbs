export interface Conjugation {
  french: String;
  concatenate?: Boolean;
  english: String;
  [key: string]: any;
}

export interface Verb {
  infinitive: Conjugation;
  firstPersonSingular: Conjugation;
  secondPersonSingular: Conjugation;
  thirdPersonSingular: Conjugation;
  firstPersonPlural: Conjugation;
  secondPersonPlural: Conjugation;
  thirdPersonPlural: Conjugation;
  [key: string]: any;
}

export interface Meta {
  verbIndex: number;
  conjugation: string;
  language: string;
}

export interface AnswerHistoryItem {
  question: string;
  meta: Meta;
  wasCorrect: boolean;
}

export interface RankingItem {
  meta: Meta;
  score: number;
}

export interface QuestionRankings {
  [key: string]: RankingItem;
}
