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
import MyPagination from "../../../components/Pagination";

function ProudctPage() {
  const dispatch = useDispatch();
  const [currPage, setCurrPage] = useState(1);
  const [tagList, setTagList] = useState([]);

  const afterPageClicked = (page_number) => {
    setCurrPage(page_number);
  };

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
  useEffect(() => {
    dispatch(getAllProducts(currPage));
  }, [currPage, filteredProducts]);
  return (
    <>
      {filteredProductsLoading ? (
        <div
          className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
        >
          <Loading />
        </div>
      ) : filteredProductsArray?.length > 0 ? (
        <div className={`container-fluid`}>
          <div className="row justify-content-center align-items-start">
            <div className={`col-12  d-none  ${styles.marg}`}>
              <aside className={styles.filterSide}>
                <Category />
                <Filter />
              </aside>
            </div>

            <div className="col-12  d-block ">
              <aside>
                <div
                  className="offcanvas offcanvas-start"
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
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

            <div className="col-12  ">
              <div
                className="row d-flex justify-content-center
            align-items-center"
              >
                <SortComponent />
              </div>

              <div className="row mb-0 mb-lg-3  g-4  ">
                {filteredProductsArray?.map((product, index) => (
                  <div
                    className={`col-12 col-md-6 col-lg-3 d-flex justify-content-center mb-3 mb-lg-0`}
                    key={index}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <MyPagination
            totPages={10}
            currentPage={currPage}
            pageClicked={(ele) => {
              afterPageClicked(ele);
            }}
          >
            <ul>
              {tagList.map((ele, ind) => (
                <li key={ele + ind}>{ele}</li>
              ))}
            </ul>
          </MyPagination>
        </div>
      ) : productsLoading ? (
        <div
          className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
        >
          <Loading />
        </div>
      ) : products ? (
        <>
          <div className={`container-fluid`}>
            <div className="row justify-content-center align-items-start p-0  px-lg-5">
              <div className={`col-12  d-none  ${styles.marg}`}>
                <aside className={styles.filterSide}>
                  <Category />
                  <Filter />
                </aside>
              </div>

              <div className="col-12  d-block ">
                <aside>
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

              <div className="col-12   ">
                <div
                  className="row d-flex justify-content-center
                align-items-center"
                >
                  <SortComponent />
                </div>

                <div className="row mb-0 mb-lg-3  g-4  ">
                  {prodcutsArray?.map((product, index) => (
                    <div
                      className={`col-12 col-md-6 col-lg-3 d-flex justify-content-center mb-3 mb-lg-0`}
                      key={index}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <MyPagination
              totPages={products?.numberOfPages}
              currentPage={currPage}
              pageClicked={(ele) => {
                afterPageClicked(ele);
              }}
            >
              <ul>
                {tagList.map((ele, ind) => (
                  <li key={ele + ind}>{ele}</li>
                ))}
              </ul>
            </MyPagination>
          </div>
        </>
      ) : null}
    </>
  );
}

export default ProudctPage;
