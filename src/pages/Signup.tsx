import React from "react";
import "../scss/signup.scss";

const Signup = () => {
  return (
    <div>
      <div className="logo">
        <h1>Keeper</h1>
        <p>Let's keep</p>;
      </div>
      <div className="signup">
        <form>
          <p>Email address</p>
          <input type="text" />
          <div className="password">
            <span>Password</span>
          </div>
          <input type="password" />
          <button>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
