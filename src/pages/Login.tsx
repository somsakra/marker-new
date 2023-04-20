import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { userLogin } from "../features/userSlice";
import "../scss/login.scss";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Header from "../components/Header";

const Login = () => {
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
    const result = await dispatch(userLogin(credential));
    localStorage.setItem("token", result.payload.token);
    localStorage.setItem("email", result.payload.email);
    window.location.href = "/";
  };

  return (
    <div>
      <div className="logo">
        <h1>
          <BorderColorIcon style={{ fontSize: "60px" }} />
        </h1>
        <p>Sign in to Marker</p>
      </div>
      <div className="login">
        <p>Email address</p>
        <input
          type="text"
          name="email"
          value={credential.email}
          onChange={handleInputChange}
        />
        <div className="password">
          <span>Password</span>
          <div></div>
          <a className="button" href="#" tabIndex={-1}>
            Forgot password?
          </a>
        </div>
        <input
          type="password"
          name="password"
          value={credential.password}
          onChange={handleInputChange}
        />
        {credential.email.length !== 0 && credential.password.length !== 0 ? (
          <button onClick={handleSubmit}>Sign in</button>
        ) : (
          <button disabled>Sign in</button>
        )}

        <p className="login-message">{user.value.message}</p>
      </div>
      <div className="create-account">
        <p>New user?&nbsp;</p>
        <a className="button" href="/signup">
          Create an account.
        </a>
      </div>
    </div>
  );
};

export default Login;
