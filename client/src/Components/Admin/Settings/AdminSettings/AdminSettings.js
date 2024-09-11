import React, { Fragment } from "react";
import AdminSideBar from "../../Shared/SideBar/AdminSideBar";

const AdminSettings = () => {
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* SideBar */}
          <div className="col-auto">
            <AdminSideBar />
          </div>
          {/* Content */}
          <div className="col p-4 mt-1">
            <h5 className="text-start mb-4">Settings</h5>

            <div className="row d-flex flex-column align-items-center justify-content-center">
              {/* Settings Content */}
              <h5 className="fw-bold mb-4">Password Settings</h5>
              <div className="col-md-6 col-lg-5 mb-4 text-start">
                <label
                  for="formGroupExampleInput"
                  className="form-label fw-bold "
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="ex. johndoe@email.com"
                />
              </div>
              <div className="col-md-6 col-lg-5 mb-4 text-start">
                <label
                  for="formGroupExampleInput"
                  className="form-label fw-bold "
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="formGroupExampleInput"
                />
              </div>
              <div className="col-md-6 col-lg-5 mb-4 text-start">
                <label
                  for="formGroupExampleInput"
                  className="form-label fw-bold "
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="formGroupExampleInput"
                />
              </div>
              <div className="col-md-6 col-lg-5">
                <button className="btn btn-primary form-control">SAVE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminSettings;
