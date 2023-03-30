import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

import "../scss/header.scss";
function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
