import React, { useState } from "react";
import { filterProducts } from "../../store/actions/productActions";
import { useDispatch } from "react-redux";
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
    <div>
      <form
        onSubmit={handleSubmit}
        className="row d-flex justify-content-center align-items-center"
      >
        <div className="form-check">
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
            Price High to Low
          </label>
        </div>
        <div className="form-check">
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
            price low to high
          </label>
        </div>
        <div className="form-check">
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
            model year high to low
          </label>
        </div>
        <div className="form-check">
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
            model year low to high
          </label>
        </div>

        <input
          type={"submit"}
          value="Sort"
          className="btn btn-outline-primary"
        />
      </form>
      <button
        className="btn btn-outline-primary row d-flex justify-content-center align-items-center mt-3 w-100 m-auto"
        onClick={() => {
          setCheckStatusPrice(() => ({ priceLTH: false, priceHTL: false }));
          setCheckStatusModelYear(() => ({
            modelYearHTL: false,
            modelYearLTH: false,
          }));
          setSortObject({});
        }}
      >
        reset
      </button>
    </div>
  );
}

export default SortComponent;
