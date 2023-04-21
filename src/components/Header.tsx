import { useAppDispatch, useAppSelector } from "../app/hook";
import { logout } from "../features/userSlice";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";

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
        <h1>{user.value.email?.split("@")[0]}</h1>
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
