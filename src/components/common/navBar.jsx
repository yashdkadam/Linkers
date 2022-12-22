import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <Link className="navbar-brand" to="/" style={{ paddingLeft: 10 }}>
        Links
      </Link>
      <a
        className="navbar-brand "
        href="/display"
        target="_blank"
        rel="noreferrer"
      >
        <u>My Link Page</u>
      </a>
    </nav>
  );
};

export default NavBar;
