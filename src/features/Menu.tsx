import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu as SemanticMenu } from "semantic-ui-react";
import { isNounsPath, isVerbsPath } from "../utils";

interface Location {
  pathname: string;
}

const Menu: React.FC = () => {
  const location: Location = useLocation();

  return (
    <div>
      <SemanticMenu pointing>
        <Link to="/french-verbs">
          <SemanticMenu.Item
            name="Welcome"
            active={location.pathname === "/french-verbs"}
          />
        </Link>
        <Link to="/french-verbs/nouns">
          <SemanticMenu.Item
            name="Nouns"
            active={isNounsPath(location.pathname)}
          />
        </Link>
        <Link to="/french-verbs/verbs">
          <SemanticMenu.Item
            name="Verbs"
            active={isVerbsPath(location.pathname)}
          />
        </Link>
      </SemanticMenu>
    </div>
  );
};

export default Menu;
