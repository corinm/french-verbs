import React from "react";
import { Route } from "react-router-dom";

import NounsMenu from "./NounsMenu";
import ListNouns from "./ListNouns";

import nouns from "../data";

const root = "/french-verbs/nouns";
// const testPath = `${root}/test`;
// const answersPath = `${root}/answers`;
const listPath = `${root}/list`;

const Nouns: React.FC = () => (
  <>
    <NounsMenu />
    <div>Nouns</div>
    <Route path={listPath} render={() => <ListNouns nouns={nouns} />}></Route>
  </>
);

export default Nouns;
