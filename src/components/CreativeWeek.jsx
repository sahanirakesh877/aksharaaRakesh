import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../css/Creative.css";

const CreativeWeek = () => {
  const brandImg = [
    "/school/banner1.jpg",
    "/school/banner2.jpg",
    "/school/banner3.jpg",
    "/school/banner4.jpg",
    "/school/banner5.jpg",
  ];
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };
  const items = brandImg.map((img, index) => (
    <div className="creative-item card border-0 p-3 m-md-0 p-md-1" key={index}>
      <div className="img-container">
        <img src={img} alt={`Brand ${index + 1}`} className="card-img-top" />
      </div>
      <div className="card-body my-md-0  border position-relative ">
        <h5 className="text-danger my-md-0 d-inline ">Annula Function</h5>
        <p className="creative-text  my-md-0 pb-5"> Join us for an Exciting lineup of workshops and seminars that will inspire and empower you!
        Don't miss out on our annual college fest—packed with fun activities, competitions, and unforgettable experiences</p>

       
          <div className="btn_wraps position-absolute end-0  bottom-0 my-2 me-3">
            <span className="share">
              Share <i class="fa-solid fa-share"></i>
            </span>
            <div className="share-icon">
              <i className="fab fa-facebook-f creative_i" />
              <i className="fab fa-whatsapp creative_i " />
              <i className="fab fa-instagram creative_i" />
              <i className="fab fa-linkedin creative_i" />
            </div>
          </div>
        </div>
     
    </div>
  ));

  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6">
            <h2 className="text-center border-bottom-title w-100 head-color mb-5">
              <span className="addcolor">Creatives Of </span> This Week
            </h2>

            <AliceCarousel
              mouseTracking
              items={items}
              autoPlay={true}
              infinite={true}
              autoPlayDirection="rtl"
              responsive={responsive}
              controlsStrategy="alternate"
              animationDuration={9000}
              disableButtonsControls={true}
            />
          </div>
          <div className="col-lg-6">
            <h2 className="text-center border-bottom-title w-100 head-color mb-5">
              <span className="addcolor">Important </span> Notice
            </h2>
            <div className="creative-items border">
              <img
                src="https://img.freepik.com/free-vector/flat-design-back-school-sales-concept_23-2148612151.jpg?t=st=1720522381~exp=1720525981~hmac=0b926379529b99d0a0f8b16688a8eb23dd8e5edf8df360bb2a1eaf7decc669af&w=826"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeWeek;
