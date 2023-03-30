import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import "../scss/header.scss";
function Header() {
  return (
    <header>
      <h1>
        <BorderColorIcon style={{ fontSize: "35px" }} />
        &nbsp; Marker
      </h1>
    </header>
  );
}

export default Header;
