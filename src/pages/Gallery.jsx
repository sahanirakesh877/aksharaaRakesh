import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Download from "yet-another-react-lightbox/plugins/download";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Share from "yet-another-react-lightbox/plugins/share";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "school/banner1.jpg", alt: "School Banner 1" },
    { src: "school/banner2.jpg", alt: "School Banner 2" },
    { src: "school/banner3.jpg", alt: "School Banner 3" },
    { src: "https://image.freepik.com/free-photo/stylish-young-woman-with-bags-taking-selfie_23-2147962203.jpg", alt: "Stylish Young Woman Taking Selfie" },
    { src: "https://image.freepik.com/free-photo/pretty-girl-near-car_1157-16962.jpg", alt: "Pretty Girl Near Car" },
    { src: "https://image.freepik.com/free-photo/blonde-tourist-taking-selfie_23-2147978899.jpg", alt: "Blonde Tourist Taking Selfie" },
    { src: "https://image.freepik.com/free-photo/cute-girls-oin-studio_1157-18211.jpg", alt: "Cute Girls in Studio" },
    { src: "school/banner4.jpg", alt: "School Banner 4" },
    { src: "school/banner5.jpg", alt: "School Banner 5" },
    { src: "school/banner1.jpg", alt: "School Banner 1" },
    { src: "https://image.freepik.com/free-photo/stylish-pin-up-girls_1157-18451.jpg", alt: "Stylish Pin-Up Girls" },
    { src: "https://image.freepik.com/free-photo/stylish-pin-up-girl_1157-18940.jpg", alt: "Stylish Pin-Up Girl" },
  ];

  const handleOpen = (index) => {
    setCurrentIndex(index); // Update currentIndex with the clicked index
    setOpen(true);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Gallery</h2>
      <div className="row">
        {images.map((image, index) => (
          <div
            key={index}
            className={`col-lg-3 col-md-12 mb-4`}
            onClick={() => handleOpen(index)}
          >
            <img src={image.src} alt={image.alt} className="img-fluid rounded shadow" />
          </div>
        ))}
      </div>
      <Lightbox
        open={open}
        slides={images}
        currentIndex={currentIndex} 
        close={() => setOpen(false)}
        plugins={[Zoom, Download, Share, Counter]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        zoom={{
          maxZoom: 5,
          zoomInLabel: 'Zoom In',
          zoomOutLabel: 'Zoom Out'
        }}
      />
    </div>
  );
};

export default Gallery;
