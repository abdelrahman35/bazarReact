import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Brand from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/userActions";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
function Navbar() {
  const [modal, setModal] = useState("login");
  const [genButton, setGenButtonStyle] = useState(styles.genButton);
  const [revGenButton, setRevGenButton] = useState(styles.revGenButton);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg pt-3 pb-3 ${styles.nav}`}>
        <div className="container-fluid">
          <div className="row w-100 justify-content-center m-auto align-items-center">
            <div className="col-2 text-end">
              <Link to="/">
                <img src={Brand} alt="" />
              </Link>
            </div>

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
            <div
              className="col-10 collapse navbar-collapse justify-content-evenly"
              id="navbarSupportedContent"
            >
              <div className="col-3">
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
              <div className="col-4">
                <form className="d-flex">
                  <input
                    className={`form-control ${styles.search} me-2 `}
                    type="search"
                    placeholder="SEARCH PRODUCT"
                  />
                </form>
              </div>
              <div className="col-1 d-flex justify-content-evenly fs-5 ">
                <a className={`  nav-link ${styles.navLink}`} href="/">
                  <i className="fa-solid fa-heart"></i>
                </a>
                <a className={`  nav-link ${styles.navLink}`} href="/">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </div>
              <div className="col-2">
                {userInfo ? (
                  <p> {userInfo.firstName}</p>
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
              </div>
              {userInfo ? (
                <button className="btn" onClick={handleLogout}>
                  <i className="fa-solid fa-arrow-right-from-bracket ms-2 fs-6"></i>
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
      <div
        className="modal fade "
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
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
                <LoginPage></LoginPage>
              ) : modal === "signup" ? (
                <SignUpPage></SignUpPage>
              ) : (
                <div>error</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
