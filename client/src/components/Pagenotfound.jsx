import React from "react";
import { NavLink } from "react-router-dom";
import pageError from "../images/404Pic.jpg"
const Pagenotfound = () => {
  return <>
    <div className="notfound-container ">
      <div className="container-fluid  text-center ">

        <img className="img-fluid  w-50" src={pageError} alt="error pic" />
        <h1 ><strong>WE ARE SORRY , PAGE NOT FOUND :( </strong></h1>
      </div>
      <div className="text-center">

        <NavLink className="btn text-white mt-2 bg-danger px-5 " to="/">Back to Home Page</NavLink>
      </div>
    </div>
  </>;
};

export default Pagenotfound;
