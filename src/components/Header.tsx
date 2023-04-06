import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { logout } from "../features/userSlice";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "../scss/header.scss";
import { Link } from "react-router-dom";
function Header() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const gotoSignIn = () => {
    window.location.href = "/login";
  };

  return (
    <header>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>
          <BorderColorIcon style={{ fontSize: "35px" }} />
          &nbsp; {import.meta.env.VITE_APP_TITLE}
        </h1>
      </Link>

      <div></div>
      <h1>
        <span>{user.value.email} &nbsp;</span>

        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <AccountCircleIcon style={{ fontSize: "35px", color: "white" }} />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {user.value.email ? (
            <div>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>DashBoard</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </div>
          ) : (
            <MenuItem onClick={gotoSignIn}>Login</MenuItem>
          )}
        </Menu>
      </h1>
    </header>
  );
}

export default Header;
