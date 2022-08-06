import React from "react";
import styles from "./NotFound.module.css";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const NotFound = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleBackToHome = () => {
    navigate("/", { replace: true });
    dispatch({ type: "USER_LOGOUT" });
  };
  return (
    <>
      <section className={`${styles.errorSection} d-flex`}>
        <div className="container">
          <div className="row justify-content-center align-items-center m-auto text-center">
            <div className={styles.manIcon}></div>
            <h3 className={styles.title}>
              {location.state ? (
                <ErrorMessage statusCode={location.state} />
              ) : null}
            </h3>
            <p className={styles.info}>Oh! you insert wrong data</p>
            <div
              type="button"
              className={`w-55 ${styles.homeBtn}`}
              onClick={() => {
                handleBackToHome();
              }}
            >
              Back to Home again
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
