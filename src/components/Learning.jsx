import React, { useRef, useState } from "react";
import "../css/Learning.css";
import { useNavigate } from "react-router-dom";

const Learning = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);

  const hoverRef = useRef(null)

  const [hover, setHover] = useState(false);

  const handleImageClick = (section) => {
    setActiveSection(section);
  };

  const handleClose = () => {
    setActiveSection(null);
  };

  const handleEffect = (e) => {
    if (hoverRef.current && hover) {
      requestAnimationFrame(() => {
        hoverRef.current.style.top = `${e.pageY}px`;
        hoverRef.current.style.left = `${e.pageX}px`;
      });
    }
  }

  return (
    <>
      <div className="learning " onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onMouseMove={handleEffect}>
        <div className="container">
          <div className="row  d-flex align-items-center justify-content-between fuche-sec">
            <div className={`col-md-4 pe-4  ${activeSection ? "d-none" : ""}`}>
              <h2 className="fw-semibold sanskar">संस्कारयुक्त शिक्षा</h2>
              <p className="lrpa-text">
                "Sanskaryukta Siksha" is fundamental at our school. The School on its dynamic framework builds on and offers students a repertoire of ECAs made integral with the mainstream academic endeavors we engage students throughout. Some key ECAs that Aksharaa offers on school days.
              </p>
              <h5 className="text-start fw-semibold">
                Learning through LRPA approach in Akshara
              </h5>
              <p className="lrpa-text">
                We follow the LRPA model with the motto "learning through fun." Our approach emphasizes experiential learning, making core theories and values engaging. Students explore and experience learning beyond textbooks, fostering critical thinking and rational analysis through active participation. Equipped with modern technology, our classrooms support the use of computers, laptops, televisions, and projectors.
              </p>
              <button
                className="button-21"
                role="button"
                onClick={() => navigate("/about/lrpa")}
              >
                Read More<i className="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </div>

            {activeSection === "senior" && (
              <div className="col-md-4">
                <button onClick={handleClose} className="close-btn">
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <h3 className="border-bottom-title w-100 text-center ">Senior</h3>
                <p className="lrpa-text px-2">
                  Located on the main campus at Truganina, the Senior School is characterised by three age-appropriate learning clusters: the Horsburgh Centre (Years 7 - 8), the Geoffrey Ryan Centre (Year 9 Program), and the Senior College for Years 10 - 12. These distinct characteristics create complementary environments. The curriculum and overall environment are designed to support students' growth and development.
                </p>
                <button
                  className="button-21"
                  role="button"
                  onClick={() => navigate("/academics/high")}
                >
                  Enroll now 
                </button>
              </div>
            )}

            {activeSection === "middle" && (
              <div className="col-md-4">
                <button onClick={handleClose} className="close-btn">
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <h3 className="border-bottom-title w-100 text-center">Middle</h3>
                <p className="lrpa-text px-2">
                  The Horsburgh Centre (Years 7 - 8), the Geoffrey Ryan Centre (Year 9 Program), and the Senior College for Years 10 - 12 are key components of our Middle School. These distinct characteristics create complementary environments that support students' growth and development.
                </p>
                <button
                  className="button-21"
                  role="button"
                  onClick={() => navigate("/academics/middle")}
                >
                  Enroll now 
                </button>
              </div>
            )}

            {activeSection === "elementary" && (
              <div className="col-md-4">
                <button onClick={handleClose} className="close-btn">
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <h3 className="border-bottom-title w-100 text-center">Elementary School</h3>
                <p className="lrpa-text px-2">
                  Our Elementary School is characterised by three age-appropriate learning clusters: the Horsburgh Centre (Years 7 - 8), the Geoffrey Ryan Centre (Year 9 Program), and the Senior College for Years 10 - 12. These distinct characteristics create complementary environments that support students' growth and development.
                </p>
                <button
                  className="button-21"
                  role="button"
                  onClick={() => navigate("/academics/elementary")}
                >
                  Enroll now 
                </button>
              </div>
            )}

            {activeSection === "kindergarten" && (
              <div className="col-md-4">
                <button onClick={handleClose} className="close-btn">
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <h3 className="border-bottom-title w-100 text-center">Kindergarten</h3>
                <p className="lrpa-text px-2">
                  The Senior College and the Senior College for Years 10 - 12 have distinct characteristics that create complementary environments. The curriculum and overall environment are designed to support students' growth and development.
                </p>
                <button
                  className="button-21"
                  role="button"
                  onClick={() => navigate("/academics/kindergarten")}
                >
                  Enroll now 
                </button>
              </div>
            )}

            {/* Photos section */}
            <div className="col-md-2 rotatediv">
              <div
                className="row d-flex justify-content-between align-items-center position-relative learnimg"
                onClick={() => handleImageClick("senior")}
              >
                <div className="inner-content">
                  <img src="/alternate/senior.png" alt="" className="img-custom" />
                  <p className="seniors border px-3 rounded-2 py-1 border me-4">Seniors</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 rotatediv">
              <div
                className="row d-flex justify-content-between align-items-center position-relative learnimg"
                onClick={() => handleImageClick("middle")}
              >
                <div className="inner-content">
                  <img src="/alternate/girl1.png" alt="" className="img-custom kinder_img2" />
                  <p className="seniors px-3 rounded-2 py-1 border me-4">Middle</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 rotatediv">
              <div
                className="row d-flex justify-content-start align-items-center position-relative learnimg"
                onClick={() => handleImageClick("elementary")}
              >
                <div className="inner-content">
                  <img src="/alternate/girl2.png" alt="" className="img-custom kinder_img1" />
                  <p className="seniors   rounded-2 py-1 border me-5 px-1 text-nowrap">Elementary School</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 rotatediv">
              <div
                className="row d-flex justify-content-between align-items-center position-relative learnimg"
                onClick={() => handleImageClick("kindergarten")}
              >
                <div className="inner-content">
                  <img src="/alternate/kindergarten.png" alt="" className="img-custom kinder_img" />
                  <p className="seniors px-3 rounded-2 py-1 border me-5">Kindergarten</p>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className={`position-absolute hoverView ${hover ? "hovering" : "unhover"}  `} ref={hoverRef}>View</div>
      </div>
    </>
  );
};

export default Learning;
