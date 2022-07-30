import React, { Fragment } from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className={`${styles.errorSection} d-flex`}>
        <div className="container">
          <div className="row justify-content-center align-items-center m-auto text-center">
            <div className={styles.manIcon}></div>
            <h3 className={styles.title}>404</h3>
            <p className={styles.info}>Oh! you insert wrong data</p>
            <Link type="button" className={`w-55 ${styles.homeBtn}`} to="/">
              Back to Home again
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
