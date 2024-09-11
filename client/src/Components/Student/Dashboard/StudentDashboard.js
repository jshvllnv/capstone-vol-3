import React, { Fragment, useState } from "react";
import "../Dashboard/StudentDashboard.css";
import StudentSideBar from "../Shared/StudentSideBar";
import Calendar from "react-calendar";

//Import Carousel
import carouselItem1 from "/Capstone/Vol. 3/client/src/Assets/carousel/carousel-item-1.jpg";
import carouselItem2 from "/Capstone/Vol. 3/client/src/Assets/carousel/carousel-item-2.jpg";
import carouselItem3 from "/Capstone/Vol. 3/client/src/Assets/carousel/carousel-item-3.jpg";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const [currentDate, setDate] = useState(new Date());

  const onChangeDate = (currentDate) => {
    setDate(currentDate);
  };
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <div className="row g-0 d-flex">
          {/* SideBar */}
          <div className="col-auto">
            <StudentSideBar />
          </div>

          {/* Content */}

          <div className="col p-4 mt-1">
            <h5 className="text-start">Dashboard</h5>
            <div className="row d-flex p-2 rounded-3 mb-4 align-items-start justify-content-between">
              <div className="col-md-9 p-3">
                <div className="row d-flex align-items-start justify-content-between">
                  <div className="mb-3">
                    <h2 className="fw-light text-start">
                      Hello <span className="fw-bold">Student!</span>
                    </h2>
                    <p className="text-start">Welcome to your dashboard</p>
                  </div>

                  {/* Total Applications */}
                  <div
                    className="col-md-4 rounded-3 border border-2 border-light"
                    style={{ backgroundColor: "#3F51B5" }}
                  >
                    <div className="card-body text-light px-3">
                      <h6 className="card-title text-end fw-normal mb-4">
                        Total Applications
                      </h6>
                      <div className="mb-4 d-flex align-items-center justify-content-between">
                        <i className="fa fa-solid fa-clipboard-check fs-1"></i>
                        <h1>0</h1>
                      </div>
                      <div className="bg-light py-2 px-3 rounded-3 mx-2">
                        <Link
                          to={"/student/view/application"}
                          className="text-decoration-none d-flex align-items-center justify-content-between"
                          style={{ color: "#3F51B5" }}
                        >
                          <span className="fw-bold">View</span>
                          <i className="fa fa-solid fa-chevron-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Total Examinations */}
                  <div
                    className="col-md-4 rounded-3 border border-2 border-light"
                    style={{ backgroundColor: "#E64A19" }}
                  >
                    <div className="card-body text-light px-3">
                      <h6 className="card-title text-end fw-normal mb-4">
                        Total Examinations
                      </h6>
                      <div className="mb-4 d-flex align-items-center justify-content-between">
                        <i className="fa fa-solid fa-pen fs-1"></i>
                        <h1>0</h1>
                      </div>
                      <div className="bg-light py-2 px-3 rounded-3">
                        <Link
                          to={"/student/view/examination"}
                          className="text-decoration-none d-flex align-items-center justify-content-between"
                          style={{ color: "#E64A19" }}
                        >
                          <span className="fw-bold">View</span>
                          <i className="fa fa-solid fa-chevron-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Total Interview */}
                  <div
                    className="col-md-4 rounded-3 border border-2 border-light"
                    style={{ backgroundColor: "#4CAF50" }}
                  >
                    <div className="card-body text-light px-3">
                      <h6 className="card-title text-end fw-normal mb-4">
                        Total Interviews
                      </h6>
                      <div className="mb-4 d-flex align-items-center justify-content-between">
                        <i className="fa fa-solid fa-calendar fs-1"></i>
                        <h1>0</h1>
                      </div>
                      <div className="bg-light py-2 px-3 rounded-3">
                        <Link
                          to={"/student/view/interview"}
                          className="text-decoration-none d-flex align-items-center justify-content-between"
                          style={{ color: "#4CAF50" }}
                        >
                          <span className="fw-bold">View</span>
                          <i className="fa fa-solid fa-chevron-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Status Table */}

                  <div className="col-md-12 mt-4 p-0 text-start text-dark">
                    {/* Status */}
                    <div className="table-responsive-md">
                      <table className="table table-striped table-hover table-bordered align-middle">
                        <thead
                          className="text-white text-center"
                          style={{ backgroundColor: "#182952" }}
                        >
                          <tr>
                            <th scope="col">School</th>
                            <th scope="col">Application</th>
                            <th scope="col">Examination</th>
                            <th scope="col">Interview</th>
                          </tr>
                        </thead>
                        <tbody className="table-light text-center">
                          <tr>
                            <th scope="row">STI College Marikina</th>
                            <td>Not taken yet</td>
                            <td>Not taken yet</td>
                            <td>Not taken yet</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 rounded-3 text-start text-dark">
                {/* Calendar */}
                <div className="row gx-md-2 mb-2 bg-light rounded-3">
                  <Calendar
                    className="mb-3 custom-calendar"
                    onChange={onChangeDate}
                    value={currentDate}
                  />
                </div>

                {/* Announcements */}
                <div
                  className="row gx-md-2 mb-2 text-light rounded-3 p-3"
                  style={{ backgroundColor: "#182952" }}
                >
                  <h6 className="mb-4 fw-bold">Announcements</h6>
                </div>

                {/* Exam Results Overview */}
                <div className="row gx-md-2 mb-2 text-dark bg-light border border-3 rounded-3 p-3">
                  <h6 className="mb-4 fw-bold">Exam Results Overview</h6>
                </div>
              </div>
            </div>

            <div className="row d-flex p-2 rounded-3 align-items-start justify-content-between"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StudentDashboard;
