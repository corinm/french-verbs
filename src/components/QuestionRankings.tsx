import React from "react";
import { Table } from "semantic-ui-react";

import { Verb, QuestionRankings as QuestionRankingsType } from "../types";
import { getPronoun } from "../hooks/helpers";

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
      {Object.entries(questionRankings)
        .map(([hash, { meta, score }]) => ({ hash, meta, score }))
        .sort((a, b) => {
          if (a.score > b.score) {
            return 1;
          } else if (a.score < b.score) {
            return -1;
          } else {
            return 0;
          }
        })
        .map((item, i) => {
          const pronoun = getPronoun(
            item.meta.conjugation,
            item.meta.questionLanguage,
            verbs[item.meta.verbIndex][item.meta.conjugation].concatenate
          );
          const verb =
            verbs[item.meta.verbIndex][item.meta.conjugation][
              item.meta.questionLanguage
            ];
          return (
            <Table.Row key={i}>
              <Table.Cell>
                {pronoun}
                {verb}
              </Table.Cell>
              <Table.Cell>{item.score}</Table.Cell>
            </Table.Row>
          );
        })}
    </Table.Body>
  </Table>
);

export default QuestionRankings;
