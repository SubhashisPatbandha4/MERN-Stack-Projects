import React, { useState } from "react";
import registrationCOVER from "../images/registrationCOVER.jpg"
import { NavLink } from "react-router-dom"
import Navbar from './Navbar'


const Signup = () => {

  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  })
  const handleInput = (e) => {
    console.log(e)
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...user, [name]: value
    })
  }

  return (
    <>
      <Navbar />
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
                  <input value={user.name}
                    onChange={handleInput}
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
                  <input value={user.email}
                    onChange={handleInput}
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
                  <input value={user.phone}
                    onChange={handleInput}
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
                  <input value={user.work}
                    onChange={handleInput}
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
                  <input value={user.password}
                    onChange={handleInput}
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="your password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input value={user.cpassword}
                    onChange={handleInput}
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    placeholder="your confirm password"
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
