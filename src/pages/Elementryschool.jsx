import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const brandImg = [
  "/school/school1.JPG",
  "/school/school2.JPG",
  "/school/school3.JPG",
  "/school/school4.JPG",
  "/school/school5.JPG",
];
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
};
const items = brandImg.map((img, index) => (
  <div className="academic-itemk" key={index}>
    <img src={img} alt={`Brand ${index + 1}`} className="" />
  </div>
));

const Elementryschool = () => {
  return (
    <>
      {/* <div className="kinderbanner my-md-0 ">
        <img src="/school/banner1.jpg" alt="Kindergarten" />
        <h3 className="xyz">Elementary School &nbsp; I-VII</h3>
        <div className="breadcrumb-container">
          <ul className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Elementary School</li>
          </ul>
        </div>
      </div> */}

      <div className="container-fluid">
        <div className="py-2 ">
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay={true}
            infinite={true}
            responsive={responsive}
            controlsStrategy="alternate"
            animationDuration={3000}
            disableButtonsControls={true}
            disableDotsControls={true}
            paddingLeft={"5px"}
          />
        </div>
      </div>

      <div className=" py-5">
        <div className="container mx-auto ">
          <h2 className="border-bottom-title text-center w-100 fw-semibold text-success">
            Elementary Class
          </h2>

          <div className="row d-flex align-items-start py-4 ">
            <div className="col-md-6 col-12 px-4">
              <p className="kinder-text">
                Grades I–VII make up the elementary program at Aksharaa School.
                For grades I–V, we use a grade teaching system with personalized
                care, small class sizes, and continuous assessments. Grades VI
                and VII have subject-specific teaching.
              </p>
              <p className="kinder-text">
                Apart from academics, students engage in extracurricular and
                co-curricular activities, encouraging exploration and growth.
              </p>

              <h6 className="kinder-head mb-md-1">Classrooms:</h6>
              <p className="kinder-text">
                Our spacious, well-ventilated classrooms support collaborative
                projects, equipped with mini libraries, projectors, and internet
                access.
              </p>
              <h6 className="kinder-head mb-md-1">
                Class Assembly (Parents Day):
              </h6>
              <p className="kinder-text">
                We conduct grade-wise assemblies to encourage student
                participation and stretch comfort zones, organized around
                classroom learning themes.
              </p>
              <h6 className="kinder-head mb-md-1">Grade-wise Tour:</h6>
              <p className="kinder-text">
                Learning extends beyond the classroom with trips around Nepal
                and India, promoting “learning while having fun.”
              </p>

              {/* <div className="g pb-3">
                <div className="gallerys p-4 ">
                  <img src="/a.jpg" alt="a big park inside a modern city" />
                  <img src="/b.jpg" alt="a small street between buildings" />
                  <img src="/c.jpg" alt="view from the sky of a big city" />
                  <img src="/d.jpg" alt="a bridge at night" />
                </div>
              </div>  */}
            </div>
            <div className="col-md-6 col-12 px-4">
              {/* <div className="py-3 px-3">
                <AliceCarousel
                  mouseTracking
                  items={items}
                  autoPlay={true}
                  infinite={true}
                  responsive={responsive}
                  controlsStrategy="alternate"
                  animationDuration={1500}
                  disableButtonsControls={true}
                  disableDotsControls={true} 
                />
              </div> */}

              <h6 className="kinder-head mb-md-1">
                Laboratory and Field Trip:
              </h6>
              <p className="kinder-text">
                Our hands-on, project-based learning includes science lab
                experiments and field trips to enhance classroom lessons.
              </p>
              <h6 className="kinder-head mb-md-1">
                Leadership and Community Service:
              </h6>
              <p className="kinder-text">
                We develop leadership and community service skills through
                various clubs and student bodies, encouraging active
                participation and social responsibility.
              </p>
              <h6 className="kinder-head mb-md-1">
                Social-Emotional Learning (SEL):
              </h6>
              <p className="kinder-text">
                SEL classes and dedicated counselors support students' emotional
                well-being, addressing factors like disruptive behavior and
                bullying.
              </p>
              <h6 className="kinder-head mb-md-1">ECA and CCA Activities:</h6>
              <p className="kinder-text">
                Our ECA and CCA activities include sports, music, dance, and
                arts, with weekend clubs for specialized training and
                development.
              </p>

              {/* <div className="g pb-3">
                <div className="gallerys p-4 ">
                  <img src="/a.jpg" alt="a big park inside a modern city" />
                  <img src="/b.jpg" alt="a small street between buildings" />
                  <img src="/c.jpg" alt="view from the sky of a big city" />
                  <img src="/d.jpg" alt="a bridge at night" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="kg-back" id="kg-back1">
        <div className="container">
          <div className="row py-4 ">
            <div className="col-12">
              <div className="row">
                <div className="col-md-3 col-6">
                  <img
                    src="/school/school1.JPG"
                    alt="School 6"
                    className="img-fluid border border-white border-2"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <img
                    src="/school/school2.JPG"
                    alt="School 7"
                    className="img-fluid border border-white border-2"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <img
                    src="/school/school3.JPG"
                    alt="School 8"
                    className="img-fluid border border-white border-2"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <img
                    src="/school/school4.JPG"
                    alt="School 9"
                    className="img-fluid border border-white border-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Elementryschool;
