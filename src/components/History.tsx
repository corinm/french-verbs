import React from "react";
import { List, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { Verb, AnswerHistoryItem, QuestionRankings } from "../types";
import { getPronoun } from "../hooks/helpers";

const NoHistory: React.FC = () => (
  <span>
    Nothing to display, try <Link to="/">answering some questions!</Link>
  </span>
);

const QuestionRanking: React.FC<{
  verbs: Verb[];
  questionRankings: QuestionRankings;
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

const AnswerList: React.FC<{ answerHistory: AnswerHistoryItem[] }> = ({
  answerHistory,
}) => (
  <List>
    {answerHistory.map((item, i) => (
      <List.Item key={i}>
        <List.Icon name={item.wasCorrect ? "check" : "times"} />
        <List.Content>{item.question}</List.Content>
      </List.Item>
    ))}
  </List>
);

const History: React.FC<{
  answerHistory: AnswerHistoryItem[];
  questionRankings: QuestionRankings;
  verbs: Verb[];
}> = ({ answerHistory, questionRankings, verbs }) => {
  if (answerHistory.length === 0) {
    return <NoHistory />;
  }

  return (
    <div>
      <QuestionRanking verbs={verbs} questionRankings={questionRankings} />
      <AnswerList answerHistory={answerHistory} />
    </div>
  );
};

export default History;
