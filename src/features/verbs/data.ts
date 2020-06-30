import { Verb } from "../../types";

const verbs: Verb[] = [
  {
    infinitive: { french: "aimer", english: "to like" },
    firstPersonSingular: { french: "aime", english: "like", concatenate: true },
    secondPersonSingular: { french: "aimes", english: "like" },
    thirdPersonSingular: { french: "aime", english: "likes" },
    firstPersonPlural: { french: "aimons", english: "like" },
    secondPersonPlural: { french: "aimez", english: "like" },
    thirdPersonPlural: { french: "aiment", english: "like" },
  },
  {
    infinitive: { french: "avoir", english: "to have" },
    firstPersonSingular: { french: "ai", english: "have", concatenate: true },
    secondPersonSingular: { french: "as", english: "have" },
    thirdPersonSingular: { french: "a", english: "has" },
    firstPersonPlural: { french: "avons", english: "have" },
    secondPersonPlural: { french: "avez", english: "have" },
    thirdPersonPlural: { french: "ont", english: "have" },
  },
  {
    infinitive: { french: "aller", english: "to go" },
    firstPersonSingular: { french: "vais", english: "go" },
    secondPersonSingular: { french: "vas", english: "go" },
    thirdPersonSingular: { french: "va", english: "goes" },
    firstPersonPlural: { french: "allons", english: "go" },
    secondPersonPlural: { french: "allez", english: "go" },
    thirdPersonPlural: { french: "vont", english: "go" },
  },
];

export default verbs;
