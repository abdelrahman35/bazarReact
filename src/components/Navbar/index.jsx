import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "../../pages/UserPages/LoginPage/LoginPage";
import SignUpPage from "../../pages/UserPages/SignUpPage/SignUpPage";
import Loading from "../Loading/Loading";
import Thanks from "../../pages/MainPages/ThanksForm/Thanks";
function Navbar() {
  const [modal, setModal] = useState("login");
  const [genButton, setGenButtonStyle] = useState(styles.genButton);
  const [revGenButton, setRevGenButton] = useState(styles.revGenButton);
  const userLogin = useSelector((state) => state.userLogin);
  const { loading: userLoading, userInfo } = userLogin;
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <nav className={`navbar navbar-expand-lg pt-2 pb-2 ${styles.nav}`}>
        <div className="container p-0">
          <div className="row w-100 justify-content-start m-auto align-items-center">
            <div className={`col-12 col-md-2  ${styles.aa} p-0`}>
              <div className="d-none d-lg-block">
                <Link to="/" className={styles.brand}>
                  Bazaar{" "}
                </Link>
              </div>
              <div className="row justify-content-center align-items-center w-100">
                <div className="col-6 d-flex justify-content-center d-block d-lg-none">
                  <Link to="/" className={styles.brand}>
                    Bazaar{" "}
                  </Link>
                </div>
                <div className="col-6 d-flex justify-content-end  ">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-10 collapse navbar-collapse justify-content-evenly p-0"
              id="navbarSupportedContent"
            >
              <div className="col-12 col-md-3 mb-3 mb-md-0">
                <ul
                  className="navbar-nav me-auto mb-2 mb-lg-0
                justify-content-evenly"
                >
                  <li className="nav-item ">
                    <Link
                      className={`  nav-link ${styles.navLink}`}
                      to="/products"
                    >
                      PRODUCTS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`  nav-link ${styles.navLink}`}
                      to="aboutus"
                    >
                      ABOUT US
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-4 mb-3 mb-md-0">
                <form className="d-flex">
                  <input
                    className={`form-control ${styles.search} me-2 `}
                    type="search"
                    placeholder="SEARCH PRODUCT"
                  />
                </form>
              </div>
              <div className="col-1 d-flex align-items-center justify-content-evenly fs-5 mb-3 mb-md-0 ps-4">
                <Link
                  className={`  nav-link ${styles.navLink} me-2`}
                  to="/favourites"
                >
                  <i className="fa-solid fa-heart"></i>
                </Link>
                <Link
                  className={`  nav-link ${styles.navLink} d-flex`}
                  to="/cart"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <sup className={`mt-2 ms-1`}>{cartItems?.length}</sup>
                </Link>
              </div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">
                {userLoading ? (
                  <Loading />
                ) : (
                  <div className="d-flex justify-content-between align-items-center">
                    {userInfo ? (
                      <Link
                        className={`text-decoration-none ${styles.profileLink}`}
                        to="/profile"
                      >
                        <div className={styles.profile}>
                          Hi {userInfo.firstName}!
                        </div>
                      </Link>
                    ) : (
                      <div>
                        <button
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          className={styles.btnWarningg}
                        >
                          Login/Signup
                        </button>
                      </div>
                    )}
                    <div>
                      {" "}
                      {userInfo && userInfo?.isAdmin ? (
                        <Link
                          to="/adminPanel"
                          className={`d-flex nav-link ${styles.navLink}`}
                        >
                          <i className="fa-solid fa-user-shield"></i>
                        </Link>
                      ) : null}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {!userInfo ? (
        <div
          className="modal fade "
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className={`modal-dialog ${styles.modalDialog}`}>
            <div className="modal-content rounded-0 ">
              <div className="container modal-header border-0 position-relative p-0">
                <div className="row w-100 m-0">
                  <button
                    onClick={() => {
                      setModal("login");

                      setGenButtonStyle(styles.genButton);
                      setRevGenButton(styles.revGenButton);
                    }}
                    className={`col-6 text-center p-3 ${styles.login}  ${genButton} `}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setModal("signup");
                      setGenButtonStyle(styles.revGenButton);
                      setRevGenButton(styles.genButton);
                    }}
                    className={`col-6 text-center p-3 ${styles.signup} ${revGenButton}`}
                  >
                    Create Account
                  </button>
                </div>
                <button
                  type="button"
                  className={`btn-close position-absolute  ${styles.btnClose}`}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {modal === "login" ? (
                  <LoginPage />
                ) : modal === "signup" ? (
                  <SignUpPage />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : userInfo ? (
        <div
          className="modal fade "
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className={`modal-dialog ${styles.modalDialog}`}>
            <div className="modal-content rounded-0 ">
              <Thanks></Thanks>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
