import React from "react";
import "../css/ChairmanMsg.css";

const ChairmanMsg = () => {
  return (
    <>
      <div className="msgperson py-4">
        <div className="container shadow-lg p-4">
        <h3 className="chairman-header text-start">Messsage From <br /> The Chairman</h3>
          <div className="row align-items-start  ">
            <div className="col-lg-8">
              <div className="message-content">
                <p className="msg-text">
                
                  <span className="fs-6">   Dear Students and Parents,</span>

                  <br />
                  <br />
                  I am spellbound to share how Aksharaa School has progressed
                  over the last twelve years and become one of the benchmark
                  institutions for quality and excellence in the education
                  sector. The provision of a conducive learning environment with
                  the vision of serving the holistic needs of child’s
                  development has been accomplished swinging through thick and
                  thin since its inception. As a social entrepreneur, I always
                  feel pride that the school has served employment opportunities
                  to the capable; skilled and semi-skilled manpower at the local
                  level. Aksharaa’s highly structured resource centers offer
                  plentiful access to most updated resources, assets and
                  equipment to experience the best possible ways for teaching
                  and learning.
                  <br />
                  Our vision is to impart education adhering with international
                  standards by embracing the modern dynamic spectrum of
                  pedagogies. Our persistent efforts in building education and
                  its fundamentals has helped us revise and reform plans and
                  policies to adapt and change as the time demands. We
                  understand that each child is unique and possesses tremendous
                  potential and the school’s job is to unveil them in a fearless
                  and friendly manner. Most importantly, our qualified and
                  well-trained teachers showcase the art of teaching and mentor
                  the child with their expertise and skills. Twelve years
                  signifies time of maturity and what we have accomplished so
                  far, but also a reality check on how many ways we can do even
                  better.
                  <br />
                  We are aware of the challenges that lie before us and are
                  committed to leave no stones unturned to support the legacy of
                  this institution. We want students to soar high-morally,
                  socially and spiritually. We also believe that imparting
                  humility and skills in students is even more challenging than
                  imparting knowledge, however our empowered team is
                  relentlessly contributing on shaping the values and character
                  education as a whole.
                  <br />
                  Lastly, I thank you all for entrusting us with your child’s
                  education and venturing for educational outcomes.I believe
                  Aksharaa progresses fast, helping our communities of learners
                  and parents to attain desired educational results.
                  <br />
                  <br />
                <span className="fs-6 py-1 fw-semibold">  Warm Regards</span>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="fancy-border">
                <img
                  src="https://www.aksharaaschool.edu.np/public/assets/images/ChairmanSir.jpg"
                  alt="Chairman Image"
                  className="img-fluid rounded  chairman-image"
                />

                <div className="pt-3 ">
                  <h4 className="chairman-name ">Radheshyam Khadka</h4>
                  <p className="chairman-title">Chairman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChairmanMsg;
