import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import AdminSideBar from "../Shared/SideBar/AdminSideBar";

const AdminDashboard = () => {
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <div className="row g-0 d-flex">
          {/* SideBar */}
          <div className="col-auto">
            <AdminSideBar />
          </div>

          {/* Content */}

          <div className="col p-4 mt-1">
            <h5 className="text-start">Dashboard</h5>
            <div className="row d-flex p-2 rounded-3 mb-4 align-items-start justify-content-between">
              <div className="col-md-12 p-3">
                <div className="mb-3">
                  <h2 className="fw-light text-start">
                    Hello <span className="fw-bold">Admin!</span>
                  </h2>
                  <p className="text-start">Welcome to your dashboard</p>
                </div>
              </div>

              {/* Overview */}
              <div className="col-md-3 p-2">
                <div className="mb-2 border border-2 p-3 rounded-3">
                  <div className="mb-4">
                    <h5 className="text-center fw-bold">Overview</h5>
                    <hr />
                  </div>

                  <div className="mb-4">
                    <h6 className="text-start fw-bold">Total Students</h6>
                    <h3 className="text-info">0</h3>
                  </div>
                  <div className="mb-4">
                    <h6 className="text-start fw-bold">Total Schools</h6>
                    <h3 className="text-info">0</h3>
                  </div>
                </div>
              </div>

              {/* Users Status */}
              <div className="col-md-3 p-2">
                <div className="mb-2 border border-2 p-3 rounded-3">
                  <div className="mb-4">
                    <h5 className="text-center fw-bold">Active Users</h5>
                    <h3 className="text-info">0</h3>
                  </div>
                  <div className="mb-4">
                    <h5 className="text-center fw-bold">Inactive Users</h5>
                    <h3 className="text-info">0</h3>
                  </div>
                </div>
              </div>

              {/* New Users */}
              <div className="col-md-3 p-2">
                <div className="mb-2 border border-2 p-3 rounded-3">
                  <div className="mb-4">
                    <h5 className="text-center fw-bold">New Users</h5>
                    <hr />
                  </div>
                </div>
              </div>

              {/* Visitors */}
              <div className="col-md-3 p-2">
                <div className="mb-2 border border-2 p-3 rounded-3">
                  <div className="mb-4">
                    <h5 className="text-center fw-bold">Visitors</h5>
                    <hr />
                  </div>
                </div>
              </div>
              {/* ------------------- */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminDashboard;
