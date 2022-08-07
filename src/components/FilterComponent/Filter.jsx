import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../store/actions/productActions";
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
        className="row d-flex justify-content-center align-items-center"
      >
        <div className="row d-flex justify-content-evenly align-items-center">
          <label className="col-6" htmlFor="priceMinFilter">
            Min Price
          </label>
          <input
            min={0}
            className="col-5 m-1"
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
          <hr />
          <label className="col-6" htmlFor="priceMaxFilter">
            Max Price
          </label>
          <input
            min={0}
            className="col-5 m-1"
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
          <hr />
          <label className="col-6" htmlFor="modelYearMin">
            Max Model Year
          </label>
          <input
            min={0}
            className="col-5 m-1"
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
          <hr />
          <label className="col-6" htmlFor="modelYearMax">
            Min Model Year
          </label>
          <input
            min={0}
            className="col-5 m-1"
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
          <hr />
          <label className="col-6" htmlFor="modelYearMax">
            rating
          </label>
          {filterObject?.rating}
          <input
            min={0}
            className="col-5 m-1"
            name="modelYearMax"
            id="modelYearMax"
            type="range"
            step={1}
            max={5}
            onChange={(e) => {
              setFilterObject({
                ...filterObject,
                rating: parseInt(e.target.value),
              });
            }}
          />
          <hr />
        </div>
        <input
          type={"submit"}
          value="Apply Filters"
          className="btn btn-outline-primary"
        />
        <button
          className="btn btn-outline-success"
          onClick={() => {
            setFilterObject({});
          }}
        >
          reset
        </button>
      </form>
    </div>
  );
}

export default Filter;
