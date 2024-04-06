import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const checkLogin = (storedEmail, storedPassword) => {
    return email === storedEmail && password === storedPassword;
  };

  const addUser = (e) => {
    e.preventDefault();
    const storedSignup = localStorage.getItem("userSignup");
    if (storedSignup) {
      const { email: storedEmail, password: storedPassword } = JSON.parse(
        storedSignup
      );
      if (checkLogin(storedEmail, storedPassword)) {
        alert("Login Successful");
        navigate("/home");
      } else {
        setError("Invalid email or password");
      }
    } else {
      setError("You need to sign up first");
    }
  };

  return (
    <section id="login-form">
      <div className="container pt-5">
        <div className=" col-sm-4 log mx-auto ">
          <div className="alert_login alert  ">
            <h2 className="alert alert-info text-center font-weight-bold ">
              {" "}
              Login User{" "}
            </h2>
            <form method="post" onSubmit={addUser}>
              <div className="form-group">
                <label className="label">Enter Email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  onChange={inputHandler}
                />
              </div>
              <div className="from-group">
                <label className="label">Enter Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Password"
                  onChange={inputHandler}
                />
                {error && <div className="text-danger mt-2">{error}</div>}
              </div>
              <div className="login-btn">
                <button className="btn btn-info mt-4 login ">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
