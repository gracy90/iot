import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db } from "../firebase.config";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";

function SignUp() {
  const navigate = useNavigate();
  const [loginFormData, setLoginFom] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setLoginFom((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      updateProfile(auth.currentUser, { displayName: username });
      navigate("/");
    } catch (error) {}
  };

  const { username, email, password } = loginFormData;

  return (
    <div className="login-container">
      <h1 className="login-heading">Create an account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <h3>Username:</h3>
          <input id="username" type="text" value={username} onChange={handleChange} style={{ marginRight: 5 }} />
        </div>
        <div className="form-group">
          <h3>Email:</h3>
          <input id="email" type="text" value={email} onChange={handleChange} style={{ marginLeft: 42 }} />
        </div>
        <div className="form-group">
          <h3>Password:</h3>
          <input id="password" type="password" value={password} onChange={handleChange} style={{ marginLeft: 0 }} />
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
      <h3>
        Don't have an account? <Link to="/login">Login</Link>
      </h3>
    </div>
  );
}

export default SignUp;
