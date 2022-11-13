import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";
import navlogo from "../images/navlogo.png";

const navbar = () => {
  const { state, dispatch } = useContext(UserContext)
  const RenderMenu = () => {
    if (state) {
      return (<>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">
            Logout
          </NavLink>
        </li>
      </>)
    }
    else {
      return (<>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            Signup
          </NavLink>
        </li>

      </>)
    }

  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            <img className="navlogo" src={navlogo} alt="logo" /> Techsubh
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <RenderMenu />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
