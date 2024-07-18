import React from "react";
import "../css/Sister.css";

const SisterOrg = () => {
  return (
    <>
      <div className="sis py-5">
        <div className="container">
          <div className="row py-4 d-flex align-items-center justify-content-center ">
            {/* Left Collage */}
            <div className="col-md-4 p-md-0 d-flex  justify-content-center align-items-center   ">
              <div className="col-md-4  collage-img3 me-3">
                <img
                  src="/school/school4.JPG"
                  alt=""
                  className="img-fluid rounded-2  m-1 "
                />
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="col-md-4  collage-img1">
                  <img
                    src="/school/school1.JPG"
                    alt=""
                    className="img-fluid rounded-3 m-1 "
                  />
                </div>
                <div className="col-md-4  collage-img2">
                  <img
                    src="/school/school5.JPG"
                    alt=""
                    className="img-fluid rounded-2 m-1 "
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <h2 className="text-center border-bottom-title w-100 head-color">
                <span className="addcolor">Sister</span> Organization
              </h2>
              <div className="poster text-center ">
                <img
                  src="/sisremove.png"
                  alt="sister organization..."
                  className="img-fluid"
                />
                <span>
                  Jawlakhel, Lalitpur, Nepal
                  <br />
                  01-5426371
                </span>
              </div>
            </div>

            {/* Right Collage */}
            <div className="col-md-4 p-md-0 d-flex  justify-content-center align-items-center ">
              <div className="d-flex flex-column me-3 gap-3">
                <div className="col-md-4  collage-img1">
                  <img
                    src="/school/school2.JPG"
                    alt=""
                    className="img-fluid rounded-3 m-1 "
                  />
                </div>
                <div className="col-md-4  collage-img2">
                  <img
                    src="/school/school5.JPG"
                    alt=""
                    className="img-fluid rounded-2 m-1 "
                  />
                </div>
              </div>
              <div className="col-md-4  collage-img3 ">
                <img
                  src="/school/school3.JPG"
                  alt=""
                  className="img-fluid rounded-2  m-1 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SisterOrg;
