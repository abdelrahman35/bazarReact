import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../store/actions/productActions";
function Filter() {
  const dispatch = useDispatch();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterProducts(maxPrice, minPrice));
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
              setMinPrice(parseInt(e.target.value));
              console.log(typeof minPrice);
            }}
          />
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
              setMaxPrice(parseInt(e.target.value));
              //   console.log(typeof maxPrice);
            }}
          />
        </div>
        <input
          type={"submit"}
          value="Apply Filters"
          className="btn btn-outline-primary"
        />
      </form>
    </div>
  );
}

export default Filter;
