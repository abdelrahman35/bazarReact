import React from "react";
import styles from "./Success.module.css";
const Success = () => {
  return (
    <>
      <div className={`container  ${styles.Con}`}>
        <div className="row w-80 justify-content-center align-items-center">
          <div className={`${styles.component} w-100`}>
            <i className={`fa-solid fa-circle-check  me-2`}></i>
            <p className="m-0 mb-1 text-capitalize">
              Order is placed Successfully
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
