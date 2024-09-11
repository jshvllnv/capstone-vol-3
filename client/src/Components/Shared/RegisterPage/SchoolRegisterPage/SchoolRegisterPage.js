import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CCLogo from "/Capstone/Vol. 3/client/src/Assets/logo-white.png";
import RegisterVector from "/Capstone/Vol. 3/client/src/Assets/5.svg";

const SchoolRegisterPage = () => {
  return (
    <Fragment>
      {/* Navigation Bar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark p-1 fixed-top"
        style={{ backgroundColor: "#182952" }}
      >
        <div className="container">
          {/* Website Logo */}
          <a className="navbar-brand" href="#">
            <Link to={"/"}>
              <img
                src={CCLogo}
                alt="CampusConnect"
                className="img-fluid web-logo"
              />
            </Link>
          </a>
        </div>
      </nav>

      {/* Register Form */}

      <div className="container mt-4">
        <div className="row min-vh-100 gx-lg-5 d-sm-flex align-items-center justify-content-center">
          <img
            className="img-fluid w-50 mx-3 d-none d-lg-block"
            src={RegisterVector}
            alt=""
          />
          <form className="col-sm-10 col-md-8 col-lg-5 col-xl-4 text-start mx-4">
            <h1 className="fw-bold register-h1">Create Account</h1>
            <p className="fs-6 register-p mb-3">
              Already have an account?{" "}
              <Link className="fw-bold" to={"/login"}>
                Login
              </Link>
            </p>

            <div className="col-md">
              <div className="row">
                <div data-mdb-input-init className="form-outline mb-4">
                  <label
                    className="form-label register-label fw-bold fs-5"
                    for="school_first_name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="school_first_name"
                    className="form-control"
                    placeholder="ex. STI College Marikina"
                  />
                </div>
              </div>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <label
                className="form-label register-label fw-bold fs-5"
                for="school_email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="school_email"
                className="form-control"
                placeholder="ex. johndoe@gmail.com"
              />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <label
                className="form-label register-label fw-bold fs-5"
                for="school_password"
              >
                Password
              </label>
              <input
                type="password"
                id="school_password"
                className="form-control"
              />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <label
                className="form-label register-label fw-bold fs-5"
                for="school_confirm_password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="school_confirm_password"
                className="form-control"
              />
            </div>

            <button
              type="submit"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-dark register-button text-white mb-3 p-2 form-control fw-bold"
              style={{ backgroundColor: "#182952" }}
            >
              CREATE ACCOUNT
            </button>

            <hr />

            <div class="text-center mb-3">
              <p className="register-p">Are you an student?</p>
            </div>

            <Link to={"/register/student/email"}>
              <button
                type="submit"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-success register-button text-white mb-3 p-2 form-control fw-bold"
              >
                REGISTER AS STUDENT
              </button>
            </Link>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default SchoolRegisterPage;
