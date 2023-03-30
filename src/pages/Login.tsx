import React from "react";
import "../scss/login.scss";

const Login = () => {
  return (
    <div className="login">
      <h1>Logo</h1>
      <h1>Sign in to Keeper</h1>;
      <form>
        <p>E-mail</p>
        <input type="text" />
        <span>Password</span>
        <span>Forgot password? </span>
        <input type="text" />
        <button>Sign in</button>
      </form>
      <div>
        <p>New user? Create an account.</p>
      </div>
    </div>
  );
};

export default Login;
