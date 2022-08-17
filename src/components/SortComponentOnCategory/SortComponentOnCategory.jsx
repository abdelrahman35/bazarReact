import React, { useState } from "react";
import { filterProducts } from "../../store/actions/productActions";
import { useDispatch } from "react-redux";
import styles from "./SortComponent.module.css";

function SortComponent() {
  const dispatch = useDispatch();
  const [sortObject, setSortObject] = useState({});
  const [checkStatusPrice, setCheckStatusPrice] = useState({
    priceLTH: false,
    priceHTL: false,
  });
  const [checkStatusModelYear, setCheckStatusModelYear] = useState({
    modelYearLTH: false,
    modelYearHTL: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const sortArray = Object.entries(sortObject);
    const sorted = sortArray.filter(([key, value]) => value !== "");
    const keyValueArray = [];
    for (let i = 0; i < sorted.length; i++) {
      keyValueArray.push(`${sorted[i][0]}=${sorted[i][1]}&`);
    }
    const apiArray = keyValueArray.join("").slice(0, -1);
    dispatch(filterProducts(apiArray));
  };
  const sortOfPrice = (e) => {
    setCheckStatusPrice({
      priceHTL: false,
      priceLTH: false,
      [e.target.value]: true,
    });
  };
  const sortOfModelYear = (e) => {
    setCheckStatusModelYear({
      modelYearHTL: false,
      modelYearLTH: false,
      [e.target.value]: true,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center w-30"
      >
        <div className="row justify-content-start  justify-content-md-evenly w-95 mb-3 mt-3 align-items-center">
          <div className=" col-lg-8 form-check d-flex justify-content-center align-items-center p-0 px-3">
            <button
              className={`btn ${styles.btnWarningg} w-100 text-capitalize d-flex justify-content-center align-items-center`}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <i className="fa-solid fa-filter-list fs-4 mt-1"></i>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SortComponent;
