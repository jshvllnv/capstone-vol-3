import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../HomePage/HomePage.css";
import CCLogo from "/Capstone/Vol. 3/client/src/Assets/logo-white.png";
import ShowCase from "/Capstone/Vol. 3/client/src/Assets/1.svg";
import Section1 from "/Capstone/Vol. 3/client/src/Assets/2.svg";

// Our Team (Pictures)
import Sayson from "/Capstone/Vol. 3/client/src/Assets/team/sayson.jpg";
import Pegenia from "/Capstone/Vol. 3/client/src/Assets/team/pegenia.jpg";
import Villanueva from "/Capstone/Vol. 3/client/src/Assets/team/villanueva.jpg";

const HomePage = () => {
  return (
    <Fragment>
      {/* Navigation Bar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark p-1 fixed-top"
        style={{ backgroundColor: "#182952" }}
      >
        <div className="container">
          {/* Website Logo */}
          <a className="navbar-brand" href="#">
            <img
              src={CCLogo}
              alt="CampusConnect"
              className="img-fluid web-logo"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto fs-5">
              <li className="nav-item mx-2">
                <a href="#learn" className="nav-link text-white">
                  How It Works
                </a>
              </li>
              <li className="nav-item mx-2">
                <a href="#aboutus" className="nav-link text-white">
                  About
                </a>
              </li>
              <li className="nav-item mx-2">
                <a href="#contactus" className="nav-link text-white">
                  Contact
                </a>
              </li>
              <li className="nav-item mx-2">
                <a href="#ourteam" className="nav-link text-white">
                  Our Team
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto fs-5 align-items-center">
              <Link
                to={"/login"}
                style={{ textDecoration: "none", color: "white" }}
                className="mx-2"
              >
                <button
                  type="button"
                  className="btn btn-secondary rounded text-white px-3"
                >
                  Login
                </button>
              </Link>
              <Link
                to={"/register/student/email"}
                style={{ textDecoration: "none", color: "white" }}
                className="mx-2"
              >
                <button type="button" className="btn text-white">
                  Sign Up
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      {/* Showcase */}

      <section className="bg-white text-dark text-center p-5 m-5 text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div style={{ color: "#182952" }}>
              <h2 className="fw-bolder">
                Ready to Conquer Your
                <span style={{ color: "#E14594" }}> Academic Goals?</span>
              </h2>
              <h6 className="fw-bold fs-5 mb-4">
                Start with Our Comprehensive Entrance Exam Process!
              </h6>

              <h6 className="fw-normal fs-5 text-break">
                ‘From application management to result publication and course
                recommendation, Campus Connect provides the best path for your
                academic journey. Focus on achieving your dreams while we guide
                you every step of the way!’
              </h6>

              <button
                className="btn btn-lg text-white mt-3"
                style={{ backgroundColor: "#182952" }}
              >
                <Link
                  to={"/login"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Start
                </Link>
                <i className="bi bi-chevron-right ms-3"></i>
              </button>
            </div>

            <img
              className="img-fluid w-50 d-none d-sm-block"
              src={ShowCase}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}

      <section
        className="p-5 text-light"
        id="learn"
        style={{ backgroundColor: "#182952" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src={Section1} className="img-fluid" alt="" />
            </div>
            <div className="col-md p-5 fw-bold">
              <h2 className="fw-bold">How It Works</h2>
              <p className="lead mt-5">
                Campus Connect optimizes the school admission process by
                providing a{" "}
                <span style={{ color: "#E14594" }}>centralized </span>platform
                for both students and schools for a smoother experience.
                Students can easily manage and upload their entrance exam
                requirements, submit and track the status of their applications,
                view entrance examination and interview schedules, and receive
                personalized course recommendations based on their results. For
                schools, Campus Connect offers tools to create and post
                application announcements, process and review applications,
                manage exam schedules efficiently, and create, upload, and
                evaluate digital exams. Additionally, the platform supports
                direct communication between students and schools for inquiries
                related to the entrance exam application. Overall, Campus
                Connect ensures a smoother, more efficient admission process for
                all users.
                {/* Our website{" "}
                <span style={{ color: "#E14594" }}>streamlines</span> the entire
                school admission process. Students start by creating an account
                and submitting their documents online. After review, schools
                schedule the entrance exam, which is conducted via our platform,
                though students attend in person. Based on the exam results,
                course recommendations are provided. If the student passes, an
                interview is scheduled through the website, making the journey
                from application to admission seamless and efficient. */}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}

      <section className="p-5 mt-3 mb-3">
        <div className="container">
          <div className="row text-center g-5">
            <div className="col-md">
              <div
                className="card text-light"
                style={{ backgroundColor: "#182952" }}
              >
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <h3 className="card-title mb-3">Simplicity</h3>
                  <p className="card-text">
                    Campus Connect offers a user-friendly interface for both
                    students and school that will use the website. The
                    streamlined design of the website ensures that users can
                    easily navigate through various sections with ease. With
                    clear instructions and a straightforward process, Campus
                    Connect simplifies the entrance exam application and
                    management experience, ensuring that no steps in the
                    application are missed.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div
                className="card text-light"
                style={{ backgroundColor: "#182952" }}
              >
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <h3 className="card-title mb-3">Convenience</h3>
                  <p className="card-text">
                    Campus Connect allows students to manage their entrance exam
                    applications, schedules, and results all in one place,
                    reducing the need to visit multiple platforms. Schools can
                    also handle applications, create schedules, and evaluate
                    exams through the platform, saving time and resources. The
                    website’s 24/7 accessibility ensures overall efficiency and
                    integrity of the whole entrance exam application process.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div
                className="card text-light"
                style={{ backgroundColor: "#182952" }}
              >
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <h3 className="card-title mb-3">Personalization</h3>
                  <p className="card-text">
                    Campus Connect can help students make crucial decisions on
                    their academic career thanks to the provided course
                    recommendation feature, which bases its results on the exam
                    results of each student. The website also permits schools to
                    customize announcements and exam requirements, ensuring that
                    their specific needs are met while providing relevant
                    information to prospective students.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}

      <section
        className="p-5"
        id="contactus"
        style={{ backgroundColor: "#182952" }}
      >
        <div className="container">
          <div className="row p-5 g-5 text-white align-items-center justify-content-between">
            <div className="col-md text-md-start">
              <h1 className="fw-bold">
                Get In Touch
                <span style={{ color: "#E14594" }}> With </span>
                Us
              </h1>
              <p className="lead mt-3">
                Want to get in touch with us? Fill out the form, and we'll get
                back to you as soon as possible. We're here to answer any
                questions and assist you in any way we can!
              </p>
            </div>
            <div className="col-md text-md-start">
              <form class="row g-4">
                <div class="col-md-6">
                  <label for="contact_first_name" class="form-label lead">
                    First Name <span style={{ color: "#FF2852" }}>*</span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="contact_first_name"
                    placeholder="John"
                  />
                </div>
                <div class="col-md-6">
                  <label for="contact_last_name" class="form-label lead">
                    Last Name <span style={{ color: "#FF2852" }}>*</span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="contact_last_name"
                    placeholder="Doe"
                  />
                </div>
                <div class="col-md-8">
                  <label for="contact_email" class="form-label lead">
                    Email <span style={{ color: "#FF2852" }}>*</span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="contact_email"
                    placeholder="ex. johndoe@email.com"
                  />
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label lead">
                    Message <span style={{ color: "#FF2852" }}>*</span>
                  </label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Enter a message"
                  />
                </div>
                <div class="col-12">
                  <button
                    type="submit"
                    class="btn btn-primary form-control p-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}

      <section className="p-5" id="questions">
        <div className="container">
          <h2 className="text-center m-4 fw-bold">
            Frequently Asked Questions
          </h2>
          <div className="accordion accordion-flush mt-5" id="questions">
            {/* <!-- Item 1 --> */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-one"
                >
                  How do I apply for an entrance exam online?
                </button>
              </h2>
              <div
                id="question-one"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  To apply for an entrance exam online, you first need to create
                  an account on the website. Once registered, navigate to the
                  Exam Application module where you can fill out and submit your
                  application. The system will guide you through each step,
                  ensuring that all necessary information is provided. After
                  submission, you'll receive a confirmation email and can
                  monitor your application status through your dashboard.
                </div>
              </div>
            </div>
            {/* <!-- Item 2 --> */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-two"
                >
                  Can I upload official documents online? Will my documents be
                  safely stored and will be viewed by authorized personnel only?
                </button>
              </h2>
              <div
                id="question-two"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  The website provides a File Maintenance module where you can
                  easily upload and manage all required documents for your
                  entrance exam application. Accepted file formats and size
                  limits will be clearly indicated to ensure a smooth and
                  secured upload process. After uploading, your documents are
                  securely stored in the system’s database, where they are
                  accessible only to authorized personnel. You can also view and
                  update your uploaded files at any time before the application
                  deadline.
                </div>
              </div>
            </div>
            {/* <!-- Item 3 --> */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-three"
                >
                  How will I know if my entrance exam application has been
                  accepted?
                </button>
              </h2>
              <div
                id="question-three"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  After submitting your entrance exam application, you can track
                  its status through the Reports module, which is available on
                  your dashboard. The system will notify the user of any
                  updates, such as acceptance, required corrections, or
                  additional document requests. You’ll also receive an email
                  confirmation once your application is officially accepted.
                  This way, you stay informed throughout the entire application
                  process.
                </div>
              </div>
            </div>

            {/* <!-- Item 4 --> */}

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-four"
                >
                  When and how will I receive my entrance exam results?
                </button>
              </h2>
              <div
                id="question-four"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Entrance exam results are automatically generated by the
                  system and will be available shortly after the exam is
                  completed. You can view your results through the Examination
                  module on your dashboard, where you’ll find detailed feedback
                  on your performance. Additionally, the website may send you an
                  email notification once your results are ready. The website
                  also uses a Program Recommender module,where you will receive
                  personalized course recommendations based on your exam scores,
                  enabling you to make informed decisions for your academic
                  career..
                </div>
              </div>
            </div>

            {/* <!-- Item 5 --> */}

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-five"
                >
                  What happens if I encounter issues during the application
                  process?
                </button>
              </h2>
              <div
                id="question-five"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  If you encounter any issues during the application process,
                  the website offers multiple support options to assist you. You
                  can use the Contact Us & Chatbot module to reach out to the
                  support team for immediate help with common problems.
                  Additionally, there are FAQs and guides available that address
                  various technical and procedural questions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section
        id="ourteam"
        className="p-5"
        style={{ backgroundColor: "#182952" }}
      >
        <div className="container my-4">
          <h2 className="text-center text-white mb-4 fw-bold">Meet Our Team</h2>
          <p className="lead text-center text-white mb-5">
            We are from STI College Marikina, dedicated to enhancing the
            traditional entrance exam process. Our platform aims to simplify the
            journey for both students and schools, making admissions more
            efficient and accessible.
          </p>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src={Sayson}
                    className="rounded-circle mb-3 team-picture"
                    alt=""
                  />
                  <h3 className="card-title mb-1">Michael Sayson</h3>
                  <p className="card-text lead fw-normal ">4th Year Student</p>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src={Pegenia}
                    className="rounded-circle mb-3 team-picture"
                    alt=""
                  />
                  <h3 className="card-title mb-1">Jade Pegenia</h3>
                  <p className="card-text lead fw-normal ">4th Year Student</p>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src={Villanueva}
                    className="rounded-circle mb-3 team-picture"
                    alt=""
                  />
                  <h3 className="card-title mb-1">Josh Villanueva</h3>
                  <p className="card-text lead fw-normal">4th Year Student</p>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="bg-dark text-center text-white">
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright
        </div>
      </footer>
    </Fragment>
  );
};

export default HomePage;
