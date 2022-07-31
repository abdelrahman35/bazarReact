import React, { useEffect } from "react";
import styles from "./CategoryNavbar.module.css";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../store/actions/categoriesActions";
import { useSelector, useDispatch } from "react-redux";
function CategoryNavbar() {
  const dispatch = useDispatch();
  const { categories: allCategories } = useSelector(
    (state) => state.allCategories,
  );
  const categoriesArray = allCategories?.categories;
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg pt-2 shadow-lg pb-2 ${styles.nav}`}
      >
        <div className="container-fluid">
          <div className="row w-100 justify-content-start m-auto align-items-center">
            <div className={`col-12 col-md-2 text-end ${styles.aa} p-0`}>
              <div className="row justify-content-center align-items-center">
                <div className="col-6 d-flex">
                  <Link to="/" className={styles.brand}>
                    Categories
                  </Link>
                </div>
                <div className="col-6">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-10 collapse navbar-collapse justify-content-start p-0"
              id="navbarSupportedContent1"
            >
              <div className="col-12 col-md-3 mb-3 mb-md-0">
                <ul
                  className="navbar-nav me-auto mb-2 mb-lg-0
                justify-content-start"
                >
                  {categoriesArray?.map((category, index) => (
                    <li key={index} className="nav-item ">
                      <Link className={`  nav-link ${styles.navLink}`} to="/">
                        {category.categoryName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CategoryNavbar;
