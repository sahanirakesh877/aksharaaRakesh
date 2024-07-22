import React from "react";
import "../css/Honmeblog.css";


const blogData = [
  {
    imgSrc: "/gallery/children-1.jpg",
    tag: "School Event",
    title: "Upcoming Science Fair",
    description: "Join us for a day of exciting science and discoveries.",
    tagClass: "tag-teal",
  },
  {
    imgSrc: "/gallery/children-2.jpg",
    tag: "Announcement",
    title: "New Library Books",
    description: "Check out the latest additions to our school library.",
    tagClass: "tag-purple",
  },
  {
    imgSrc: "/gallery/children-5.jpg",
    tag: "Event",
    title: "Sports Day Highlights",
    description: "Relive the best moments from our annual sports day.",
    tagClass: "tag-pink",
  },
  {
    imgSrc: "/gallery/children-4.jpg",
    tag: "Reminder",
    title: "Parent-Teacher Meeting",
    description: "Don't forget about the upcoming parent-teacher meetings.",
    tagClass: "tag-purple",
  },
];

const HomeBlog = () => {
  return (
    <div className="homeblog">
      <div className="container mx-auto">
        <h2 className="border-bottom-title justify-content-center my-3 head-color d-flex align-items-start">
          <span className="addcolor">Latest&nbsp;</span>Blog
        </h2>
        <p className="text-center">
          Stay updated with the latest news, events, and announcements from our
          school. Our blog provides insights and highlights to keep you informed
          and engaged.
        </p>
        <div className="row py-5">
          {blogData.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-header p-0">
                  <img src={item.imgSrc} alt={item.title} className="img-fluid w-100" />
                </div>
                <div className="card-body position-relative">
                  <span className={`tag ${item.tagClass}`}>{item.tag}</span>
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                  <button className="btn px-3 text-white rounded-pill blog-btn shadow-sm position-absolute end-0 bottom-0 mb-1 mx-3">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
