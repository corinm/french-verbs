import React from "react";
import styled from "styled-components";
import { Segment } from "semantic-ui-react";

import { Noun, Gender } from "../../../types";

const NounContainer = styled.div`
  margin-bottom: 10px;
`;

const startsWithVowel = (word: string): boolean => {
  const firstLetter = word.substr(0, 1);
  const vowels = ["a", "e", "é", "i", "o", "u"];
  return vowels.includes(firstLetter);
};

const startsWithH = (word: string): boolean => {
  const firstLetter = word.substr(0, 1);
  return firstLetter === "h";
};

const renderDefiniteArticle = (french: string, gender: Gender): string => {
  if (startsWithVowel(french) || startsWithH(french)) {
    return `l'${french}`;
  } else if (gender === "masculine") {
    return `le ${french}`;
  } else {
    return `la ${french}`;
  }
};

const renderIndefiniteArticle = (french: string, gender: Gender): string => {
  if (gender === "masculine") {
    return `un ${french}`;
  } else {
    return `une ${french}`;
  }
};

const DisplayNoun: React.FC<Noun> = ({ french, gender }) => (
  <NounContainer>
    <Segment.Group horizontal>
      <Segment>{renderDefiniteArticle(french, gender)}</Segment>
      <Segment>{renderIndefiniteArticle(french, gender)}</Segment>
    </Segment.Group>
  </NounContainer>
);

export default DisplayNoun;
