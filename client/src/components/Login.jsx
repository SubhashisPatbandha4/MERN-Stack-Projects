import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import loginCOVER from "../images/loginCover.jpg"
import Navbar from './Navbar'

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    })
    if (res.status === 400 || !res) {
      window.alert("Invalid Login")
      console.log("invalid Login")
    }
    else {
      window.alert(" Login Successful")
      console.log(" Login Successful")
      navigate("/")
    }
  }
  return (
    <>
      <Navbar />
      <section className="signup  ">
        <div className="container mt-5     shadow">
          <div className="signup-content row">
            <div className="signup-image text-center col-sm-5 ">

              <img className="signup-coverImage img-fluid" src={loginCOVER} alt="login pic" />
              <NavLink to="/signup" className="signup-image-link btn btn-primary ">Create an account</NavLink>

            </div>
            <div className="signup-form col-sm-4 ">
              <h2 className="form-title ">Login </h2>
              <form method="POST" className="registration-form " id="registration-form">

                <div className="form-group ">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="your password"
                  />
                </div>


                <div className="form-button mt-5">
                  <input type="submit" onClick={loginUser} name="signin" id="signin" className="form-submit btn btn-primary w-100  " value="Login" />
                </div>
              </form>

            </div>


          </div>

        </div>
      </section>
    </>
  );
};

export default Login;
