import React, { Fragment } from "react";
import AdminSideBar from "../Shared/SideBar/AdminSideBar";

const AdminActivityLogs = () => {
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* SideBar */}
          <div className="col-auto"></div>
          <AdminSideBar />
          {/* Content */}
          <div className="col p-4 mt-1">
            <h5 className="text-start">Activity Logs</h5>

            {/* <div className="input-group mb-4 mt-4">
              <input
                type="text"
                className="form-control p-2"
                placeholder="Search by Student's Name"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-secondary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div> */}

            {/* View Available Applications Table */}

            <div className="mt-4">
              <div className="col-md text-start text-white">
                <div className="table-responsive-md">
                  <table className="table table-striped table-hover table-bordered align-middle">
                    <thead
                      className="text-white text-center"
                      style={{ backgroundColor: "#182952" }}
                    >
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                        <th scope="col">Details</th>
                        <th scope="col">Time</th>
                      </tr>
                    </thead>
                    <tbody className="table-light text-center">
                      <tr>
                        <th scope="row">Name Here</th>
                        <td>Input</td>
                        <td>Input</td>
                        <td>Input</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminActivityLogs;
