import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import StudentSideBar from "../Shared/StudentSideBar";

const StudentExamination = () => {
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
            <h5 className="text-start fs-5 mb-3 fw-bold">Examination</h5>
            <hr />

            <div className="row d-flex p-2 rounded-3 mb-4 align-items-start justify-content-between">
              <h6 className="text-start fw-bold mb-4">Examination Lists</h6>

              {/* View Examinations Table */}

              <div className="col-md text-start text-white">
                <div className="table-responsive-md">
                  <table className="table table-striped table-hover table-bordered align-middle">
                    <thead
                      className="text-white text-center"
                      style={{ backgroundColor: "#182952" }}
                    >
                      <tr>
                        <th scope="col">School</th>
                        <th scope="col">Start</th>
                        <th scope="col">Due</th>
                        <th scope="col">Address</th>
                        <th scope="col">Room</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody className="table-light text-center">
                      <tr>
                        <th scope="row">School Name Here</th>
                        <td>Date Here</td>
                        <td>Date Here</td>
                        <td>Address Here</td>
                        <td>Assigned Room Here</td>
                        <td>
                          {/* Take Exam Modal Button */}
                          <button
                            type="button"
                            class="btn btn-success"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Take Exam
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
                                      Due:{" "}
                                      <span className="fw-light text-danger">
                                        End Time Here
                                      </span>
                                    </h6>
                                    <h6 className="">Take Note:</h6>
                                    <div className="p-3">
                                      <h6 className="fw-bold text-start">
                                        Please remember that honesty is the best
                                        policy. Any form of cheating during this
                                        test will not be tolerated and may
                                        result in severe consequences. Focus on
                                        doing your best, and maintain the
                                        integrity of your work.
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <Link
                                    to={"/student/take/examination"}
                                    className="text-decoration-none"
                                  >
                                    <button
                                      type="button"
                                      class="btn btn-success"
                                      data-bs-dismiss="modal"
                                    >
                                      Take Exam
                                    </button>
                                  </Link>
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
        </div>
      </div>
    </Fragment>
  );
};
export default StudentExamination;
