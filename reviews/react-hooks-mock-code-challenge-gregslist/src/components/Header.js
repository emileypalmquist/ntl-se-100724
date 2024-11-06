import React from "react";
import Search from "./Search";

function Header({ onUpdateSearchTerm }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onUpdateSearchTerm={onUpdateSearchTerm} />
    </header>
  );
}

export default Header;
