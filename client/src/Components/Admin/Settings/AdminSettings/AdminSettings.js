import React, { Fragment } from "react";
import AdminSideBar from "../../Shared/SideBar/AdminSideBar";

const AdminSettings = () => {
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* SideBar */}
          <div className="col-auto">
            <AdminSideBar />
          </div>
          {/* Content */}
          <div className="col p-4 mt-1">
            <h5 className="text-start">Settings</h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminSettings;
