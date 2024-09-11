import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "/Capstone/Vol. 3/client/src/Components/Admin/Shared/SideBar/AdminSideBar.css";

// Import Images

import adminImagePlaceholder from "/Capstone/Vol. 3/client/src/Assets/profile/admin-image-placeholder.jpg";

const AdminSideBar = () => {
  return (
    <Fragment>
      {/* SideBar */}

      <div className="col-auto text-light full-height vh-100 d-flex flex-column align-items-center justify-content-center d-none d-lg-block admin-side-bar px-3">
        <div className="p-3">
          {/* SideBar Header */}
          <div className="mb-4">
            <img
              src={adminImagePlaceholder}
              alt="admin-image"
              className="rounded-circle p-0 admin-image my-4"
            />
            <h6 className="text-start fw-bold">Admin Name Here</h6>
            <p className="text-start fst-italic">Admin</p>
            <hr />
          </div>

          {/* SideBar Links */}
          <ul class="nav nav-pills flex-column mt-4 text-start">
            {/* Dashboard Button */}
            <li class="nav-item py-3 rounded-3">
              <Link to={"/admin/dashboard"} className="text-decoration-none">
                <a class="nav-link text-light fw-normal p-0">
                  <i className="fa fa-solid fa-house fs-5"></i>
                  <span className="fs-6 ms-3 d-none d-md-inline">
                    Dashboard
                  </span>
                </a>
              </Link>
            </li>

            {/* Accounts Button */}

            <div className="py-3">
              <p>
                <small>ACCOUNTS</small>
              </p>
              <li class="nav-item rounded-3 mb-3">
                <Link
                  to={"/admin/accounts/student"}
                  className="text-decoration-none"
                >
                  <a class="nav-link text-light fw-normal p-0">
                    <i className="fa fa-solid fa-person fs-5"></i>
                    <span className="fs-6 ms-3 d-none d-md-inline">
                      Students
                    </span>
                  </a>
                </Link>
              </li>
              <li class="nav-item rounded-3">
                <Link
                  to={"/admin/accounts/school"}
                  className="text-decoration-none"
                >
                  <a class="nav-link text-light fw-normal p-0">
                    <i className="fa fa-solid fa-school fs-5"></i>
                    <span className="fs-6 ms-3 d-none d-md-inline">School</span>
                  </a>
                </Link>
              </li>
            </div>

            {/* Activity Logs Button */}

            <div className="py-3">
              <p>
                <small>LOGS</small>
              </p>
              <li class="nav-item rounded-3">
                <Link
                  to={"/admin/activity-logs"}
                  className="text-decoration-none"
                >
                  <a class="nav-link text-light fw-normal p-0">
                    <i className="fa fa-solid fa-users fs-5"></i>
                    <span className="fs-6 ms-3 d-none d-md-inline">
                      Activity Logs
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
              <li class="nav-item rounded-3 mb-5">
                <Link to={"/admin/settings"} className="text-decoration-none">
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

export default AdminSideBar;
