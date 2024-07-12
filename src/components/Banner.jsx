import React from "react";

const carouselData = [
  {
    id: 4,
    image: "/y.jpg",
     title: "Engaging and interactive learning experiences",
  
  },
  {
    id: 0,
    image: "/selected/home3.webp",
     title: "Exploring new horizons and growing knowledge",
  
  },
  {
    id: 1,
    image: "/selected/home7.webp",
  title: "Engaging and interactive learning experiences",
  
  },
  {
    id: 2,
    image: "/selected/home55.webp",
    title: "Fostering creativity and independent learning",
  
  },
 
  {
    id: 3,
    image: "/x.jpg",
 title: "Exploring new horizons and growing knowledge",
  
  },

  {
    id: 5,
    image: "/c.jpg",
   title: "Engaging and interactive learning experiences",

  },
];

const Banner = () => {
  return (
    <>
      <section className="home">
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-controls">
            <ol className="carousel-indicators">
              {carouselData.map((item, index) => (
                <li
                  key={item.id}
                  data-bs-target="#carousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              ))}
            </ol>

            <a
              className="carousel-control-prev"
              href="#carousel"
              role="button"
              data-bs-slide="prev"
            >
              <img src="/left-arrow.svg" alt="Prev" />
            </a>
            <a
              className="carousel-control-next"
              href="#carousel"
              role="button"
              data-bs-slide="next"
            >
              <img src="/right-arrow.svg" alt="Next" />
            </a>
          </div>

          <div className="carousel-inner">
            {carouselData.map((item, index) => (
              <div
                key={item.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="container">
                  {/* <h2>{item.title}</h2> */}
                  <p className=" px-4 fs-5"> Playgroup to Grade 10</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
