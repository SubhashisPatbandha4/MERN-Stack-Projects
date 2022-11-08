import React from "react";
import Navbar from './Navbar'

import homePic from "../images/homePic.jpg"
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homepage container-fluid row ">
        <div className="col-sm-4 mt-5">

          <h1>We are the <br /> <strong className="text-success">MERN Developers </strong> </h1>
        </div>
        <div className="col-sm-7">
          <img className="img-fluid  " src={homePic} alt="" />
        </div>


      </div>
    </>
  );
};

export default Home;
