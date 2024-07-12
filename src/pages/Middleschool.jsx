import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const brandImg = [
  "/selected/home.webp",
  "/selected/home11.webp",
  "/selected/home3.webp",
  "/selected/home55.webp",
  "/selected/home77.webp",
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
};
const items = brandImg.map((img, index) => (
  <div className="academic-item  " key={index}>
    <img src={img} alt={`Brand ${index + 1}`} className="" />
  </div>
));

const Middleschool = () => {
  return (
    <>
      {/* <div className="kinderbanner my-md-0">
        <img src="/school/banner4.jpg" alt="Middle School Banner" />
        <h3 className="xyz">Middle School &nbsp; VII-IX</h3>

        <div className="breadcrumb-container">
          <ul className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Middle School</li>
          </ul>
        </div>
      </div> */}

      <div className="bg-light py-5">
        <div className="container mx-auto">
          <div className="row">
          <h2 className="border-bottom-title text-center w-100 fw-semibold text-success">
            Middle Class
          </h2>
            <div className="col-md-6 col-12 px-4 py-4">
              <p className="kinder-text">
                The middle school program at Aksharaa School includes grades VI
                to VIII. Our curriculum focuses on academic excellence, critical
                thinking, and holistic development.
              </p>
              <p className="kinder-text">
                Students participate in a variety of extracurricular activities
                to explore their interests and develop new skills.
              </p>
              <h6 className="kinder-head mb-md-1">Classrooms:</h6>
              <p className="kinder-text">
                Middle school classrooms are equipped with modern technology,
                including smart boards and internet access, to enhance learning.
              </p>
              <h6 className="kinder-head mb-md-1">Class Assemblies:</h6>
              <p className="kinder-text">
                Regular assemblies promote student engagement and leadership,
                with each class presenting on various topics throughout the
                year.
              </p>
              <h6 className="kinder-head mb-md-1">
                Field Trips and Excursions:
              </h6>
              <p className="kinder-text">
                Students go on educational trips that provide practical learning
                experiences and foster a deeper understanding of their studies.
              </p>
              
            </div>
            <div className="col-md-6 col-12 px-4 py-4">
            <h6 className="kinder-head mb-md-1">Laboratories:</h6>
              <p className="kinder-text">
                Our state-of-the-art science labs offer hands-on learning
                opportunities that spark curiosity and enhance scientific
                understanding.
              </p>
              <h6 className="kinder-head mb-md-1">
                Leadership and Community Service:
              </h6>
              <p className="kinder-text">
                We offer numerous opportunities for students to take on
                leadership roles and engage in community service projects,
                fostering a sense of responsibility and empathy.
              </p>
              <h6 className="kinder-head mb-md-1">
                Social-Emotional Learning (SEL):
              </h6>
              <p className="kinder-text">
                SEL programs and dedicated counselors help students navigate
                their emotional and social development, ensuring a supportive
                learning environment.
              </p>
              <h6 className="kinder-head mb-md-1">
                Extracurricular Activities:
              </h6>
              <p className="kinder-text">
                A wide range of ECA and CCA activities, including sports, arts,
                and clubs, allow students to pursue their passions and develop
                new talents.
              </p>

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
              </div>
              <div className="g pb-3">
                <div className="gallerys p-4">
                  <img
                    src="/school/school5.JPG"
                    alt="a big park inside a modern city"
                  />
                  <img
                    src="/school/school4.JPG"
                    alt="a small street between buildings"
                  />
                  <img
                    src="/school/school1.JPG"
                    alt="view from the sky of a big city"
                  />
                  <img src="/school/school2.JPG" alt="a bridge at night" />
                </div>
              </div> */}

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Middleschool;
