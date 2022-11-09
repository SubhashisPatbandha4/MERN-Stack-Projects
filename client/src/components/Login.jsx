import React from "react";
import { NavLink } from "react-router-dom"
import loginCOVER from "../images/loginCover.jpg"
import Navbar from './Navbar'

const Login = () => {
  return (
    <>
    <Navbar/>
      <section className="signup  ">
        <div className="container mt-5     shadow">
          <div className="signup-content row">
            <div className="signup-image text-center col-sm-5 ">

              <img className="signup-coverImage img-fluid" src={loginCOVER} alt="login pic" />
              <NavLink to="/signup" className="signup-image-link btn btn-primary ">Create an account</NavLink>

            </div>
            <div className="signup-form col-sm-4 ">
              <h2 className="form-title ">Login </h2> 
              <form className="registration-form " id="registration-form">

                <div className="form-group ">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="emails"
                    autoComplete="off"
                    placeholder="your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="your password"
                  />
                </div>


                <div className="form-button mt-5">
                  <input type="submit" name="signin" id="signin" className="form-submit btn btn-primary w-100  " value="Login" />
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
