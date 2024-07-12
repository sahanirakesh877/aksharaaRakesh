import React from "react";
import "../css/Sister.css";

const SisterOrg = () => {
  return (
    <>
      <div className="sis ">
        <div className="container">
          <div className="row py-4  d-flex align-items-center justify-content-center">

          <div className="col-md-3 p-md-0">
          {/* <img src="/bgchild22.png" alt="" className="img-fluid " /> */}
          <img src="/school/school4.JPG" alt=""  className="img-fluid  rounded-2"/>

          </div>
        
            <div className="col-md-6 ">
            <h2 className="text-center     border-bottom-title w-100 head-color"><span className="addcolor">Sister</span> Organization</h2>
              <div className="poster">
                <img
                  src="/sisremove.png"
                  alt="sister organization..."
                  className="img-fluid"
                />
                <span className="text-center">
                  Jawlakhel, Lalitpur, Nepal
                  <br />
                  01-5426371
                </span>
              </div>
            </div>
            <div className="col-md-3 p-md-0">
            {/* <img src="/bgchild33.png" alt="" className="img-fluid " /> */}
            <img src="/smallchild.jpg" alt=""   className="img-fluid rounded-2" />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SisterOrg;
