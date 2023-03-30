import React from "react";
import "../scss/login.scss";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const Login = () => {
  return (
    <div>
      <div className="logo">
        <h1>
          <BorderColorIcon style={{ fontSize: "60px" }} />
        </h1>
        <p>Sign in to Marker</p>;
      </div>
      <div className="login">
        <form>
          <p>Email address</p>
          <input type="text" />
          <div className="password">
            <span>Password</span>
            <div></div>
            <a className="button" href="#">
              Forgot password?
            </a>
          </div>
          <input type="password" />
          <button>Sign in</button>
        </form>
      </div>
      <div className="create-account">
        <p>New user?&nbsp;</p>
        <a className="button" href="#">
          Create an account.
        </a>
      </div>
    </div>
  );
};

export default Login;
