import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import "../index.css";
import { AppContext } from "../context/store";
import { loginUser } from "../context/actions";

function Login() {
  const {  dispatch } = useContext(AppContext);

  const navigate = useNavigate();
  const [loginFormData, setLoginFom] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setLoginFom((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    loginUser(dispatch, { email, password });
    event.preventDefault();
    navigate("/");
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user != null) {
        // navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { email, password } = loginFormData;

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <h3>Email:</h3>
          <div className="input-wrapper">
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="form-group">
          <h3>Password:</h3>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
      <h3>
        {" "}
        Don't have an account? <Link to="/signUp">SignUp</Link>
      </h3>
    </div>
  );
}

export default Login;
