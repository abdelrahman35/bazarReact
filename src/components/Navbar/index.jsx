import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Brand from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/userActions";
function Navbar() {
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
                  <Link to="/login">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className={styles.btnWarningg}
                    >
                      Login/Signup
                    </button>
                  </Link>
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
    </>
  );
}

export default Navbar;
