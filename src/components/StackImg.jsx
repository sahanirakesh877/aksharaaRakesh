import React, { useState } from "react";
import "../css/StackImg.css";
import { useNavigate } from "react-router-dom";

const RainData = [
  {
    id: 1,
    img: "/a.jpg",
    alt: "Children 1",
  },
  {
    id: 2,
 img: "/b.jpg",
    alt: "banner2",
  },
  {
    id: 3,
 img: "/c.jpg",
    alt: "banner3",
  },
  {
    id: 4,
 img: "/d.jpg",
    alt: "banner4",
  },
  {
    id: 5,
 img: "/e.jpg",
    alt: "banner5",
  },
];


const imageData = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/front-view-young-female-taking-picture-with-camera-pink-background-woman-photo-model_140725-70988.jpg?t=st=1720549381~exp=1720552981~hmac=38ea0afc5a6ef7a87958d4c7b2c5a1b85c725bcba39fcc684d34193e1588f0c8&w=826",
    alt: "Children 1",
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-photo/front-view-young-female-student-white-t-shirt-with-bag-earphones-posing-smiling-holding-coffee-pink-background-lesson-university-college-study-book_140725-35072.jpg?t=st=1720549407~exp=1720553007~hmac=39e20dfb17d9fc229feee405a54ae86efb635c5d5def21fc9a674a999b8325d2&w=826",
    alt: "banner2",
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/expressive-young-woman-posing_176474-101555.jpg?t=st=1720549538~exp=1720553138~hmac=d77d314d796792f661b9f32159e8d7726a2dbee0f1fd1b569ffc9556d2fb3fd4&w=826",
    alt: "banner3",
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-photo/front-view-female-student-white-shirt-black-jacket-wearing-backpack-holding-files-with-copybooks-blue-wall-college-university-lessons_140725-43393.jpg?t=st=1720549661~exp=1720553261~hmac=68658a10651108e4e81c9ca496cdfcb7eda83ef4345e1e817e45d3b77c3a17c9&w=826",
    alt: "banner4",
  },
  {
    id: 5,
    img: "https://img.freepik.com/premium-photo/portrait-young-university-student-woman-with-graduation-cap-violet_33799-8332.jpg?w=826",
    alt: "banner5",
  },
];

const childData = [
  {
    id: 1,
    img: "/gallery/children-1.jpg",
    alt: "Children 1",
  },
  {
    id: 2,
    img: "/gallery/children-2.jpg",
    alt: "banner2",
  },
  {
    id: 3,
    img: "/gallery/children-4.jpg",
    alt: "banner3",
  },
  {
    id: 4,
    img: "/gallery/children-5.jpg",
    alt: "banner4",
  },
  {
    id: 5,
    img: "/gallery/children3.jpg",
    alt: "banner5",
  },
];

const StackImg = () => {
  const navigate=useNavigate()
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container">
      <div className="row justify-content-between d-flex align-items-center  py-5">


        <div className="col-md-4 ">
          <h5 className="text-center  fw-semibold border-bottom-title w-100 text-success" onClick={()=>navigate('/photo')}>
            Annual Days
          </h5>
          <div className="image-stack position-relative  ">
            {imageData.map((ph, index) => (
              <div
                className={`image-container ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                key={index}
                // onMouseEnter={() => setHoveredIndex(index)}
                // onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(index)}
               
                style={{ zIndex: hoveredIndex === index ? 10 : 5 - index }}
              >
                <img src={ph.img} alt={ph.alt} className="stack-image" />
              </div>
            ))}
          </div>
        </div>


        <div className="col-md-4 ">
          <h5 className="text-center  fw-semibold border-bottom-title w-100 text-success">
            Swimming & Raining Days
          </h5>

          <div className="image-stack position-relative ">
            {RainData.map((ph, index) => (
              <div
                className={`image-container ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                key={index}
                // onMouseEnter={() => setHoveredIndex(index)}
                // onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(index)}
                style={{ zIndex: hoveredIndex === index ? 10 : 5 - index }}
              >
                <img src={ph.img} alt={ph.alt} className="stack-image" />
              </div>
            ))}
          </div>
        </div>


        <div className="col-md-4 ">
          <h5 className="text-center  fw-semibold border-bottom-title w-100 text-success">
            Sports Days
          </h5>

          <div className="image-stack position-relative ">
            {childData.map((ph, index) => (
              <div
                className={`image-container ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                key={index}
                // onMouseEnter={() => setHoveredIndex(index)}
                // onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(index)}
                style={{ zIndex: hoveredIndex === index ? 10 : 5 - index }}
              >
                <img src={ph.img} alt={ph.alt} className="stack-image" />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* <div className="row justify-content-between d-flex align-items-center  ">
        <div className="col-md-4  ">
          <h5 className="text-center  fw-semibold border-bottom-title w-100 text-success">
            Annaul Days
          </h5>
          <div className="image-stack position-relative ">
            {imageData.map((ph, index) => (
              <div
                className={`image-container ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ zIndex: hoveredIndex === index ? 10 : 5 - index }}
              >
                <img src={ph.img} alt={ph.alt} className="stack-image" />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4 ">
          <h5 className="text-center  fw-semibold border-bottom-title w-100 text-success">
            Swimming & Raining Days
          </h5>

          <div className="image-stack position-relative ">
            {imageData.map((ph, index) => (
              <div
                className={`image-container ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ zIndex: hoveredIndex === index ? 10 : 5 - index }}
              >
                <img src={ph.img} alt={ph.alt} className="stack-image" />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4 ">
          <h5 className="text-center  fw-semibold border-bottom-title w-100 text-success">
            Sports Days
          </h5>

          <div className="image-stack position-relative ">
            {imageData.map((ph, index) => (
              <div
                className={`image-container ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ zIndex: hoveredIndex === index ? 10 : 5 - index }}
              >
                <img src={ph.img} alt={ph.alt} className="stack-image" />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default StackImg;
