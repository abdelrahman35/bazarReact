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
      <form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <div className="row justify-content-start  justify-content-md-evenly w-95 mb-3 mt-3 align-items-center">
          <div className=" col-lg-1 form-check d-flex justify-content-center align-items-center p-0 px-3">
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
          <div className="col-lg-4 form-check d-flex justify-content-evenly ">
            <div className="col-lg-6 d-flex justify-content-lg-start ms-5 ">
              <input
                className="form-check-input"
                type="radio"
                name="price"
                id="priceHighToLow"
                value="priceHTL"
                checked={checkStatusPrice.priceHTL}
                onChange={(e) => {
                  setSortObject({
                    ...sortObject,
                    priceSort: "htl",
                  });
                  sortOfPrice(e);
                }}
              />
              <label className="form-check-label" htmlFor="priceHighToLow">
                Descending Price
              </label>
            </div>
            <div className="col-lg-6 d-flex justify-content-lg-center me-5">
              <input
                className="form-check-input"
                type="radio"
                name="price"
                value="priceLTH"
                id="priceLowToHigh"
                checked={checkStatusPrice.priceLTH}
                onChange={(e) => {
                  setSortObject({
                    ...sortObject,
                    priceSort: "lth",
                  });
                  sortOfPrice(e);
                }}
              />
              <label className="form-check-label" htmlFor="priceLowToHigh">
                Ascending price
              </label>
            </div>
          </div>

          <div className="col-lg-4 form-check d-flex justify-content-evenly">
            <div className="col-lg-6 d-flex justify-content-lg-start ms-5 ">
              <input
                className="form-check-input"
                type="radio"
                name="modelYear"
                value="modelYearHTL"
                id="modelYearHTL"
                checked={checkStatusModelYear.modelYearHTL}
                onChange={(e) => {
                  setSortObject({
                    ...sortObject,
                    modelYearSort: "htl",
                  });
                  sortOfModelYear(e);
                }}
              />
              <label className="form-check-label" htmlFor="modelYearHTL">
                Descending Year
              </label>
            </div>
            <div className="col-lg-6 d-flex justify-content-lg-center me-5">
              <input
                className="form-check-input"
                type="radio"
                name="modelYear"
                value="modelYearLTH"
                id="modelYearLTH"
                checked={checkStatusModelYear.modelYearLTH}
                onChange={(e) => {
                  setSortObject({
                    ...sortObject,
                    modelYearSort: "lth",
                  });
                  sortOfModelYear(e);
                }}
              />
              <label className="form-check-label" htmlFor="modelYearLTH">
                Ascending Year
              </label>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-evenly">
            <input
              type={"submit"}
              value="Sort"
              className={`col-6 col-lg-2 btn btn-outline-primary w-10  me-4 me-md-0 btnWarningg ${styles.btnWarningg} mb-2 mb-md-0 `}
            />

            <button
              className={`col-6 col-lg-2 btn btn-outline-primary  w-10 mb-2 mb-md-0  ${styles.btnWarningg}`}
              onClick={() => {
                setCheckStatusPrice(() => ({
                  priceLTH: false,
                  priceHTL: false,
                }));
                setCheckStatusModelYear(() => ({
                  modelYearHTL: false,
                  modelYearLTH: false,
                }));
                setSortObject({});
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SortComponent;
