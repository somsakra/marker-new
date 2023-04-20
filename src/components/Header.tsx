import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { logout } from "../features/userSlice";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "../scss/header.scss";
import { Link } from "react-router-dom";
function Header() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  return (
    <header>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>
          <BorderColorIcon style={{ fontSize: "30px" }} />
          &nbsp; {user.value.email?.split("@")[0]}
        </h1>
      </Link>

      <div></div>
      <h1>
        <Button onClick={handleLogout}>
          <LogoutIcon style={{ fontSize: "30px", color: "white" }} />
        </Button>
      </h1>
    </header>
  );
}

export default Header;
