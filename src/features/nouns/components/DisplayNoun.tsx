import React from "react";
import { List } from "semantic-ui-react";

import { Noun, Gender } from "../../../types";

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
  <List.Item>
    <List.Content>
      <List.Header>
        {french}
        {gender === "masculine" ? " (m)" : " (f)"}
      </List.Header>
      <List.Description>
        {renderDefiniteArticle(french, gender)}
        {" | "}
        {renderIndefiniteArticle(french, gender)}
      </List.Description>
    </List.Content>
  </List.Item>
);

export default DisplayNoun;
