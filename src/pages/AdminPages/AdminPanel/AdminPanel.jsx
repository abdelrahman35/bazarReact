import React from "react";
import { Link } from "react-router-dom";
import styles from "./AdminPanel.module.css";
function AdminPanel() {
  return (
    <>
      <div className={`container mt-5 mb-5  ${styles.cont} `}>
        <div className="row">
          <div className="col-lg-6">
            <Link to="/admin/products" className={`card ${styles.cardio}`}>
              Products
              <div className="card-title"></div>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link to="/admin/categories" className={`card ${styles.cardio}`}>
              <div className="card-title">Categories</div>
            </Link>
          </div>
        </div>
        <div className="row mt-0 mt-lg-3">
          <div className="col-lg-6">
            <Link to="/admin/order" className={`card ${styles.cardio}`}>
              Orders
              <div className="card-title"></div>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link to="/admin/categories" className={`card ${styles.cardio}`}>
              <div className="card-title">Categories</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
