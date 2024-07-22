import React from "react";
import "../css/infograph.css";

const Infograph = () => {
  const boxes = [
    "Empathy",
    "Critical Thinking",
    "Life Long Learners",
    "Responsibility",
    "Integrity",
    "Reliability",
    "Collaboration",
    "Respectability",
    "Effective Communication",
    "Positivity",
  ];

  return (
    <>
      <div className="container py-5">
        <h2 className="border-bottom-title w-100 text-center  head-color">
          <span className="addcolor"> Our Core </span> Values
        </h2>
        <div className="d-flex flex-wrap justify-content-center py-5  gap-4">
          {boxes.map((content, index) => (
            <div key={index} className={`box box-${index + 1}`}>
              <p className="info_p fw-bold  fs-5 text-center"> {content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Infograph;
