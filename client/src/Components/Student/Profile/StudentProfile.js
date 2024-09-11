import React, { Fragment } from "react";
import StudentSideBar from "../Shared/StudentSideBar";

//Images Import
import imagePlaceholder from "/Capstone/Vol. 3/client/src/Assets/profile/image-placeholder.jpg";

const StudentProfile = () => {
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
            <h5 className="text-start fs-5 mb-3 fw-bold">Profile</h5>
            <hr />

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
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="student_first_name"
                    placeholder="ex. John"
                    required
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
                  />
                </div>
              </div>
              {/* Student Last Name */}
              <div className="col-md-4 text-start">
                <div className="mb-3">
                  <label for="student_last_name" className="form-label fw-bold">
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="student_last_name"
                    placeholder="ex. Doe"
                    required
                  />
                </div>
              </div>
              {/* Student Picture */}
              <div className="col-md-4 text-start">
                <div className="mb-3 d-flex flex-column">
                  <label for="student_picture" className="form-label fw-bold">
                    Picture <span className="text-danger">*</span>
                  </label>

                  <img src={imagePlaceholder} className="w-50 mb-2" alt="" />
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
                        Ethnicity <span className="text-danger">*</span>
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
                        Mother Tongue <span className="text-danger">*</span>
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
                        Religion <span className="text-danger">*</span>
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
                        Height <span className="text-danger">*</span>
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
                        Weight <span className="text-danger">*</span>
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
                  <label for="student_email" className="form-label fw-bold">
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
                  <label for="student_birthdate" className="form-label fw-bold">
                    Birthdate <span className="text-danger">*</span>
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
                    Birthplace <span className="text-danger">*</span>
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
                <label for="student_gender" className="form-label fw-bold">
                  Gender
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">I'd rather not say</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StudentProfile;
