import React from "react";
import { Link } from "react-router-dom";
import styles from "./CheckoutBar.module.css";

function CheckoutBar({ step1, step2, step3 }) {
  return (
    <div className="justify-content-center mb-5">
      <ul className="nav d-flex align-items-center justify-content-evenly p-0 m-0 px-3">
        <li className="nav-item">
          {step1 ? (
            <Link
              className={`${styles["nav-link"]} ${styles.active} p-0`}
              aria-current="page"
              to="/shippingDetails"
            >
              <span>1</span> shipping details
            </Link>
          ) : (
            <Link
              className={`${styles["nav-link"]} ${styles.disabled} p-0`}
              aria-current="page"
              to="/shippingDetails"
            >
              <span>1</span> shipping details
            </Link>
          )}
        </li>
        <div className={`${styles.HR} d-none d-lg-block`}></div>

        <li className="nav-item">
          {step2 ? (
            <Link
              className={`${styles["nav-link"]} ${styles.active} p-0`}
              aria-current="page"
              to="/paymentmethod"
            >
              <span>2</span> payment
            </Link>
          ) : (
            <Link
              className={`${styles["nav-link"]} ${styles.disabled} p-0`}
              aria-current="page"
              to="/paymentmethod"
            >
              <span>2</span> payment
            </Link>
          )}
        </li>
        <div className={`${styles.HR} d-none d-lg-block`}></div>

        <li className="nav-item">
          {step3 ? (
            <Link
              className={`${styles["nav-link"]} ${styles.active} p-0`}
              aria-current="page"
              to="/placeorder"
            >
              <span>3</span> place order
            </Link>
          ) : (
            <Link
              className={`${styles["nav-link"]} ${styles.disabled} p-0`}
              aria-current="page"
              to="/placeorder"
            >
              <span>3</span> place order
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default CheckoutBar;
