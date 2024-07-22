import React from "react";

const About = () => {
  return (
    <>
      <div className="mission-color bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="w-100 border-bottom-title head-color my-5">
                <span className="addcolor ">Our Philosophy</span> & Approach
              </h2>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-12 mb-4">
              <p className="mission-p">
                Aksharaa School adopts a student-centered, constructivist
                philosophy, fostering autonomous learning and emphasizing
                awareness, autonomy, and authenticity. We cater to diverse
                intelligences, promoting holistic growth through a balanced
                education system that supports cognitive, physical, emotional,
                and social development.
              </p>
              <p className="mission-p">
                Our Learning-Reinforcement-Practice-Application (LRPA) module
                enhances cognitive abilities with fun and curiosity, encouraging
                critical thinking, collaboration, creativity, and
                problem-solving. This prepares students to be global citizens.
              </p>
              <p className="mission-p">
                We value respect and diversity, blending traditional values with
                modern technology. Through national festivals and educational
                trips, we instill patriotism and global awareness, aiming to
                nurture well-rounded, globally competent citizens.
              </p>
              <button className="button-21" role="button">
                Know More<i className="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </div>
            <div className="col-lg-6 col-md-12">
              <video width="100%" height="auto" controls className="mission-p">
                <source
                  src="https://www.aksharaaschool.edu.np/public/assets/aksharaa-space.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
