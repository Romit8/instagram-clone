import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignupForm = () => {
  const navigate = useNavigate(); 
  const [signup, setSignup] = useState({
    email: "",
    password: "",
  });
  const inputHandler = (event) => {
    setSignup({ ...signup, [event.target.name]: event.target.value });
  };
  const addUser = (event) => {
    event.preventDefault();
    console.log(signup);
    localStorage.setItem("userSignup", JSON.stringify(signup)); 
    alert("signup successfull");
    navigate("/login");
  };
  return (
    <section id="Signup-form">
      <div className="container pt-5">
        <div className=" col-sm-4 log mx-auto ">
          <div className="alert_signup alert  ">
            <h2 className="alert alert-info text-center font-weight-bold ">
              Signup Form
              <br />
             <span><h6>Create User Account</h6> </span>
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
              </div>
              <div className="login-btn">
                <button className="btn btn-info mt-4 login ">Signup</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
