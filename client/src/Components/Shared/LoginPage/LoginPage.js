import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../LoginPage/LoginPage.css";
import CCLogo from "/Capstone/Vol. 3/client/src/Assets/logo-white.png";

// Pictures Import
import LoginVector from "/Capstone/Vol. 3/client/src/Assets/4.svg";

const LoginPage = () => {
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

      <div className="container mt-4">
        <div className="row min-vh-100 gx-lg-5 d-sm-flex align-items-center justify-content-center">
          <form className="col-sm-10 col-md-8 col-lg-5 col-xl-4 text-start mx-4">
            <h1 className="fw-bold login-h1">Login</h1>
            <p className="fs-6 login-p mb-4">
              Don't have an account yet?{" "}
              <Link className="fw-bold" to={"/register/student/email"}>
                Create Account
              </Link>
            </p>
            <div data-mdb-input-init class="form-outline mb-4">
              <label
                class="form-label login-label fw-bold fs-5"
                for="user_email"
              >
                Username
              </label>
              <input type="text" id="user_username" class="form-control" />
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <label
                class="form-label login-label fw-bold fs-5"
                for="form2Example2"
              >
                Password
              </label>

              <Link className="form-label fw-bold " to={"/forgot"}>
                Forgot Password?
              </Link>
            </div>

            <div data-mdb-input-init class="form-outline mb-4">
              <input type="password" id="form2Example2" class="form-control" />
            </div>

            <div className="mb-4 d-flex align-items-center justify-content-between">
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                />
                <label
                  class="form-check-label mx-2 login-p"
                  for="form2Example31"
                >
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <button
              type="submit"
              data-mdb-button-init
              data-mdb-ripple-init
              class="btn login-button text-white btn-block mb-4 p-2 form-control fw-bold"
            >
              LOGIN
            </button>

            <div class="text-center">
              <p className="login-p">or login with</p>

              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                class="btn btn-link fs-4 btn-floating mx-1"
              >
                <i class="bi bi-google"></i>
              </button>

              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                class="btn btn-link fs-4 btn-floating mx-1"
              >
                <i class="bi bi-facebook"></i>
              </button>

              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                class="btn btn-link fs-4 btn-floating mx-1"
              >
                <i class="bi bi-whatsapp"></i>
              </button>
            </div>
          </form>

          <img
            className="img-fluid w-50 mx-3 d-none d-lg-block"
            src={LoginVector}
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
