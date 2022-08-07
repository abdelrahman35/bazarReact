import React, { useState, useEffect } from "react";
import { ProductCard } from "../../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../store/actions/productActions";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import styles from "./Products.module.css";
import Filter from "../../../components/FilterComponent/Filter";
import SortComponent from "../../../components/SortComponent/SortComponent";
import Category from "../../../components/Category/Category";

function ProudctPage() {
  const dispatch = useDispatch();

  const {
    loading: productsLoading,
    error: productsError,
    products,
  } = useSelector((state) => state.allProducts);
  const prodcutsArray = products?.products;
  const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    dispatch(getAllProducts(pageNum));
  }, [dispatch, pageNum]);
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
  return (
    <>
      {productsLoading ? (
        <div
          className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
        >
          <Loading />
        </div>
      ) : products ? (
        <>
          {/* <CategoryNavbar /> */}

          <div className={`container-fluid`}>
            <div className="row justify-content-center align-items-start">
              <div className={`col-3 d-none d-lg-block ${styles.marg}`}>
                <aside>
                  <Category />
                  <Filter />
                </aside>
              </div>

              <div className="col-12  d-block d-lg-none">
                <aside>
                  <button
                    className={`btn ${styles.btnWarningg} w-100 mt-4 text-capitalize`}
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                  >
                    for more categories and filteer
                  </button>
                  <div
                    className="offcanvas offcanvas-start"
                    id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel"
                  >
                    <div className="offcanvas-header">
                      <h5
                        className="offcanvas-title"
                        id="offcanvasExampleLabel"
                      >
                        Filter
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="offcanvas-body">
                      <Category />
                      <Filter />
                    </div>
                  </div>
                </aside>
              </div>

              <div className="col-12 col-lg-9">
                <div
                  className="row d-flex justify-content-center
                align-items-center"
                >
                  <SortComponent />
                </div>

                <div className="row mb-0 mb-lg-3  g-4  ">
                  {prodcutsArray?.map((product, index) => (
                    <div
                      className={`col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3 mb-lg-0`}
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
        </>
      ) : null}
    </>
  );
}

export default ProudctPage;
