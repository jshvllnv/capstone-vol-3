import React, { Fragment } from "react";
import SchoolSideBar from "../Shared/SideBar/SchoolSideBar";
import imagePlaceholder from "/Capstone/Vol. 3/client/src/Assets/profile/image-placeholder.jpg";

const SchoolApplication = () => {
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* SideBar */}
          <div className="col-auto">
            <SchoolSideBar />
          </div>

          {/* Content */}
          <div className="col p-4 mt-1">
            <h5 className="text-start mb-4">Applications</h5>

            <h6 className="text-start fw-bold">List of Applicants</h6>

            {/* Search Application Form */}
            <div className="input-group mb-4 mt-4">
              <input
                type="text"
                className="form-control p-2"
                placeholder="Search by Student Name"
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
                      <th scope="col">Applicant</th>
                      <th scope="col">Date Applied</th>
                      <th scope="col">Level</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-light text-center">
                    <tr>
                      <th scope="row">Student Name Here</th>
                      <td>Input</td>
                      <td>Input</td>
                      <td>Input</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-success rounded-pill p-2"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>

                    {/* View Details Modal */}

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content">
                          <div class="modal-header bg-primary text-white">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Applicant Details
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body"></div>
                          {/* Modal Content */}
                          <div className="row d-flex p-2 rounded-3 align-items-start justify-content-between">
                            <div className="col-md-12">
                              <h5 className="fw-bold p-3 rounded-3 mb-4 border border-2">
                                Personal Information
                              </h5>
                            </div>
                            {/* Student First Name */}
                            <div className="col-md-4 text-start">
                              <div className="mb-3">
                                <label
                                  for="student_first_name"
                                  className="form-label fw-bold"
                                >
                                  First Name{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="student_first_name"
                                  placeholder="ex. John"
                                  required
                                  readOnly
                                />
                              </div>
                            </div>
                            {/* Student Middle Name */}
                            <div className="col-md-4 text-start">
                              <div className="mb-3">
                                <label
                                  for="student_middle_name"
                                  className="form-label fw-bold"
                                >
                                  Middle Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="student_middle_name"
                                  placeholder="ex. John"
                                  readOnly
                                />
                              </div>
                            </div>
                            {/* Student Last Name */}
                            <div className="col-md-4 text-start">
                              <div className="mb-3">
                                <label
                                  for="student_last_name"
                                  className="form-label fw-bold"
                                >
                                  Last Name{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="student_last_name"
                                  placeholder="ex. Doe"
                                  required
                                  readOnly
                                />
                              </div>
                            </div>
                            {/* Student Picture */}
                            <div className="col-md-4 text-start">
                              <div className="mb-3 d-flex flex-column">
                                <label
                                  for="student_picture"
                                  className="form-label fw-bold"
                                >
                                  Picture <span className="text-danger">*</span>
                                </label>

                                <img
                                  src={imagePlaceholder}
                                  className="w-50 mb-2"
                                  alt=""
                                />
                                <div className="input-group mb-3">
                                  <input
                                    type="file"
                                    className="form-control"
                                    id="inputGroupFile01"
                                    accept="image/*"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* Student Ethnicity and Mother Tongue */}
                            <div className="col-md-8 text-start">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      for="student_ethnicity"
                                      className="form-label fw-bold"
                                    >
                                      Ethnicity{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="student_ethnicity"
                                      placeholder="ex. Doe"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      for="student_mother_tongue"
                                      className="form-label fw-bold"
                                    >
                                      Mother Tongue{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="student_mother_tongue"
                                      placeholder="ex. Doe"
                                      required
                                    />
                                  </div>
                                </div>
                                {/* Student Religion */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      for="student_religion"
                                      className="form-label fw-bold"
                                    >
                                      Religion{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="student_religion"
                                      placeholder="ex. Doe"
                                      required
                                    />
                                  </div>
                                </div>
                                {/* Student Height and Weight */}
                                <div className="col-md-3">
                                  <div className="mb-3">
                                    <label
                                      for="student_height"
                                      className="form-label fw-bold"
                                    >
                                      Height{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="student_height"
                                      placeholder="ex. Doe"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="mb-3">
                                    <label
                                      for="student_weight"
                                      className="form-label fw-bold"
                                    >
                                      Weight{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="student_weight"
                                      placeholder="ex. Doe"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row d-flex p-2 rounded-3 text-start">
                            {/* Student Email Address */}
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label
                                  for="student_email"
                                  className="form-label fw-bold"
                                >
                                  Email <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="student_email"
                                  required
                                  value={"johndoe@gmail.com"}
                                  disabled
                                />
                              </div>
                            </div>
                            {/* Student Birthdate */}
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label
                                  for="student_birthdate"
                                  className="form-label fw-bold"
                                >
                                  Birthdate{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="student_birthdate"
                                  required
                                />
                              </div>
                            </div>
                            {/* Student Birthplace */}
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label
                                  for="student_birthplace"
                                  className="form-label fw-bold"
                                >
                                  Birthplace{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="student_birthplace"
                                  required
                                />
                              </div>
                            </div>
                            {/* Student Gender */}
                            <div className="col-md-4">
                              <label
                                for="student_gender"
                                className="form-label fw-bold"
                              >
                                Gender
                              </label>
                              <select
                                class="form-select"
                                aria-label="Default select example"
                              >
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">I'd rather not say</option>
                              </select>
                            </div>
                          </div>

                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-danger"
                              data-bs-dismiss="modal"
                            >
                              Decline
                            </button>
                            <button type="button" class="btn btn-success">
                              Accept
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default SchoolApplication;
