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

            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  class="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Pending
                </button>
                <button
                  class="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Accounts
                </button>
              </div>
            </nav>

            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="row d-flex align-items-start mt-4">
                  <div className="mb-4">
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
                                <button
                                  type="button"
                                  className="btn btn-secondary mx-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#viewSchool"
                                >
                                  View
                                </button>
                                <button className="btn btn-success">
                                  Accept
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                ...
              </div>
            </div>

            {/* Modals */}

            {/* View Modal */}
            <div
              className="modal fade"
              id="viewSchool"
              tabindex="-1"
              aria-labelledby="viewSchoolLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header bg-primary">
                    <h5 className="modal-title" id="viewSchoolLabel">
                      Verification
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Reject
                    </button>
                    <button type="button" className="btn btn-success">
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminSchoolAccounts;
