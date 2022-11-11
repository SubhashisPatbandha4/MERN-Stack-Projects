import React, { useState } from "react";
import registrationCOVER from "../images/registrationCOVER.jpg"
import { NavLink, useNavigate } from "react-router-dom"
import Navbar from './Navbar'


const Signup = () => {
  const navigate = useNavigate()

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

  // sending data from front end to backend(server)
  const postData = async (e) => {
    e.preventDefault()
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    })
    
 
    if (res.status === 422 ||!res) {//response made by server
      window.alert("Invalid Registration")
      console.log("invalid registration")
    }
    else {
      window.alert(" Registration Successful")
      console.log(" registration Successful")
      navigate("/login")
    }
  }
  return (
    <>
      <Navbar />
      <section className="signup ">
        <div className="container mt-5     shadow">
          <div className="signup-content row">
            <div className="signup-form col-sm-4 ">
              <h2 className="form-title ">Signup </h2>
              <form method="POST" className="registration-form " id="registration-form">
                <div className="form-group">
                  <label htmlFor="name" className="">
                    <i className="zmdi zmdi-account"></i>
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
                    <i className="zmdi zmdi-email"></i>
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
                    <i className="zmdi zmdi-phone-in-talk"></i>
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
                    <i className="zmdi zmdi-slideshow"></i>
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
                    <i className="zmdi zmdi-lock"></i>
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
                    <i className="zmdi zmdi-lock"></i>
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
                  <input type="submit" name="signup" id="signup" className="form-submit btn btn-primary w-100" value="Register" onClick={postData} />
                </div>
              </form>

            </div>
            <div className="signup-image col-sm-8  text-center">

              <img className="signup-coverImage img-fluid  " src={registrationCOVER} alt="registration pic" />
              <NavLink to="/login" className="signup-image-link btn btn-primary ">I have already registered</NavLink>

            </div>

          </div>

        </div>
      </section>

    </>
  );
};

export default Signup;
