import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "/Capstone/Vol. 3/client/src/Components/School/Shared/SideBar/SchoolSideBar.css";

// Import Images

import schoolImagePlaceholder from "/Capstone/Vol. 3/client/src/Assets/profile/school-image-placeholder.jpg";

const SchoolSideBar = () => {
  return (
    <Fragment>
      {/* SideBar */}

      <div className="col-auto text-light full-height vh-100 d-flex flex-column align-items-center justify-content-center d-none d-lg-block school-side-bar px-3">
        <div className="p-3">
          {/* SideBar Header */}
          <div className="mb-4">
            <img
              src={schoolImagePlaceholder}
              alt="school-image"
              className="rounded-circle p-0 student-image my-4"
            />
            <h6 className="text-start fw-bold">School Name Here</h6>
            <p className="text-start fst-italic">School</p>
            <hr />
          </div>

          {/* SideBar Links */}
          <ul class="nav nav-pills flex-column mt-4 text-start">
            {/* Dashboard Button */}
            <li class="nav-item py-3 rounded-3">
              <Link to={"/school/dashboard"} className="text-decoration-none">
                <a class="nav-link text-light fw-normal p-0">
                  <i className="fa fa-solid fa-house fs-5"></i>
                  <span className="fs-6 ms-3 d-none d-md-inline">
                    Dashboard
                  </span>
                </a>
              </Link>
            </li>

            {/* Application Button */}

            <div className="py-3">
              <p>
                <small>APPLICATION</small>
              </p>
              <li class="nav-item rounded-3">
                <Link
                  to={"/school/application"}
                  className="text-decoration-none"
                >
                  <a class="nav-link text-light fw-normal p-0">
                    <i className="fa fa-solid fa-users fs-5"></i>
                    <span className="fs-6 ms-3 d-none d-md-inline">
                      List of Applicants
                    </span>
                  </a>
                </Link>
              </li>
            </div>

            {/* Announcement Button */}

            <div className="py-3">
              <p>
                <small>ANNOUNCEMENT</small>
              </p>
              <li class="nav-item rounded-3">
                <Link
                  to={"/student/view/examination"}
                  className="text-decoration-none"
                >
                  <a class="nav-link text-light fw-normal p-0">
                    <i className="fa fa-solid fa-pen fs-5"></i>
                    <span className="fs-6 ms-3 d-none d-md-inline">Create</span>
                  </a>
                </Link>
              </li>
            </div>

            {/* Examination Button */}

            <div className="py-3">
              <p>
                <small>EXAMINATION</small>
              </p>
              <li class="nav-item rounded-3 mb-3">
                <Link
                  to={"/student/view/interview"}
                  className="text-decoration-none"
                >
                  <a class="nav-link text-light fw-normal p-0">
                    <i className="fa fa-solid fa-pen fs-5"></i>
                    <span className="fs-6 ms-3 d-none d-md-inline">Create</span>
                  </a>
                </Link>
              </li>
              <li class="nav-item rounded-3">
                <Link
                  to={"/student/view/application"}
                  className="text-decoration-none"
                >
                  <a class="nav-link text-light fw-normal p-0">
                    <i className="fa fa-solid fa-paper-plane fs-5"></i>
                    <span className="fs-6 ms-3 d-none d-md-inline">Give</span>
                  </a>
                </Link>
              </li>
            </div>

            {/* Interview Button */}

            <div className="py-3">
              <p>
                <small>INTERVIEW</small>
              </p>
              <li class="nav-item rounded-3 mb-3">
                <Link
                  to={"/student/view/interview"}
                  className="text-decoration-none"
                >
                  <a class="nav-link text-light fw-normal p-0">
                    <i className="fa fa-solid fa-calendar-days fs-5"></i>
                    <span className="fs-6 ms-3 d-none d-md-inline">
                      Schedule
                    </span>
                  </a>
                </Link>
              </li>
              <li class="nav-item rounded-3">
                <Link
                  to={"/student/view/application"}
                  className="text-decoration-none"
                >
                  <a class="nav-link text-light fw-normal p-0">
                    <i className="fa fa-solid fa-clipboard-user fs-5"></i>
                    <span className="fs-6 ms-3 d-none d-md-inline">
                      Interview Results
                    </span>
                  </a>
                </Link>
              </li>
            </div>

            {/* User Button */}

            <div className="py-3">
              <p>
                <small>USER</small>
              </p>
              <li class="nav-item rounded-3 mb-3">
                <Link to={"/student/profile"} className="text-decoration-none">
                  <a class="nav-link text-light fw-normal p-0">
                    <i className="fa fa-solid fa-user fs-5"></i>
                    <span className="fs-6 ms-3 d-none d-md-inline">
                      Profile
                    </span>
                  </a>
                </Link>
              </li>
              <li class="nav-item rounded-3 mb-4">
                <Link to={"/student/settings"} className="text-decoration-none">
                  <a class="nav-link text-light fw-normal p-0">
                    <i className="fa fa-solid fa-wrench fs-5"></i>
                    <span className="fs-6 ms-3 d-none d-md-inline">
                      Settings
                    </span>
                  </a>
                </Link>
              </li>
              <li class="nav-item rounded-3">
                <a class="nav-link text-light fw-normal p-0">
                  <i className="fa fa-solid fa-chevron-left fs-5"></i>
                  <span className="fs-6 ms-3 d-none d-md-inline">Logout</span>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default SchoolSideBar;
