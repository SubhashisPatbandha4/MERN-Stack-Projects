import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact-info">
        <div className="container-fluid">
          <div className="row mx-auto">
            <div className="col-lg-10">
              <div className="contact-info-item d-flex justify-content-start align-items-center" >
              <i class="fa-solid fa-phone-volume"></i>
                <div className="contact-info-contact">
                  <div className="contact-info-title">
                    phone
                  </div>
                  <div className="contact-info-text">
                    1234567890
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
