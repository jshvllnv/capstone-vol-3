import React, { Fragment } from "react";
import AdminSideBar from "../../Shared/SideBar/AdminSideBar";

const AdminSchoolAccounts = () => {
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
            <h5 className="text-start">School Accounts</h5>

            {/* Search Application Form */}
            <div className="input-group mb-4 mt-4">
              <input
                type="text"
                className="form-control p-2"
                placeholder="Search by School Name"
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
            </div>

            {/* View Available Applications Table */}

            <div className="col-md text-start text-white">
              <div className="table-responsive-md">
                <table className="table table-striped table-hover table-bordered align-middle">
                  <thead
                    className="text-white text-center"
                    style={{ backgroundColor: "#182952" }}
                  >
                    <tr>
                      <th scope="col">School Name</th>
                      <th scope="col">Date Created</th>
                      <th scope="col">Status</th>
                      <th scope="col">Verify</th>
                    </tr>
                  </thead>
                  <tbody className="table-light text-center">
                    <tr>
                      <th scope="row">School Name Here</th>
                      <td>Input</td>
                      <td>Input</td>
                      <td>
                        <button className="btn btn-secondary mx-sm-2">
                          View
                        </button>
                        <button className="btn btn-success">Accept</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminSchoolAccounts;
