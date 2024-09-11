import React, { Fragment } from "react";
import SchoolSideBar from "../Shared/SideBar/SchoolSideBar";

const SchoolDashboard = () => {
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <div className="row g-0 d-flex">
          {/* SideBar */}
          <div className="col-auto">
            <SchoolSideBar />
          </div>

          {/* Content */}

          <div className="col p-4 mt-1">
            <h5 className="text-start">Dashboard</h5>
            <div className="row d-flex p-2 rounded-3 mb-4 align-items-start justify-content-between">
              <div className="col-md-9 p-3">
                <div className="row d-flex align-items-start justify-content-between"></div>
                <div className="mb-3">
                  <h2 className="fw-light text-start">
                    Hello <span className="fw-bold">School!</span>
                  </h2>
                  <p className="text-start">Welcome to your dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SchoolDashboard;
