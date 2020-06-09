export interface Conjugation {
  french: String;
  concatenate?: Boolean;
  english: String;
}

export interface Verb {
  infinitive: Conjugation;
  firstPersonSingular: Conjugation;
  secondPersonSingular: Conjugation;
  thirdPersonSingular: Conjugation;
  firstPersonPlural: Conjugation;
  secondPersonPlural: Conjugation;
  thirdPersonPlural: Conjugation;
}
