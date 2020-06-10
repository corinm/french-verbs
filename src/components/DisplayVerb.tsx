import React from "react";
import styled from "styled-components";
import { Header, Segment } from "semantic-ui-react";

import { Verb } from "../types";

const VerbContainer = styled.div`
  margin-bottom: 10px;
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
    <Segment.Group>
      <Segment>
        <Header as="h2">{infinitive.french}</Header>
      </Segment>
      <Segment.Group horizontal>
        <Segment>
          <Conjugation
            pronoun={firstPersonSingular.concatenate ? "j'" : "je "}
            verb={firstPersonSingular.french}
          />
          <Conjugation pronoun="tu " verb={secondPersonSingular.french} />
          <Conjugation pronoun="il/elle " verb={thirdPersonSingular.french} />
        </Segment>
        <Segment>
          <Conjugation pronoun="nous " verb={firstPersonPlural.french} />
          <Conjugation pronoun="vous " verb={secondPersonPlural.french} />
          <Conjugation pronoun="ils/elles " verb={thirdPersonPlural.french} />
        </Segment>
      </Segment.Group>
    </Segment.Group>
  </VerbContainer>
);

export default DisplayVerb;
