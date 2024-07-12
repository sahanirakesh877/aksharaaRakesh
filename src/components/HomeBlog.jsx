import React from "react";
import "../css/Honmeblog.css";

const HomeBlog = () => {
  return (
    <>
      <div className="homeblog">
        <div className="container mx-auto">
        <h2 className=" border-bottom-title justify-content-center  my-3 head-color d-flex align-items-start">
              <span className="addcolor">Latest&nbsp;</span>Blog
            </h2>
            <p className="text-center">
              {" "}
              Stay updated with the latest news, events, and announcements from
              our school. Our blog provides insights and highlights to keep you
              informed and engaged.
              Our blog provides insights and highlights to keep you
              informed and engaged
            </p>
          <div className="row  py-5">
           
            <div className="col-md-3 ">
              <div className="card">
                <div className="card-header">
                  <img src="/gallery/children-1.jpg" alt="rover" />
                </div>
                <div className="card-body position-relative ">
                  <span className="tag tag-teal">School Event</span>
                  <h6>Upcoming Science Fair</h6>
                  <p >
                    Join us for a day  exciting science  and
                    discoveries.
                  </p>
                <button className="btn  px-3  text-white rounded-pill blog-btn shadow-sm position-absolute end-0 bottom-0    mb-1  mx-3  ">
                    Read More
                  </button>
                </div>
               
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img src="/gallery/children-2.jpg" alt="ballons" />
                </div>
                <div className="card-body position-relative ">
                  <span className="tag tag-purple">Announcement</span>
                  <h6>New Library Books</h6>
                  <p>Check out the latest additions to our school library.</p>
                  <button className="btn  px-3  text-white rounded-pill blog-btn shadow-sm position-absolute end-0 bottom-0    mb-1  mx-3  ">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img src="/gallery/children-5.jpg" alt="city" />
                </div>
                <div className="card-body position-relative ">
                  <span className="tag tag-pink">Event</span>
                  <h6>Sports Day Highlights</h6>
                  <p>Relive the best moments from our annual sports day.</p>
                  <button className="btn  px-3  text-white rounded-pill blog-btn shadow-sm position-absolute end-0 bottom-0    mb-1  mx-3  ">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img src="/gallery/children-4.jpg" alt="ballons" />
                </div>
                <div className="card-body position-relative ">
                  <span className="tag tag-purple">Reminder</span>
                  <h6>Parent-Teacher Meeting</h6>
                  <p>
                    Don't forget about the upcoming parent-teacher meetings.
                  </p>
                  <button className="btn  px-3  text-white rounded-pill blog-btn shadow-sm position-absolute end-0 bottom-0    mb-1  mx-3  ">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlog;
