export interface Conjugation {
  french: string;
  concatenate?: boolean;
  english: string;
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

export interface VerbsByLanguage {
  [key: string]: Verb[];
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
