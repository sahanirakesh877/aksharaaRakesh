import React from "react";

const Highschool = () => {
  return (
    <>
      <div className="kinderbanner my-md-0">
        <img src="/school/banner5.jpg" alt="High School Banner" />
        <h3 className="xyz">High School &nbsp; VII-X</h3>

        <div className="breadcrumb-container">
          <ul className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>High School</li>
          </ul>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="kinder-head mb-md-1">Senior School Program</h2>
              <p className="kinder-text">
                The Senior School Program at Aksharaa covers Grades VIII, IX,
                and X, following the Nepal Government's curriculum. Students
                take the Secondary Education Examination (SEE) in grade 10.
              </p>

              <h6 className="kinder-head mb-md-1">Teaching Methods</h6>
              <p className="kinder-text">
                Teaching methods include experiments, discussions,
                presentations, collaborative projects, and experiential
                learning. We aim to enhance knowledge, skills, and aptitude in a
                supportive environment.
              </p>

              <h6 className="kinder-head mb-md-1">Social-Emotional Learning</h6>
              <p className="kinder-text">
                We prioritize social-emotional learning, ensuring students feel
                accepted and valued. Our goal is to achieve the national
                education objectives through enriched learning activities.
              </p>

              <h6 className="kinder-head mb-md-1">
                Extracurricular Activities
              </h6>
              <p className="kinder-text">
                Students engage in various ECA programs like sports, arts, field
                trips, environmental initiatives, and community service, as well
                as CCA programs like elocution, creative writing, quizzes, and
                poem recitation. They can also participate in the Duke of
                Edinburgh International Award and Aksharaa Model United Nations.
              </p>

              <h2 className="kinder-head mb-md-1">
                Cultural and National Education
              </h2>
              <p className="kinder-text">
                Our students learn about Nepal's socio-cultural and ecological
                aspects, celebrating national festivals and heroes to foster
                inclusion, respect, and patriotism. We have high expectations
                and provide a supportive environment for students to excel and
                become the best version of themselves.
              </p>
            </div>
            <div className="col-md-6">
              <div className="g pb-3">
                <div className="gallerys">
                  <img src="/a.jpg" alt="a big park inside a modern city" />
                  <img src="/b.jpg" alt="a small street between buildings" />
                  <img src="/c.jpg" alt="view from the sky of a big city" />
                  <img src="/d.jpg" alt="a bridge at night" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highschool;
