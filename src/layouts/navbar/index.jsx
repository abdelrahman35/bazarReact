import React from "react";
import "./navbar.css";
import Brand from "../../assets/images/logo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg pt-3 pb-3">
        <div className="container-fluid">
          <div className="row w-100 justify-content-center m-auto align-items-center">
            <div className="col-2 text-end">
              <img src={Brand} alt="" />
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
                    <a className="nav-link " href="#">
                      PRODUCTS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      ABOUT US
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <form className="d-flex">
                  <input
                    className=" form-control search me-2"
                    type="search"
                    placeholder="SEARCH PRODUCT"
                  />
                </form>
              </div>
              <div className="col-1 d-flex justify-content-evenly fs-5 ">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-heart"></i>
                </a>
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </div>
              <div className="col-2">
                <button type="button" className="btn btn-warningg">
                  Login/SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
