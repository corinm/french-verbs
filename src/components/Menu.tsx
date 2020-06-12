import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu as SemanticMenu } from "semantic-ui-react";

interface Location {
  pathname: string;
}

const Menu: React.FC = () => {
  const location: Location = useLocation();

  return (
    <SemanticMenu pointing>
      <Link to="/french-verbs/">
        <SemanticMenu.Item
          name="Test me"
          active={location.pathname === "/french-verbs/"}
        />
      </Link>
      <Link to="/french-verbs/history">
        <SemanticMenu.Item
          name="Answer history"
          active={location.pathname === "/french-verbs/history"}
        />
      </Link>
      <Link to="/french-verbs/list">
        <SemanticMenu.Item
          name="List of verbs"
          active={location.pathname === "/french-verbs/list"}
        />
      </Link>
    </SemanticMenu>
  );
};

export default Menu;
