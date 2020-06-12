import React from "react";
import { Table } from "semantic-ui-react";

import { Verb, QuestionRankings as QuestionRankingsType } from "../types";
import { getVerb, convertRankingsIntoList, byWorstFirst } from "../utils";

const QuestionRankings: React.FC<{
  verbs: Verb[];
  questionRankings: QuestionRankingsType;
}> = ({ verbs, questionRankings }) => (
  <Table basic="very" celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Verb/Conjugation/Language</Table.HeaderCell>
        <Table.HeaderCell>Ranking (Higher = better)</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {convertRankingsIntoList(questionRankings)
        .sort(byWorstFirst)
        .map((item, i) => {
          const { verbIndex, conjugation, questionLanguage } = item.meta;
          const label = getVerb(
            verbs,
            verbIndex,
            conjugation,
            questionLanguage
          );
          return (
            <Table.Row key={i}>
              <Table.Cell>{label}</Table.Cell>
              <Table.Cell>{item.score}</Table.Cell>
            </Table.Row>
          );
        })}
    </Table.Body>
  </Table>
);

export default QuestionRankings;
