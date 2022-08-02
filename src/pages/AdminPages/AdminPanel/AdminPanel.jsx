import React from "react";
import { Link } from "react-router-dom";

function AdminPanel() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-title">
                <Link to="/admin/products">Products</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-title">
                <Link to="/admin/categories">Categories</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
