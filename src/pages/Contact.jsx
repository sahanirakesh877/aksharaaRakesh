import React from "react";

const Contact = () => {
  return (
    <>
      {/* <div className="container py-5">
        <div className="row d-flex align-items-start py-5">
          <h2 className="fw-semibold border-bottom-title  text-center mb-4 head-color">
           <span className="addcolor"> Contact</span> Us
          </h2>
          <p className="text-center text-secondary">
            If you have any questions, feel free to reach out to us via the form
            below or through any of the contact methods listed.
          </p>
          <div className="col-lg-6 col-md-12  mb-4 bg-light">
            <form>
              <div className="form-group pb-2">
                <label htmlFor="name" className="pb-1 text-success">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control pb-2 rounded-0"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group pb-2">
                <label htmlFor="email" className="pb-1 text-success">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control rounded-0 pb-2"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group pb-2">
                <label htmlFor="number" className="pb-1 text-success">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control rounded-0 pb-2"
                  id="number"
                  placeholder="Your Phone"
                />
              </div>
              <div className="form-group pb-2">
                <label htmlFor="message" className="pb-1 text-success">
                  Message
                </label>
                <textarea
                  className="form-control rounded-0"
                  id="message"
                  style={{ resize: "none" }}
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="border-0 py-2 mt-3 rounded-0 bg-success text-white w-100"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-6 col-md-12 ">
            <div
              className="map-container mb-2"
              style={{
                position: "relative",
                paddingBottom: "60.04%",
                height: 0,
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d56528.98843456104!2d85.29982577525458!3d27.684485455816603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39eb1a3058f08937%3A0x5e58e8a5ed6fa73b!2sM9X9%2B5C5%20Aksharaa%20School%2C%20Kageshwori%20Manohara%2044600!3m2!1d27.6973403!2d85.3670331!5e0!3m2!1sen!2snp!4v1715844547576!5m2!1sen!2snp"
                frameBorder="0"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="contact-info contact-right my-md-0">
              <div className="my-2">
                <i className="fa fa-envelope border text-light border-success rounded-circle p-2 bg-success me-2"></i>
                <p className="d-inline ml-2 text-secondary">info@aksharaaschool.edu.np</p>
              </div>
              <div className="mb-2">
                <i className="fa fa-phone text-white border border-success rounded-circle p-2 bg-success me-2"></i>
                <p className="d-inline ml-2 text-secondary">+977-01-4993031/32/33</p>
              </div>
              <div className="mb-2">
                <i className="fa fa-location border border-success text-light rounded-circle p-2 bg-success me-2"></i>
                <p className="d-inline ml-2 text-secondary">
                  Kandaghari, Kageshwori Manohara 9, Kathmandu, Nepal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container py-5">
      <h2 className=" border-bottom-title justify-content-center  mb-4 head-color d-flex align-items-start">
            <span className="addcolor"> Contact</span> Us
          </h2>
          <div className="row d-flex align-items-center justify-content-start ">
            <div className="col-md-4 d-flex justify-content-center align-items-center shadow-sm  bg-light  py-2">
              <i
                className="fa fa-envelope text-light rounded-circle p-2 contact-iconbg me-2"
                style={{ fontSize: "0.8em" }}
              ></i>
              <p className="text-secondary mb-0" style={{ fontSize: "0.82em" }}>
                info@aksharaaschool.edu.np
              </p>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center shadow-sm  py-2 bg-light">
              <i
                className="fa fa-phone text-white   rounded-circle p-2 contact-iconbg me-2"
                style={{ fontSize: "0.8em" }}
              ></i>
              <p className="text-secondary mb-0" style={{ fontSize: "0.82em" }}>
                +977-01-4993031/32/33
              </p>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center shadow-sm py-2 bg-light">
              <i
                className="fa fa-location-arrow text-light   rounded-circle p-2 contact-iconbg me-1"
                style={{ fontSize: "0.8em" }}
              ></i>
              <p className="text-secondary mb-0" style={{ fontSize: "0.82em" }}>
                Kandaghari, Kageshwori Manohara 9, KTM, Nepal
              </p>
            </div>
          </div>
        <div className="row d-flex align-items-start py-2  ">
          
          {/* <p className="text-center text-secondary">
              If you have any questions, feel free to reach out to us via the form
              below or through any of the contact methods listed.
            </p> */}
          {/* <div className="row d-flex align-items-center ">
              <div className="col-md-4 border">
              <div className=" ">
                <i className="fa fa-envelope border text-light border-success rounded-circle p-1 bg-success me-2"></i>
                <p className="d-inline ml-2 text-secondary ">info@aksharaaschool.edu.np</p>
              </div> 

              </div>
              <div className="col-md-4 border">
              <div className="">
                <i className="fa fa-phone text-white border border-success rounded-circle p-2 bg-success me-2"></i>
                <p className="d-inline ml-2 text-secondary">+977-01-4993031/32/33</p>
              </div>
              </div>
              <div className="col-md-4 border">
              <div className="">
                <i className="fa fa-location border border-success text-light rounded-circle p-2 bg-success me-2"></i>
                <p className="d-inline ml-2 text-secondary">
                  Kandaghari, Kageshwori Manohara 9, Kathmandu, Nepal
                </p>
              </div>
              </div>
            </div> */}

          <div className="col-lg-6 col-md-12  mb-4  w-50 contact-bg ">
            <form>
              <div className="form-group pb-2">
                <label htmlFor="name" className="pb-1 text-daerk">
                  Name :
                </label>
                <input
                  type="text"
                  className="form-control pb-2 rounded-1 border-0 shadow-none "
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group pb-2">
                <label htmlFor="email" className="pb-1 text-dark">
                  Email :
                </label>
                <input
                  type="email"
                  className="form-control  pb-2 rounded-1 border-0 shadow-none"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group pb-2">
                <label htmlFor="number" className="pb-1 text-dark">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control  pb-2 rounded-1 border-0 shadow-none"
                  id="number"
                  placeholder="Your Phone"
                />
              </div>
              <div className="form-group pb-2">
                <label htmlFor="message" className="pb-1 text-dark">
                  Message
                </label>
                <textarea
                  className="form-control rounded-1 border-0 shadow-none"
                  id="message"
                  style={{ resize: "none" }}
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              {/* <button
                type="submit" 
                className="border-0 py-2 mt-3 rounded-0 bg-success text-white w-100 "
              >
                Submit
              </button> */}
              <button type="submit" className="button-21 w-100  my-3">
                Submit
              </button>
            </form>
          </div>

          <div className="col-lg-6 col-md-12  px-md-1">
            <div
              className="map-container mb-2   "
              style={{
                position: "relative",
                // paddingBottom: "81.5%",
                height: 0,
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d56528.98843456104!2d85.29982577525458!3d27.684485455816603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39eb1a3058f08937%3A0x5e58e8a5ed6fa73b!2sM9X9%2B5C5%20Aksharaa%20School%2C%20Kageshwori%20Manohara%2044600!3m2!1d27.6973403!2d85.3670331!5e0!3m2!1sen!2snp!4v1715844547576!5m2!1sen!2snp"
                frameBorder="0"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "46.3vh",
                  border: 0,
                }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            {/* <div className="contact-info contact-right my-md-0">
              <div className="my-2">
                <i className="fa fa-envelope border text-light border-success rounded-circle p-2 bg-success me-2"></i>
                <p className="d-inline ml-2 text-secondary">info@aksharaaschool.edu.np</p>
              </div>
              <div className="mb-2">
                <i className="fa fa-phone text-white border border-success rounded-circle p-2 bg-success me-2"></i>
                <p className="d-inline ml-2 text-secondary">+977-01-4993031/32/33</p>
              </div>
              <div className="mb-2">
                <i className="fa fa-location border border-success text-light rounded-circle p-2 bg-success me-2"></i>
                <p className="d-inline ml-2 text-secondary">
                  Kandaghari, Kageshwori Manohara 9, Kathmandu, Nepal
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
