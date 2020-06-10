import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu as SemanticMenu } from "semantic-ui-react";

const Menu = () => {
  const location = useLocation();

  return (
    <SemanticMenu pointing>
      <Link to="/">
        <SemanticMenu.Item name="Test me" active={location.pathname === "/"} />
      </Link>
      <Link to="/list">
        <SemanticMenu.Item
          name="List of verbs"
          active={location.pathname === "/list"}
        />
      </Link>
    </SemanticMenu>
  );
};

export default Menu;
