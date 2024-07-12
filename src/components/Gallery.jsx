import React from "react";

// const imageData = [
//   { id: 1, src: "/school/banner1.jpg", alt: "Children 1" },
//   { id: 2, src: "/gallery/children-2.jpg", alt: "Children 2" },
//   { id: 3, src: "/gallery/children3.jpg", alt: "Children 3" },
//   { id: 4, src: "/gallery/children-4.jpg", alt: "Children 4" },
//   { id: 5, src: "/gallery/children-5.jpg", alt: "Children 5" },
//   { id: 6, src: "/banner1.jpg", alt: "Banner 1" },
//   { id: 7, src: "/banner2.jpg", alt: "Banner 2" },
//   { id: 8, src: "/banner3.jpg", alt: "Banner 3" }
// ];
// const imageData = [
//   { id: 1, src: "/school/banner1.jpg", alt: "Children 1" },
//   { id: 2, src: "/school/banner2.jpg", alt: "banner2" },
//   { id: 3, src: "/school/banner3.jpg", alt: "banner3" },
//   { id: 4, src: "/school/banner4.jpg", alt: "banner4" },
//   { id: 5, src: "/school/banner5.jpg", alt: "banner5" },
//   { id: 6, src: "/school/home11.JPG", alt: "Banner1" },
//   { id: 7, src: "/school/home33.JPG", alt: "Banner 2" },
//   { id: 8, src: "/school/home77.JPG", alt: "Banner77" }
// ];
const imageData = [
  { id: 1, src: "/a.jpg", alt: "Children 1" },
  { id: 2, src: "/b.jpg", alt: "banner2" },
  { id: 3, src: "/c.jpg", alt: "banner3" },
  { id: 4, src: "/d.jpg", alt: "banner4" },
  { id: 5, src: "/e.jpg", alt: "banner5" },
  { id: 6, src: "/school/home11.JPG", alt: "Banner1" },
  { id: 7, src: "/school/home33.JPG", alt: "Banner 2" },
  { id: 8, src: "/school/home77.JPG", alt: "Banner77" },
];

const Gallery = () => {
  return (
    <>
      <div className="bggallery bg-light">
        <h2 className="text-center w-100 border-bottom-title addcolor">
          Explore <span className="head-color">Gallery</span>
        </h2>
        <div className="container mx-auto ">
          <div className="row galleryitems  ">
            <div className="gallery">
              {imageData.map((image, index) => (
                <span key={image.id} style={{ "--i": index + 1 }}>
                  <img src={image.src} alt={image.alt} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
