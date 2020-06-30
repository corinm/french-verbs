import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu as SemanticMenu } from "semantic-ui-react";

interface Location {
  pathname: string;
}

const root = "/french-verbs/verbs";
const testPath = `${root}/test`;
const answersPath = `${root}/answers`;
const listPath = `${root}/list`;

const VerbsMenu: React.FC = () => {
  const location: Location = useLocation();

  return (
    <SemanticMenu pointing>
      <Link to={testPath}>
        <SemanticMenu.Item
          name="Test me"
          active={location.pathname === testPath}
        />
      </Link>
      <Link to={answersPath}>
        <SemanticMenu.Item
          name="Answer history"
          active={location.pathname === answersPath}
        />
      </Link>
      <Link to={listPath}>
        <SemanticMenu.Item
          name="List of verbs"
          active={location.pathname === listPath}
        />
      </Link>
    </SemanticMenu>
  );
};

export default VerbsMenu;
