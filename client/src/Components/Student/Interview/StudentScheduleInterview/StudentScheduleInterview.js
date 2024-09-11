import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import StudentSideBar from "../../Shared/StudentSideBar";

const StudentScheduleInterview = () => {
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
            <h5 className="text-start fs-5 mb-3 fw-bold">Interview</h5>
            <hr />

            <div className="row d-flex p-2 rounded-3 mb-4 align-items-start justify-content-between">
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
                    Upcoming Interviews
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
                    Interview Results
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
                    <div className="col-md-12 text-start mb-4">
                      <div className="table-responsive-md">
                        <table className="table table-striped table-hover table-bordered align-middle">
                          <thead
                            className="text-white text-center"
                            style={{ backgroundColor: "#182952" }}
                          >
                            <tr>
                              <th scope="col">School</th>
                              <th scope="col">Status</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody className="table-light text-center">
                            <tr>
                              <th scope="row">STI College Marikina</th>
                              <td className="text-warning">Pending</td>
                              <td>
                                {/* Take Exam Modal Button */}
                                <button
                                  type="button"
                                  class="btn btn-outline-success"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                >
                                  View
                                </button>

                                <div
                                  class="modal fade"
                                  id="exampleModal"
                                  tabindex="-1"
                                  aria-labelledby="exampleModalLabel"
                                  aria-hidden="true"
                                >
                                  <div class="modal-dialog">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5
                                          class="modal-title"
                                          id="exampleModalLabel"
                                        >
                                          School Name Here
                                        </h5>
                                        <button
                                          type="button"
                                          class="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div class="modal-body mt-2">
                                        <div className="div d-flex flex-column align-items-start">
                                          <h6 className="fw-bold mb-4">
                                            Schedule: <span>Date Here</span>
                                          </h6>
                                          <h6 className="mb-4">
                                            Start:{" "}
                                            <span className="fw-light text-primary">
                                              Start Time Here
                                            </span>
                                          </h6>
                                          <h6 className="mb-4">
                                            Address:{" "}
                                            <span className="fw-light text-danger">
                                              Address Here
                                            </span>
                                          </h6>
                                          <h6 className="">Take Note:</h6>
                                          <div className="p-3">
                                            <h6 className="fw-bold text-start">
                                              Please remember that honesty is
                                              the best policy. Any form of
                                              cheating during this test will not
                                              be tolerated and may result in
                                              severe consequences. Focus on
                                              doing your best, and maintain the
                                              integrity of your work.
                                            </h6>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="modal-footer">
                                        <button
                                          type="button"
                                          class="btn btn-outline-secondary"
                                          data-bs-dismiss="modal"
                                        >
                                          Close
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default StudentScheduleInterview;
