import React from "react";
import styled from "styled-components";

import { Verb } from "../types";

const VerbContainer = styled.div`
  border: 1px solid black;
  padding: 5px;
`;
const PronounText = styled.span`
  color: grey;
`;
const VerbText = styled.span`
  color: red;
`;

const Conjugation: React.FC<{ pronoun: String; verb: String }> = ({
  pronoun,
  verb,
}) => (
  <div>
    <PronounText>{pronoun}</PronounText>
    <VerbText>{verb}</VerbText>
  </div>
);

const DisplayVerb: React.FC<Verb> = ({
  infinitive,
  firstPersonSingular,
  secondPersonSingular,
  thirdPersonSingular,
  firstPersonPlural,
  secondPersonPlural,
  thirdPersonPlural,
}) => (
  <VerbContainer>
    <Conjugation pronoun="" verb={infinitive.french} />
    <Conjugation
      pronoun={firstPersonSingular.concatenate ? "j'" : "je "}
      verb={firstPersonSingular.french}
    />
    <Conjugation pronoun="tu " verb={secondPersonSingular.french} />
    <Conjugation pronoun="il/elle " verb={thirdPersonSingular.french} />
    <Conjugation pronoun="nous " verb={firstPersonPlural.french} />
    <Conjugation pronoun="vous " verb={secondPersonPlural.french} />
    <Conjugation pronoun="ils/elles " verb={thirdPersonPlural.french} />
  </VerbContainer>
);

export default DisplayVerb;
