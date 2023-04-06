import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { userSignup } from "../features/userSlice";
import "../scss/signup.scss";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Header from "../components/Header";

const Signup = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  interface ICredential {
    email: string;
    password: string;
  }

  const [credential, setCredential] = useState<ICredential>({
    email: "",
    password: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setCredential({ ...credential, [name]: value });
  };

  const handleSubmit = async () => {
    const result = await dispatch(userSignup(credential));
    setCredential({ email: "", password: "" });
  };

  return (
    <div>
      <Header />
      <div className="logo">
        <h1>
          <BorderColorIcon style={{ fontSize: "60px" }} />
        </h1>
        <p>Let's Mark</p>;
      </div>
      <div className="signup">
        <p>Email address</p>
        <input
          type="text"
          name="email"
          value={credential.email}
          onChange={handleInputChange}
        />
        <div className="password">
          <span>Password</span>
        </div>
        <input
          type="password"
          name="password"
          value={credential.password}
          onChange={handleInputChange}
        />
        {credential.email.length !== 0 && credential.password.length !== 0 ? (
          <button onClick={handleSubmit}>Sign up</button>
        ) : (
          <button disabled>Sign up</button>
        )}
        <p className="login-message">{user.value.message}</p>
        <div className="back-to-login">
          <a className="button" href="/login">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
