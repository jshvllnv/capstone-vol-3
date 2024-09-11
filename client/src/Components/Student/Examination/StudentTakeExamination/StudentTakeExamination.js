import React, { Fragment } from "react";

import StudentSideBar from "../../Shared/StudentSideBar";
import { Link } from "react-router-dom";

const StudentTakeExamination = () => {
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
              <h6 className="text-start fw-bold mb-4">Examination</h6>
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
                    Instructions
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
                    Result Summary
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
                    <div className="col-md-8 text-start mb-4">
                      <h6 className="fw-bold mb-4">Instructions</h6>
                      <h6 className="mb-4">
                        Before you begin the examination, please take a moment
                        to carefully read each question and consider your
                        answers thoughtfully. Ensure that all sections of the
                        exam are completed before you submit, as incomplete
                        responses may affect your overall score. Remember to
                        work independently and avoid using any unauthorized
                        materials or assistance to uphold the integrity of the
                        examination process.
                      </h6>

                      <div className="col-md-10 col-lg-8 col-xl-6 mb-4">
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Examination Code"
                            aria-label="examination_code"
                            aria-describedby="button-addon2"
                            required
                          />
                          <button
                            class="btn btn-success"
                            type="button"
                            id="button-addon2"
                          >
                            Take Exam
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 text-start mb-4">
                      <h6 className="fw-bold mb-4">Examination</h6>

                      {/* Max Score */}
                      <div className="mb-2">
                        <i className="bi bi-123 mx-2"></i>
                        <span className="fs-6 fw-bold fst-normal">
                          Max Score:
                          <span className="fw-bold text-primary mx-2">100</span>
                        </span>
                        <hr />
                      </div>

                      {/* Start Date */}
                      <div className="mb-2">
                        <i className="bi bi-calendar mx-2"></i>
                        <span className="fs-6 fw-bold fst-normal">
                          Start Date:
                          <span className="fw-bold text-primary mx-2">
                            Date Here
                          </span>
                        </span>
                        <hr />
                      </div>

                      {/* End Date */}
                      <div className="mb-2">
                        <i className="bi bi-calendar mx-2"></i>
                        <span className="fs-6 fw-bold fst-normal">
                          Due Date:
                          <span className="fw-bold text-danger mx-2">
                            Date Here
                          </span>
                        </span>
                        <hr />
                      </div>

                      {/* Timer */}
                      <div className="mb-2">
                        <i className="bi bi-clock mx-2"></i>
                        <span className="fs-6 fw-bold fst-normal">
                          Timer:
                          <span className="fw-bold text-primary mx-2">
                            Time Here
                          </span>
                          <span className="fw-bold text-primary mx-1">
                            (hh:mm:ss)
                          </span>
                        </span>
                        <hr />
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
export default StudentTakeExamination;
