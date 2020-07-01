import React from "react";
import { Link } from "react-router-dom";

const NoHistory: React.FC = () => (
  <span>
    Nothing to display, try <Link to="/">answering some questions!</Link>
  </span>
);

export default NoHistory;
