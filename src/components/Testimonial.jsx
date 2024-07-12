import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const testimonialData = [
  {
    id: 1,
    title: "Excellent Education",
    description:
      "The teachers at Akshara School are fantastic! They have provided my child with the support and encouragement needed to excel academically and personally.",
    image: "team_1.jpg",
    name: "John Doe",
    post: "Parent",
    rating: 5,
  },
  {
    id: 2,
    title: "Caring Environment",
    description:
      "Akshara School offers a nurturing and safe environment. My daughter loves going to school every day, and as a parent, I couldn't be happier.",
    image: "team_2.jpg",
    name: "Jane Smith",
    post: "Parent",
    rating: 5,
  },
  {
    id: 3,
    title: "Holistic Development",
    description:
      "Akshara School focuses on holistic development. My son is not only excelling in academics but also in extracurricular activities, thanks to the wonderful programs.",
    image: "team_3.jpg",
    name: "Emily Johnson",
    post: "Parent",
    rating: 5,
  },
  {
    id: 4,
    title: "Supportive Community",
    description:
      "The school community is very supportive. The teachers and staff are always willing to help and provide the necessary resources for my child's success.",
    image: "team_1.jpg",
    name: "Michael Brown",
    post: "Parent",
    rating: 5,
  },
  // Add more testimonials here
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
};

const items = testimonialData.map((testimonial) => (
  <div className="item" key={testimonial.id}>
    <div className="testimonial">
      <h3 className="title">{testimonial.title}</h3>
      <p className="description">{testimonial.description}</p>
      <div className="testimonial-content">
        <div className="pic">
          <img src={testimonial.image} alt={testimonial.name} />
        </div>
        <div className="content">
          <h4 className="name">{testimonial.name}</h4>
          <span className="post">{testimonial.post}</span>
          <ul className="rating">
            {Array(testimonial.rating)
              .fill()
              .map((_, index) => (
                <li className="fa fa-star" key={index} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
));

const Testimonial = () => {
  return (
    <>
      <div className="demo py-4">
        <div className="container">
          <h2 className="border-bottom-title w-100 text-center  head-color">
          <span className="addcolor">  Parents</span> Voice
          </h2>
          <div className="row d-flex justify-content-between align-items-center py-4">
            <AliceCarousel
              mouseTracking
              items={items}
              autoPlay={true}
              infinite={true}
              responsive={responsive}
              controlsStrategy="alternate"
              animationDuration="1500"
              disableButtonsControls={false}
              disableDotsControls={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
