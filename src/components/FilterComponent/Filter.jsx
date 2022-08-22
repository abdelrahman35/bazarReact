import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../store/actions/productActions";
import styles from "./Filter.module.css";

function Filter() {
  const dispatch = useDispatch();
  const [filterObject, setFilterObject] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const filterArray = Object.entries(filterObject);
    const filtered = filterArray.filter(([key, value]) => !isNaN(value));
    const keyValueArray = [];
    for (let i = 0; i < filtered.length; i++) {
      keyValueArray.push(`${filtered[i][0]}=${filtered[i][1]}&`);
    }
    const apiArray = keyValueArray.join("").slice(0, -1);
    dispatch(filterProducts(apiArray));
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="row d-flex justify-content-start align-items-center m-auto"
      >
        <div className="row d-flex justify-content-start g-1 align-items-center">
          <label className="col-6" htmlFor="priceMinFilter">
            Min Price
          </label>
          <input
            min={0}
            className="col-5 m-1 form-control w-40 form-control w-40"
            name="priceMinFilter"
            id="priceMinFilter"
            type="number"
            onChange={(e) => {
              setFilterObject({
                ...filterObject,
                priceMin: parseInt(e.target.value),
              });
            }}
          />
          <hr className="w-90 ms-1" />
          <label className="col-6" htmlFor="priceMaxFilter">
            Max Price
          </label>
          <input
            min={0}
            className="col-5 m-1 form-control w-40"
            name="priceMaxFilter"
            id="priceMaxFilter"
            type="number"
            onChange={(e) => {
              setFilterObject({
                ...filterObject,
                priceMax: parseInt(e.target.value),
              });
            }}
          />
          <hr className="w-90 ms-1" />
          <label className="col-6" htmlFor="modelYearMin">
            Max Model Year
          </label>
          <input
            min={0}
            className="col-5 m-1 form-control w-40"
            name="modelYearMin"
            id="modelYearMin"
            type="number"
            onChange={(e) => {
              setFilterObject({
                ...filterObject,
                modelYearMin: parseInt(e.target.value),
              });
            }}
          />
          <hr className="w-90 ms-1" />
          <label className="col-6" htmlFor="modelYearMax">
            Min Model Year
          </label>
          <input
            min={0}
            className="col-5 m-1 form-control w-40"
            name="modelYearMax"
            id="modelYearMax"
            type="number"
            onChange={(e) => {
              setFilterObject({
                ...filterObject,
                modelYearMax: parseInt(e.target.value),
              });
            }}
          />
          <hr className="w-90 ms-1" />
          <div className="d-flex justify-content-between w-90 align-content-center mt-0">
            <label className="col-6" htmlFor="modelYearMax">
              Rating
            </label>
            {filterObject?.rating}
          </div>

          <input
            name="modelYearMax"
            id="modelYearMax"
            type="range"
            className="form-range  m-1 w-90"
            min="0"
            max="5"
            onChange={(e) => {
              setFilterObject({
                ...filterObject,
                rating: parseInt(e.target.value),
              });
            }}
          />

          <hr className="w-90 ms-1" />
        </div>
        <input
          type={"submit"}
          value="Apply Filters"
          className={`btn ${styles.btnWarningg}`}
        />
        <button
          className={`btn ${styles.btnWarningg} mt-3`}
          onClick={() => {
            setFilterObject({});
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default Filter;
