import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import aboutusPic from "../images/aboutusPic.jpg"
import Navbar from './Navbar'

const About = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({})
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "appllication/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
      const data = await res.json()
      console.log(data)
      setUserData(data)
      // window.alert(data.name)

      if (!res.status === 200) {
        const error = new Error(res.error)
        throw error
      }


    } catch (error) {
      console.log(error)
      navigate("/login")
    }
  }
  useEffect(() => {//we cant use async function inside the useEffect
    callAboutPage()
  }, []);


  return (
    <>
      <Navbar />
      <div className="container shadow-sm">
        <form method>
          <div className="row">
            <div className="col-md-4">
              <img className="profile-pic img-fluid" src={aboutusPic} alt="profile pic" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h3 className="h3 text-primary ">Web developer</h3>
                <p className="profile-rating mt-3 mb-5 abs">Rankings: <span>1/10</span> </p>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-about" type="button" role="tab" aria-controls="pills-home" aria-selected="true">About</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-timeline" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Timeline</button>
                  </li>

                </ul>

              </div>
            </div>
            <div className="col-md-2 ">
              <input type="submit" className="profile-edit-btn btn btn-warning " name="addMore" value="edit-profile" />
            </div>


          </div>
          <div className="row">
            <div className="col-md-4">
              <p>WORK LINKS</p>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/subhashis-patbandha-11859122b/" target="linkedin">LinkedIn</a>

                </li>
                <li>

                  <a href="https://github.com/SubhashisPatbandha4" target="github">Github</a>
                </li>
              </ul>
            </div>
            <div className="col-md-8 pl-5 about-info ">

              <div className="tab-content " id="pills-tabContent">
                <div className="tab-pane fade show active " id="pills-about" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div className="row">

                    <div className="col-sm-6 ">
                      <label> User Id</label>
                    </div>
                    <div className="col-sm-6 text-primary ">
                      <p>3243345553555345</p>
                    </div>

                  </div>
                  <div className="row mt-1">

                    <div className="col-sm-6 ">
                      <label>Name</label>
                    </div>
                    <div className="col-sm-6 text-primary ">
                      <p>{userData.name}</p>
                    </div>

                  </div>
                  <div className="row mt-1">

                    <div className="col-sm-6 ">
                      <label>Email</label>
                    </div>
                    <div className="col-sm-6 text-primary ">
                      <p>{userData.email}</p>
                    </div>

                  </div>
                  <div className="row mt-1">

                    <div className="col-sm-6 ">
                      <label>Phone</label>
                    </div>
                    <div className="col-sm-6 text-primary ">
                      <p>{userData.phone}</p>
                    </div>

                  </div>
                  <div className="row mt-1">

                    <div className="col-sm-6 ">
                      <label>Profession</label>
                    </div>
                    <div className="col-sm-6 text-primary ">
                      <p>{userData.work}</p>
                    </div>

                  </div>
                </div>
                <div className="tab-pane fade" id="pills-timeline" role="tabpanel" aria-labelledby="pills-profile-tab">       <div className="row">

                  <div className="col-sm-6 ">
                    <label> Experience</label>
                  </div>
                  <div className="col-sm-6 text-primary ">
                    <p>Intermediate</p>
                  </div>

                </div>
                  <div className="row mt-1">

                    <div className="col-sm-6 ">
                      <label>Hourly Rate</label>
                    </div>
                    <div className="col-sm-6 text-primary ">
                      <p>8hr/day</p>
                    </div>

                  </div>
                  <div className="row mt-1">

                    <div className="col-sm-6 ">
                      <label>Total Projects</label>
                    </div>
                    <div className="col-sm-6 text-primary ">
                      <p>12</p>
                    </div>

                  </div>
                  <div className="row mt-1">

                    <div className="col-sm-6 ">
                      <label>English Level</label>
                    </div>
                    <div className="col-sm-6 text-primary ">
                      <p>Intermediate</p>
                    </div>

                  </div>
                  <div className="row mt-1">

                    <div className="col-sm-6 ">
                      <label>Availibility</label>
                    </div>
                    <div className="col-sm-6 text-primary ">
                      <p>6 Months</p>
                    </div>

                  </div></div>

              </div>

            </div>
          </div>



        </form>
      </div>
    </>
  );
};

export default About;
