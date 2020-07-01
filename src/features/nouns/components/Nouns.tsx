import React from "react";
import { Route } from "react-router-dom";

import NounsMenu from "./NounsMenu";
import ListNouns from "./ListNouns";

import nouns from "../data";

const root = "/french-verbs/nouns";
const testPath = `${root}/test`;
const answersPath = `${root}/answers`;
const listPath = `${root}/list`;

const Nouns: React.FC = () => (
  <>
    <NounsMenu />
    <Route path={testPath} render={() => <div>Test</div>}></Route>
    <Route path={answersPath} render={() => <div>Answers</div>}></Route>
    <Route path={listPath} render={() => <ListNouns nouns={nouns} />}></Route>
  </>
);

export default Nouns;
