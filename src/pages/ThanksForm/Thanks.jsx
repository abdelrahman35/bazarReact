import React from "react";
import styles from "./Thanks.module.css";
import thanksImg from "../../assets/images/thanks.png";

const Thanks = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3 className="mb-4">Account Created Successfully</h3>
        <img className="mb-4" src={thanksImg} alt="Logo" />
        <button className={`${styles.btnWarningg}`} type="submit">
          Start Shopping
        </button>
      </div>
    </>
  );
};

export default Thanks;
