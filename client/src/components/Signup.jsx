import React from "react";
import registrationCOVER from "../images/registrationCOVER.jpg"
import { NavLink } from "react-router-dom"
const Signup = () => {
  return (
    <>
      <section className="signup ">
        <div className="container mt-5     shadow">
          <div className="signup-content row">
            <div className="signup-form col-sm-5 ">
              <h2 className="form-title ">Signup </h2>
              <form className="registration-form " id="registration-form">
                <div className="form-group">
                  <label htmlFor="name" className="">
                    <i class="zmdi zmdi-account"></i>
                  </label>
                  <input className=""
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="your name"
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email"></i>
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
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-phone-in-talk"></i>
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    placeholder="your phone"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <i class="zmdi zmdi-slideshow"></i>
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="off"
                    placeholder="your profession"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="your password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock"></i>
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
                  <input type="submit" name="signup" id="signup" className="form-submit btn btn-primary w-100" value="Register" />
                </div>
              </form>

            </div>
            <div className="signup-image col-sm-7  text-center">

              <img className="signup-coverImage img-fluid " src={registrationCOVER} alt="registration pic" />
              <NavLink to="/login" className="signup-image-link btn btn-primary ">I have already registered</NavLink>

            </div>

          </div>

        </div>
      </section>

    </>
  );
};

export default Signup;
