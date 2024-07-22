import React from "react";
import "../css/pic.css";

const Pic = () => {
  return (
    <>
      <div className="container bg-success">
        <div className="row">
          <h2 className="text-center w-100 border-bottom-title addcolor">
            Explore <span className="head-color">Gallery</span>
          </h2>
          <div className="col-lg-12">
            <div className="div-center gallerys ">
              <div id="carousels">
                <figure>
                  <img src="/a.jpg" alt="Gallery Image 1" />
                </figure>
                <figure>
                  <img src="/b.jpg" alt="Gallery Image 2" />
                </figure>
                <figure>
                  <img src="/c.jpg" alt="Gallery Image 3" />
                </figure>
                <figure>
                  <img src="/d.jpg" alt="Gallery Image 4" />
                </figure>
                <figure>
                  <img src="/e.jpg" alt="Gallery Image 5" />
                </figure>
                <figure>
                  <img src="/a.jpg" alt="Gallery Image 6" />
                </figure>
                <figure>
                  <img src="/b.jpg" alt="Gallery Image 7" />
                </figure>
                <figure>
                  <img src="/c.jpg" alt="Gallery Image 8" />
                </figure>
                <figure>
                  <img src="/d.jpg" alt="Gallery Image 9" />
                </figure>
                <figure>
                  <img src="/e.jpg" alt="Gallery Image 10" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pic;
