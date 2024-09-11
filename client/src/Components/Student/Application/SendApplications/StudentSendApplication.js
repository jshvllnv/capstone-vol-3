import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import StudentSideBar from "../../Shared/StudentSideBar";

//Import Images

import searchApplicationBG from "/Capstone/Vol. 3/client/src/Assets/application/send-application-bg.png";

const StudentSendApplication = () => {
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
            <h5 className="text-start">Send Application</h5>

            {/* Search Application */}
            <div className="row p-2 mt-4 d-flex">
              <div
                className="row mb-3 rounded-3"
                style={{
                  backgroundImage: `URL(${searchApplicationBG})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                {" "}
                <h2 className="text-start fw-normal">
                  Apply for an{" "}
                  <span className="fw-bold" style={{ color: "#182952" }}>
                    entrance exam{" "}
                  </span>
                  today
                </h2>
                <p className="fs-6 text-start">
                  Unlock Success with Ease. Streamline Your Journey with
                  Seamless Online Entrance Exam Applications
                </p>
                {/* Search Application Form */}
                <div class="input-group mb-4 mt-4">
                  <input
                    type="text"
                    class="form-control p-2"
                    placeholder="ex. STI College"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn btn-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
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
                        <th scope="col">School Logo</th>
                        <th scope="col">School Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody className="table-light text-center">
                      <tr>
                        <th scope="row">School Name Here</th>
                        <td>Input</td>
                        <td>Input</td>
                        <td>
                          <Link to={"/student/apply/application"}>
                            <button className="btn btn-primary">Apply</button>
                          </Link>
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

export default StudentSendApplication;
