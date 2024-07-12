import React from "react";
 import "../css/Kindergarten.css";
 import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


const brandImg = [
  "/school/school2.JPG",
  "/school/school4.JPG",
  "/school/school1.JPG",
  "/school/school3.JPG",
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


const Kindergarten = () => {
  return (
    <>
      {/* <div className="kinderbanner my-md-0">
        <img src="/school/banner2.jpg" alt="Kindergarten Banner" />
        <h3 className="xyz">Kindergarten </h3>

        <div className="breadcrumb-container">
          <ul className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Kindergarten</li>
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

      <div className="bg-light py-4">
        <div className="container mx-auto">
        <h2 className="border-bottom-title text-center w-100 fw-semibold text-success">
            Kindergarten Class
          </h2>
          <div className="row d-flex justify-content-between align-items-start ">
            <div className="col-md-6 col-12 px-4 py-4">
              <h6 className="kinder-head mb-md-1">Our Philosophy</h6>
              <p className="kinder-text">
                At Aksharaa Kindergarten, every child is seen as an intelligent
                individual. We respect and understand their unique differences
                and strive for their holistic development through a Balanced
                Education System. This approach includes age-appropriate
                cognitive, physical, emotional, and social activities.
              </p>
              <h6 className="kinder-head mb-md-1">Learning Approach</h6>
              <p className="kinder-text">
                We follow the Learning-Reinforcement-Practice-Application (LRPA)
                module to ensure balanced schooling. Our
                Touch-Explore-Learn-Enjoy process stimulates curiosity,
                encourages exploration, and instills a lifelong joy of learning.
              </p>
              <h6 className="kinder-head mb-md-1">Early Years Focus</h6>
              <p className="kinder-text">
                Research shows that most brain development happens in the first
                six years. We provide a nurturing environment that promotes
                reading, listening, and playing, crucial for early development.
              </p>
              <h6 className="kinder-head mb-md-1">
                Child-Friendly Environment:
              </h6>
              <p className="kinder-text">
                We create a friendly space where children can interact with the
                real world, fostering emotional, social, and cognitive skills.
                Our scientifically designed activities encourage children to
                listen, imagine, discover, and create.
              </p>
              <h6 className="kinder-head mb-md-1">Individual Growth</h6>
              <p className="kinder-text">
                Teachers at Aksharaa Kindergarten appreciate each child's unique
                approach to learning. They support mental, physical, emotional,
                and social growth, helping children become happy, confident, and
                creative individuals.
              </p>

           
            </div>

            <div className=" col-12  col-md-6  px-4 py-4">
              {/* <div className="g pb-3">
                <div className="gallerys p-4 ">
                  <img
                    src="/gallery/children-5.jpg"
                    alt="a big park inside a modern city"
                  />
                  <img
                    src="/gallery/children-4.jpg"
                    alt="a small street between building"
                  />
                  <img
                    src="/gallery/children-1.jpg"
                    alt="seen from the sky of a big city"
                  />
                  <img
                    src="/gallery/children-2.jpg"
                    alt="a bridge in the night"
                  />
                </div>
              </div> */}
              <h6 className="kinder-head mb-md-1">
                Individualized Assessment:
              </h6>
              <p className="kinder-text">
                At Aksharaa, we believe every child is intelligent and capable
                of learning in the right environment. We continuously assess
                children during activities, rather than through formal tests,
                allowing us to track progress and adjust our approach in
                real-time.
              </p>
              <h6 className="kinder-head mb-md-1">LRPA Module</h6>
              <p className="kinder-text">
                We use the Learning-Reinforcement-Practice-Application (LRPA)
                module. Children learn through play and involvement in cultural,
                social, and everyday activities. Learning is reinforced through
                engaging activities like drama, visual presentations, and
                role-play. They practice their knowledge through interactive
                activities and apply their learning in real-life situations.
              </p>
              <ul className="kinder-ul mb-md-1">
                <li className="kinder-li">
                  Aksharaa Approach to Quality Education
                </li>
                <li className="kinder-li">
                  Well researched, age-appropriate theme-based integrated
                  curriculum for holistic development of children
                </li>
                <li className="kinder-li">
                  Our teachers and staffs are caring, well-motivated,
                  experienced, qualified and trained
                </li>
                <li className="kinder-li">
                  Fun-filled-activity based approach to learning
                </li>
                <li className="kinder-li">
                  Practical and contextualized field-based learning
                  opportunities
                </li>
                <li className="kinder-li">
                  Co-curricular and extra-curricular activities like music, art,
                  and craft, dance, splash etc.
                </li>
                <li className="kinder-li">
                  Strong and continuous collaboration between parents and
                  teachers
                </li>
                <li className="kinder-li">
                  Child-friendly ambiance with non-toxic and safe equipment and
                  toys
                </li>
                <li className="kinder-li">ICT integrated activities</li>
              </ul>
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

export default Kindergarten;
