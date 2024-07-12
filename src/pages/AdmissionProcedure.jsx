import React from "react";
import Enquiryform from "./../components/Enquiryform";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const brandImg = [
  "https://img.freepik.com/premium-vector/best-creative-school-admission-social-media-post-banner-design-template-yellow-green-color_609667-302.jpg?w=740",
  "https://img.freepik.com/premium-vector/school-admission-post-template-design_1086880-32.jpg?w=740",
  "https://img.freepik.com/free-psd/school-admission-social-media-post-instagram-post-template_237398-429.jpg?t=st=1720163238~exp=1720166838~hmac=20989205d917dc2f2bcdda23b33c9c40c93a25291290ebd514148458fa754518&w=740",
  "https://img.freepik.com/premium-vector/back-school-social-media-post-web-banner-template_649495-15.jpg?w=740",
 
];
const responsive = {
  0: { items: 1 },
  568: { items: 1},
  1024: { items: 1 },
};
const items = brandImg.map((img, index) => (
  <div className="academic-items " key={index}>
    <img src={img} alt={`Brand ${index + 1}`} className="" />
  </div>
));

const AdmissionProcedure = () => {
  return (
    <>
      <div className="kinderbanner my-md-0 ">
        <img src="/school/banner2.jpg" alt="Kindergarten" />
        <h3 className="xyz">Admission Process</h3>
        <div className="breadcrumb-container">
          <ul className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Admission Procedure</li>
          </ul>
        </div>
      </div>

      <div className="bg-light my-md-0">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6 ">
              <h3 className="kinder-head mb-md-1">Admission Process :</h3>
              <p className="kinder-text">
                The Admission Process is as follows:
              </p>
              <ul className="list-unstyled ">
                <li className="d-flex admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  The parents of prospective students are given a tour of the
                  School.
                </li>
                <li className="d-flex admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  Parents file an application for admission in person or via the
                  school website.
                </li>
                <li className="d-flex  admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  After the evaluation of application, parents are notified of
                  entrance tests and interview dates.
                </li>
                <li className="d-flex admission-li">
                  {" "}
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  While the Admission Team interviews parents, students appear
                  in the written and oral test.
                </li>
                <li className="d-flex admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  Acceptance of a child is based on a child's academic aptitude,
                  socio emotional development and on parents' willingness to be
                  working partner with the school in the educational process.
                </li>
                <li className="d-flex admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  Within 3 days of the written test and interview, the school
                  will inform the parents through phone for confirmation.
                </li>
                <li className="d-flex admission-li">
                  <i className="fas fa-check-square me-2 text-danger"></i>
                  Within 7 days from the date of confirmation, parents are
                  required to register the child.
                </li>
              </ul>
            </div>

            <div className="col-md-6 ">
            <h3 className="kinder-head mb-md-1">Admission Related Notices :</h3>
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
                
              />

            </div>
            <div className="col-12">
              <h3 className="kinder-head my-md-4">
                {" "}
                For Admission Enquiry{" "}
                <span className="text-danger">
                  fill this below given form :
                </span>
              </h3>

              <Enquiryform />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionProcedure;
