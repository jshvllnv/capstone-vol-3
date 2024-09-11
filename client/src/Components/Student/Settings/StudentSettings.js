import React, { Fragment } from "react";
import StudentSideBar from "../Shared/StudentSideBar";

const StudentSettings = () => {
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* SideBar */}
          <div className="col-auto">
            <StudentSideBar />
          </div>

          {/* Content */}
          <div className="col p-4 mt-1">
            <h5 className="text-start fs-5 mb-3 fw-bold">Settings</h5>
            <hr />

            <div className="row d-flex p-2 rounded-3 mb-4 align-items-start justify-content-between">
              <div className="col-md-6 col-lg-6 col-xl-4 p-3 bg-light rounded-3 text-start text-dark">
                <h6 className="mb-4 fw-bold">Account Settings</h6>

                <div className="mb-3">
                  <label
                    for="formGroupExampleInput"
                    className="form-label fw-bold"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="formGroupExampleInput"
                    placeholder="johndoe@email.com"
                    value={"johnDoe@email.com"}
                    disabled
                    readonly
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="student_current_password"
                    className="form-label fw-bold"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="student_current_password"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="formGroupExampleInput2"
                    className="form-label fw-bold"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="formGroupExampleInput2"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="formGroupExampleInput2"
                    className="form-label fw-bold"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="formGroupExampleInput2"
                  />
                </div>

                {/* Save and Delete Account Button */}

                <div className="mb-3">
                  <button className="btn btn-primary form-control">Save</button>
                </div>
                <div className="mb-3">
                  <button className="btn btn-danger form-control">
                    Delete Account
                  </button>
                </div>
              </div>

              <div className="col-md-5 col-lg-5 col-xl-5 rounded-3 text-start align-content-center text-dark">
                <div className="row gx-md-2 mb-2 bg-light rounded-3 p-3">
                  <h6 className="fw-bold">Receive Notifications?</h6>
                  <div className="form-check form-switch">
                    <label
                      className="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Toggle to receive notifications
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*  */}

            <div className="row d-flex p-2 rounded-3 mb-4 align-items-start justify-content-between">
              <div className="col-md-4 col-lg-6 col-xl-4 p-3 bg-light d-flex justify-content-between rounded-3 text-start text-dark">
                <h6>Two-factor Authentication </h6>
                <i className="bi bi-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StudentSettings;
