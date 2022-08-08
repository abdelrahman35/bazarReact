import React from "react";
import styles from "./Success.module.css";
const Success = () => {
  return (
    <>
      <div className={`container  ${styles.Con}`}>
        <div className="row">
          <div className={`col-12 col-lg-6  ${styles.component}`}>
            <i class={`fa-solid fa-circle-check  ${styles.icon}`}></i>
            Order is placed Successfully
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
