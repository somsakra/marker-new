import React from "react";
import "../scss/signup.scss";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const Signup = () => {
  return (
    <div>
      <div className="logo">
        <h1>
          <BorderColorIcon style={{ fontSize: "60px" }} />
        </h1>
        <p>Let's Mark</p>;
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
