import React from "react";

const About = () => {
  return (
    <>
      <div className="mission-vision-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="w-100 border-bottom-title  head-color py-2">
                <span className="addcolor"> Our Mission</span> & Vision
              </h2>
            </div>
          </div>
          <div className="row py-5 d-flex align-items-center">
            <div className="col-md-6">
              <h4 className=" py-2">OUR PHILOSOPHY AND APPROACH</h4>
              <p className="about-p ">
                Aksharaa School adopts a student-centered, constructivist
                philosophy, fostering autonomous learning and emphasizing
                awareness, autonomy, and authenticity. We cater to diverse
                intelligences, promoting holistic growth through a balanced
                education system that supports cognitive, physical, emotional,
                and social development.
              </p>
              <p className="about-p">
                Our Learning-Reinforcement-Practice-Application (LRPA) module
                enhances cognitive abilities with fun and curiosity, encouraging
                critical thinking, collaboration, creativity, and
                problem-solving. This prepares students to be global citizens.
              </p>
              <p className="about-p">
                We value respect and diversity, blending traditional values with
                modern technology. Through national festivals and educational
                trips, we instill patriotism and global awareness, aiming to
                nurture well-rounded, globally competent citizens.
              </p>

              <button class="button-21" role="button">
                {" "}
                Know More<i class="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </div>
            <div className="col-md-6">
              <video width="100%" height="auto" controls>
                <source
                  src="https://www.aksharaaschool.edu.np/public/assets/aksharaa-space.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* <div className="row pt-5">
          <div className="col-md-6 ">
            <div className="mission-vision-content mission-vision-content1">
              <h5 className="text-start  text-light">Mission</h5>
              <p>
                Aksharaa School inculcates value-based education with academic
                excellence through collaboration with parents and other
                stakeholders to instill resilience, leadership skills, and
                emotional intelligence in each learner.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mission-vision-content mission-vision-content2">
              <h5 className="text-light text-end ">Vision</h5>
              <p className="">
                Nurturing young learners to become lifelong learners globally
                competent and responsible citizens
              </p>
            </div>
          </div>
        </div> */}

         
        </div>
      </div>
      <div className="mission-color">
        <div className="container">
        <div className="row d-flex align-items-stretch py-4">
            <div className="col-md-4 d-flex border-end">
              <div className=" text-center d-flex flex-column justify-content-start w-100 custom-border">
                <i
                  className="fas fa-bullseye about-icon1 mb-2 py-2"
                  style={{ fontSize: "3em" }}
                ></i>
                <h4 className="text-center mission-head">OUR MISSION</h4>
                <p className="mission-p">
                  Aksharaa School inculcates value-based education with academic
                  excellence through collaboration with parents and other
                  stakeholders to instill resilience, leadership skills, and
                  emotional intelligence in each learner.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex border-end ">
              <div className="text-center d-flex flex-column justify-content-start w-100">
                <i
                  className="fas fa-eye about-icon2 mb-2 py-2"
                  style={{ fontSize: "3em" }}
                ></i>
                <h4 className="text-center">OUR VISION</h4>
                <p className="mission-p">
                  Nurturing young learners to become lifelong learners globally
                  competent and responsible citizens.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="text-center d-flex flex-column justify-content-start w-100">
                <i
                  className="fas fa-heart about-icon3 mb-2 py-2"
                  style={{ fontSize: "3em" }}
                ></i>
                <h4 className="text-center">OUR VALUES</h4>
                <p className="mission-p">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Esse, ullam. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Molestias, sequi?
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default About;
