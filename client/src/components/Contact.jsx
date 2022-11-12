import React, { useEffect, useState } from "react";
import Navbar from './Navbar'

const Contact = () => {

  const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" })
  const callContactPage = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {

          "Content-Type": "application/json"
        },

      })
      const data = await res.json()
      console.log(data)
      setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone, message: data.message })


      if (!res.status === 200) {
        const error = new Error(res.error)
        throw error
      }


    } catch (error) {
      console.log(error)
      // navigate("/login")
    }
  }
  useEffect(() => {//we cant use async function inside the useEffect
    callContactPage()
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value })
  }
  //send the data to the backend
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({//name:name 1st one is database field and 2nd is the field where user enters the value
        name, email, phone, message
      })
    })
    const data = await res.json()
    if (res.status != 201) {

      window.alert("Please fill all the details")
      console.log("message not send")
    }

    else {
      window.alert("Message send Successfully")
      setUserData({ ...userData, message: "" })
    }
  }
  return (
    <>
      <Navbar />
      <div className="contact-info">
        <div className="container-fluid">

          <div className="col-lg-12 d-flex row">
            <div className="contact-info-item d-flex justify-content-start align-items-center shadow col-sm-3" >
              <img style={{ height: "30px" }} src="https://img.freepik.com/free-vector/human-hand-holding-mobile-phone-with-text-messages_74855-6531.jpg?size=626&ext=jpg&uid=R81755913" alt="phone" />
              <div className="contact-info-contact">
                <div className="contact-info-title">
                  phone
                </div>
                <div className="contact-info-text">
                  1234567890
                </div>
              </div>
            </div>
            <div className="contact-info-item d-flex justify-content-start align-items-center shadow col-sm-3" >
              <img style={{ height: "30px" }} src="https://img.freepik.com/free-vector/mail-write-get-send-icons-vector-illustration-flat-style_1284-42663.jpg?w=740&t=st=1667839042~exp=1667839642~hmac=8cc388b9906c7d717a579d6dfff01fb309765d16d78a502077a05f3108a5c4f3" alt="phone" />
              <div className="contact-info-contact">
                <div className="contact-info-title">
                  Email
                </div>
                <div className="contact-info-text">
                  subh@gmail.com
                </div>
              </div>
            </div>
            <div className="contact-info-item d-flex justify-content-start align-items-center shadow col-sm-3" >
              <img style={{ height: "30px" }} src="https://img.freepik.com/free-vector/location-based-promotion-geolocation-software-online-gps-app-navigation-system-geographic-restriction-man-searching-address-with-magnifier-concept-illustration_335657-2082.jpg?w=740&t=st=1667839479~exp=1667840079~hmac=04ec8ebc6bb99d0949d8667bfafe5ed30095dc95a25af401673ba246db31ea6e" alt="phone" />
              <div className="contact-info-contact">
                <div className="contact-info-title">
                  Address
                </div>
                <div className="contact-info-text">
                  bbsr
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* contact us form */}
      <div className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 shadow">
              <div className="contact-form-container py-4">
                <div className="contact-form-title text-center">
                  Contact Us
                </div>
                <form method="POST" id="contact-form">
                  <div className="contact-form-content row mx-auto d-flex justify-content-between ">
                    <input type="text" id="contact-form-name" className="contact-form-name input-field col-sm-3 " onChange={handleInput} name="name" value={userData.name} placeholder="your name" required='true' />
                    <input type="email" id="contact-form-email" className="contact-form-email input-field col-sm-3" onChange={handleInput} name="email" value={userData.email} placeholder="your email" required='true' />
                    <input type="number" id="contact-form-number" className="contact-form-number input-field col-sm-3" onChange={handleInput} name="phone" value={userData.phone} placeholder="your number" required='true' />

                    <div className="contact-form-text mt-5 col-sm-12">
                      <textarea onChange={handleInput} name="message" value={userData.message} id="" className="col-sm-12" placeholder="Message" cols="30" rows="10" ></textarea>
                    </div>
                    <div className="contact-form-btn">
                      <button type="submit" onClick={postData} className="btn btn-primary p-2">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Contact;
