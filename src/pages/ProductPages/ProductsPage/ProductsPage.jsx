import React, { useState, useEffect } from "react";
import { ProductCard } from "../../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../store/actions/productActions";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import styles from "./Products.module.css";
import Filter from "../../../components/FilterComponent/Filter";
import SortComponent from "../../../components/SortComponent/SortComponent";
function ProudctPage() {
  const dispatch = useDispatch();

  const {
    loading: productsLoading,
    error: productsError,
    products,
  } = useSelector((state) => state.allProducts);
  const {
    loading: filteredProductsLoading,
    error: filteredProductsError,
    filteredProducts,
  } = useSelector((state) => state.filteredProducts);
  const filteredProductsArray = filteredProducts?.products;
  const prodcutsArray = products?.products;
  const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    dispatch(getAllProducts(pageNum));
  }, [dispatch, pageNum, filteredProducts]);
  const nextPage = () => {
    let pageNumber;
    pageNumber = pageNum;
    if (pageNum < 522) {
      pageNumber++;
    }
    setPageNum(pageNumber);
  };
  const prevPage = () => {
    let pageNumber;
    pageNumber = pageNum;
    if (pageNum > 1) {
      pageNumber--;
    }
    setPageNum(pageNumber);
  };
  console.log(filteredProducts?.products);
  return (
    <>
      {filteredProductsLoading ? (
        <Loading />
      ) : filteredProducts ? (
        <div className={`container`}>
          <div className="row">
            <div className="col-3 mt-5">
              <div className="card">
                <div className="card-body">
                  <Filter />
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <SortComponent />
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row mb-0 mb-lg-3  g-4 mt-5 ">
                {filteredProductsArray?.map((product, index) => (
                  <div
                    className={`col-lg-4 d-flex justify-content-center mb-3 mb-lg-0`}
                    key={index}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div aria-label="Page navigation example d-flex justify-centent-center m-auto">
            <ul className="pagination justify-content-center">
              <li className="page-item  ">
                <Link
                  to="#"
                  className="page-link text-dark bg-outline-dark"
                  onClick={() => {
                    prevPage();
                  }}
                >
                  Previous
                </Link>
              </li>
              <li className="page-item">
                <Link
                  to="#"
                  className="page-link text-dark bg-outline-dark"
                  onClick={() => {
                    prevPage();
                  }}
                >
                  {pageNum}
                </Link>
              </li>

              <li className="page-item">
                <Link
                  className="page-link text-dark bg-outline-dark"
                  to="#"
                  onClick={() => {
                    nextPage();
                  }}
                >
                  Next
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : productsLoading ? (
        <div
          className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
        >
          <Loading />
        </div>
      ) : products ? (
        <div className={`container`}>
          <div className="row">
            <div className="col-3 mt-5">
              <div className="card">
                <div className="card-body">
                  <Filter />
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <SortComponent />
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row mb-0 mb-lg-3  g-4 mt-5 ">
                {prodcutsArray?.map((product, index) => (
                  <div
                    className={`col-lg-4 d-flex justify-content-center mb-3 mb-lg-0`}
                    key={index}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div aria-label="Page navigation example d-flex justify-centent-center m-auto">
            <ul className="pagination justify-content-center">
              <li className="page-item  ">
                <Link
                  to="#"
                  className="page-link text-dark bg-outline-dark"
                  onClick={() => {
                    prevPage();
                  }}
                >
                  Previous
                </Link>
              </li>
              <li className="page-item">
                <Link
                  to="#"
                  className="page-link text-dark bg-outline-dark"
                  onClick={() => {
                    prevPage();
                  }}
                >
                  {pageNum}
                </Link>
              </li>

              <li className="page-item">
                <Link
                  className="page-link text-dark bg-outline-dark"
                  to="#"
                  onClick={() => {
                    nextPage();
                  }}
                >
                  Next
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProudctPage;
