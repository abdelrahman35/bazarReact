import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../store/actions/productActions";
import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filterObject, setFilterObject] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const filterArray = Object.entries(filterObject);
    const filtered = filterArray.filter(([key, value]) => value.length > 0);
    const keyValueArray = [];
    for (let i = 0; i < filtered.length; i++) {
      keyValueArray.push(`${filtered[i][0]}=${filtered[i][1]}&`);
    }
    const apiArray = keyValueArray.join("").slice(0, -1);
    dispatch(filterProducts(1, apiArray));
    navigate("/products", { replace: true });
  };
  return (
    <div className="col-12 col-md-4 mb-3 mb-md-0">
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className={`form-control ${styles.search} me-2 `}
          type="text"
          placeholder="SEARCH PRODUCT"
          onChange={(e) => {
            setFilterObject({
              ...filterObject,
              searchKey: e.target.value,
            });
          }}
        />
      </form>
    </div>
  );
}

export default SearchBar;
