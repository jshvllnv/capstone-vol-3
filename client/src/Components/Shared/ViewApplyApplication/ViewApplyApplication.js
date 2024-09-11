import React, { Fragment } from "react";
import StudentSideBar from "../../Student/Shared/StudentSideBar";
import { Link } from "react-router-dom";

const ViewApplyApplication = () => {
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
            <h5 className="text-start mb-3 fw-normal">Send Application</h5>

            <div className="row d-flex p-2 rounded-3 align-items-start justify-content-between">
              {/* Back to send application */}
              <Link
                to={"/student/send/application"}
                className="text-start mb-4"
              >
                <i className="fa fa-solid fa-chevron-left fs-6">
                  <span className="mx-2 fw-light">Back to Announcements</span>
                </i>
              </Link>

              {/* Application Content  */}

              <div className="col-md-12 text-center">
                <div className="mb-3">
                  <h4 className="fw-bold">School Name Here</h4>
                  <h6 className="text-secondary fw-light">
                    School Address Here
                  </h6>
                </div>
                <a
                  className="btn btn-success btn-lg p-3 mb-3 rounded-pill"
                  data-bs-toggle="modal"
                  href="#exampleModalToggle"
                  role="button"
                >
                  Send Application
                </a>

                {/* Consent Modal */}

                <div
                  className="modal fade"
                  id="exampleModalToggle"
                  aria-hidden="true"
                  aria-labelledby="exampleModalToggleLabel"
                  tabindex="-1"
                >
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header bg-dark text-light">
                        <h5
                          className="modal-title"
                          id="exampleModalToggleLabel"
                        >
                          Terms and Condition
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Terms and Conditions on Data Privacy and Consent
                        </h5>
                        1. Introduction Welcome to STI College Marikina's
                        official website. By using this platform, you agree to
                        the following terms and conditions regarding the
                        collection, processing, and use of your personal data.
                        Your privacy is important to us, and we are committed to
                        safeguarding any information you provide. 2. Data
                        Collection and Use We collect the following information
                        when you sign up or use our services: Full Name Contact
                        Information (Email Address, Phone Number) Academic
                        Records and Documents Examination Results Other relevant
                        details necessary for admission processing The data you
                        provide will be used to: Process your school admission
                        application Schedule and conduct examinations Provide
                        recommendations for courses based on your exam results
                        Set up interviews and other steps in the admission
                        process Facilitate communication between you and the
                        school 3. Consent to Data Processing By submitting your
                        personal data through this platform, you consent to the
                        collection, storage, and processing of your data for the
                        purposes outlined above. Your data will be processed in
                        accordance with applicable data protection laws. You
                        also agree that: Your data may be shared with authorized
                        personnel involved in the admission process. We may
                        store your information for the duration necessary to
                        fulfill our services and legal obligations. We may use
                        anonymized data for internal research and statistical
                        purposes to improve our services. 4. Data Protection and
                        Security We implement appropriate security measures to
                        protect your personal data from unauthorized access,
                        use, or disclosure. However, no method of electronic
                        storage or transmission over the internet is 100%
                        secure. While we strive to protect your information, we
                        cannot guarantee its absolute security. 5. User Rights
                        You have the following rights regarding your personal
                        data: The right to access and request a copy of the
                        personal information we hold about you. The right to
                        correct or update any inaccurate or incomplete data. The
                        right to request the deletion of your data when it is no
                        longer necessary for the purposes for which it was
                        collected. The right to withdraw your consent at any
                        time. However, doing so may affect your ability to
                        continue using our services. 6. Third-Party Services We
                        do not share your personal data with third-party
                        entities outside of those directly involved in the
                        school admission process without your explicit consent,
                        unless required by law. 7. Changes to the Terms We
                        reserve the right to update these terms and conditions
                        from time to time. Any changes will be posted on this
                        page, and your continued use of the platform after such
                        changes constitutes your acceptance of the new terms. 8.
                        Contact Information If you have any questions or
                        concerns about these terms and conditions or your
                        personal data, you may contact our Data Privacy Officer
                        at [email address] or through the Contact Us page on our
                        website.
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Discard
                        </button>
                        <button
                          className="btn btn-success"
                          data-bs-target="#exampleModalToggle2"
                          data-bs-toggle="modal"
                          data-bs-dismiss="modal"
                        >
                          Proceed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FillUp Modal */}
                <div
                  className="modal fade"
                  id="exampleModalToggle2"
                  aria-hidden="true"
                  aria-labelledby="exampleModalToggleLabel2"
                  tabindex="-1"
                >
                  <div className="modal-dialog modal-fullscreen modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header bg-success text-light">
                        <h5
                          className="modal-title"
                          id="exampleModalToggleLabel2"
                        >
                          Fill Up
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        {/* Application Form Body */}
                        <div className="row text-start">
                          <div className="col-md-3 mb-2">
                            <label
                              for="applicant_first_name"
                              className="form-label"
                            >
                              First Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="applicant_first_name"
                              placeholder="ex. John"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2">
                            <label
                              for="applicant_middle_name"
                              className="form-label"
                            >
                              Middle Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="applicant_middle_name"
                            />
                          </div>
                          <div className="col-md-3 mb-2">
                            <label
                              for="applicant_last_name"
                              className="form-label"
                            >
                              Last Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="applicant_last_name"
                              placeholder="ex. Doe"
                              required
                            />
                          </div>
                          <div className="col-md-1 mb-2">
                            <label
                              for="applicant_suffix_name"
                              className="form-label"
                            >
                              Suffix
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="applicant_suffix_name"
                              placeholder="ex. JR"
                            />
                          </div>
                          <div className="col-md-2">
                            <label
                              for="applicant_gender"
                              className="form-label"
                            >
                              Gender <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option value="1">Male</option>
                              <option value="2">Female</option>
                              <option value="3">I'd rather not say</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Submit Application Button */}
                      <div className="modal-footer">
                        <button className="btn btn-outline-success">
                          Submit Application
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Application Overview */}

                <div className="col-md-12 p-4 border border-2 rounded-3 mb-3">
                  <div className="text-start mb-3">
                    <i className="fa fa-solid fa-clipboard fs-5"></i>
                    <span className="fs-5 fw-bold mx-2">
                      Application Overview
                    </span>
                  </div>

                  <div className="p-2 text-start">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odit, doloremque? Asperiores ipsum ut praesentium, quia ab
                      laudantium, sequi non dolores saepe sit explicabo modi
                      repellendus vero odio incidunt, ea dolorem laboriosam.
                      Esse vero doloremque aperiam iure deleniti consequuntur ad
                      praesentium quisquam, sint officiis magni non dicta eius
                      recusandae ea repudiandae!
                    </p>
                  </div>
                </div>

                {/* Application Requirements */}
                <div className="col-md-12 p-4 border border-2 rounded-3 mb-3">
                  <div className="text-start mb-3">
                    <i className="fa fa-solid fa-clipboard fs-5"></i>
                    <span className="fs-5 fw-bold mx-2">
                      Application Requirements
                    </span>
                  </div>

                  <div className="p-2 text-start">
                    <p>Requirement #1</p>
                    <p>Requirement #2</p>
                    <p>Requirement #3</p>
                  </div>
                </div>

                {/* About the School */}

                <div className="col-md-12 p-4 border border-2 rounded-3">
                  <div className="text-start mb-3">
                    <i className="fa fa-solid fa-school fs-5"></i>
                    <span className="fs-5 fw-bold mx-2">About the School</span>
                  </div>
                  <div className="p-2 text-start">
                    <p>
                      Email Address:{" "}
                      <span className="text-primary">Email Here</span>
                    </p>
                    <p>
                      Contact No.:{" "}
                      <span className="text-primary">Contact No. Here</span>
                    </p>
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
export default ViewApplyApplication;
