import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={styles.footeer}>
        <footer
          className={`text-center text-lg-start w-100  ${styles.Footerstyle} d-flex flex-column justify-content-center align-items-center`}
        >
          <div className="container py-4">
            <div className={`row align-items-start`}>
              <div className="col-12 col-lg-4  mb-4 mb-md-0 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column">
                  <h3 className={`text-uppercase w-100 ${styles.headFoot} `}>
                    BAZAAR
                  </h3>
                  <p className={`${styles.pFooter} m-auto m-lg-0`}>
                    There are many variations of passages of Lorem Ipsum
                    available,but the majority have suffered alteration in some
                    form,by injected humour,or randomised words which don't look
                    even slightly believable.
                  </p>
                  <div className="d-flex mt-3 justify-content-center justify-content-lg-start">
                    <ul className={` d-flex list-unstyled mb-0 `}>
                      <li className="me-2 ">
                        <Link to="/" className={styles.socialIcon}>
                          <i className="fa-brands fa-facebook"></i>
                        </Link>
                      </li>
                      <li className="me-2">
                        <Link to="/" className={styles.socialIcon}>
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className={styles.socialIcon}>
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4  mb-4 mb-md-0 d-flex flex-column justify-content-center align-items-center mt-4">
                <div className="d-flex flex-column align-items-center align-items-md-start">
                  <h5 className={``}>Shop With Us</h5>
                  <ul className="list-unstyled mb-0 mt-3 d-flex flex-column align-items-start gap-1">
                    <li>
                      <Link
                        to="/"
                        className={`${styles.socialIcon} ${styles.pFooter}`}
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`${styles.socialIcon} ${styles.pFooter}`}
                      >
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`${styles.socialIcon} ${styles.pFooter}`}
                      >
                        Favorite
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`${styles.socialIcon} ${styles.pFooter}`}
                      >
                        Orders
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4  mb-4 mb-md-0 d-flex flex-column justify-content-center align-items-center mt-4">
                <div>
                  <h5 className={``}>Contact Us</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link
                        to="/"
                        className={`${styles.socialIcon} ${styles.pFooter}`}
                      >
                        {" "}
                        <i className="fa-solid fa-envelopes-bulk me-1"></i>
                        info@Bazaar.com
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`${styles.socialIcon} ${styles.pFooter}`}
                      >
                        {" "}
                        <i className="fa-solid fa-square-phone me-1"></i> +20
                        01155616679
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`${styles.socialIcon} ${styles.pFooter}`}
                      >
                        {" "}
                        <i className="fa-solid fa-location-dot me-1"></i>
                        772 Giza , Egypt
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div
          className={`text-center text-lg-start w-100  ${styles.Footerstyle} d-flex flex-column justify-content-center align-items-center pb-3`}
        >
          © 2022 Copyright : BAZAAR
        </div>
      </div>
    </>
  );
};
export default Footer;
