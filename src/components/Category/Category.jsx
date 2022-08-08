import React, { useEffect } from "react";
import styles from "./Category.module.css";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../store/actions/categoriesActions";
import { filterProducts } from "../../store/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
function Category() {
  const dispatch = useDispatch();
  const { categories: allCategories } = useSelector(
    (state) => state.allCategories,
  );
  const categoriesArray = allCategories?.categories;
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  // const handleProductOFCategory = (categoryId) => {
  //   dispatch(filterProducts(categoryId));
  // };
  return (
    <>
      <div className="accordion m-0 mb-3" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Categories
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body p-0">
              <ul className="list-unstyled m-0 p-0 text-center">
                {categoriesArray?.map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${category._id}`}
                    className="text-decoration-none"
                  >
                    <li className={`nav-item ${styles.Li}`}>
                      {category.categoryName}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
