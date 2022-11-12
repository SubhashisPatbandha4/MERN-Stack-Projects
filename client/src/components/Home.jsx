import React, { useEffect, useState } from "react";
import Navbar from './Navbar'

import homePic from "../images/homePic.jpg"
const Home = () => {
  const [show, setShow] = useState(false)
  const [userName, setUserName] = useState("")
  const callHomePage = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {

          "Content-Type": "application/json"
        },
      })
      const data = await res.json()
      console.log(data)
      setUserName(data.name)
      setShow(true)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {//we cant use async function inside the useEffect
    callHomePage()
  }, []);

  return (
    <>
      <Navbar />
      <div className="homepage container-fluid row ">
        <div className="col-sm-4 mt-5">
          <b>Welcome</b>
          <h1 className="text-success">{userName}</h1>
          <h3 >{show ? 'Happy to see you back' : "We are the MERN Developers  "}</h3>
        </div>
        <div className="col-sm-7">
          <img className="img-fluid  " src={homePic} alt="" />
        </div>


      </div>
    </>
  );
};

export default Home;
