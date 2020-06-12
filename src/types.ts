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
  questionLanguage: string;
  answerLanguage: string;
}

export interface AnswerHistoryItem {
  question: string;
  meta: Meta;
  wasCorrect: boolean;
}

export interface OtherHistory {
  [key: string]: number;
}
