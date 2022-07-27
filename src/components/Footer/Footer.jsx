import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="">
        <footer
          className={`row  text-center text-lg-start fixed-bottom ${styles.Footerstyle}`}
        >
          <div className="container p-3">
            <div className={`row d-flex  ${styles.CenterContainer}`}>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 justify-content-center">
                <h3 className="text-uppercase ">BAZAAR</h3>
                <ul className={`list-unstyled mb-0 ${styles.TextColor}`}>
                  <li>
                    There are many variations of passages of Lorem Ipsum
                    available,but the majority have suffered alteration in some
                    form,by injected humour,or randomised words which don't look
                    even slightly believable.
                  </li>
                  <div className="d-flex mt-3 ">
                    <li className="me-2 ">
                      <Link to="#!" className={styles.listunstyled}>
                        <i className="fa-brands fa-facebook"></i>
                      </Link>
                    </li>
                    <li className="me-2">
                      <Link to="#!" className={styles.listunstyled}>
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#!" className={styles.listunstyled}>
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className={`${styles.titles}`}>Shop With Us</h5>

                <ul className={styles.listunstyled}>
                  <li>
                    <Link to="#!" className={` mt-5 ${styles.listunstyled}`}>
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className={styles.listunstyled}>
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className={styles.listunstyled}>
                      Favorite
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className={styles.listunstyled}>
                      Orders
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className={` ${styles.titles}`}>Contact Us</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#!" className={styles.listunstyled}>
                      info@Bazaar.com
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className={styles.listunstyled}>
                      +20 01155616679
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className={styles.listunstyled}>
                      772 Giza , Egypt
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center p-3">© 2020 Copyright:</div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
