import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterProducts } from "../../../store/actions/productActions";
import { ProductCard } from "../../../components/ProductCard/ProductCard";
import Loading from "../../../components/Loading/Loading";
import styles from "./CategoryDetails.module.css";
import SortComponentOnCategory from "../../../components/SortComponentOnCategory/SortComponentOnCategory";
import Filter from "../../../components/FilterComponent/Filter";
import Category from "../../../components/Category/Category";
import MyPagination from "../../../components/Pagination";
function CategoryDetails() {
  const { categories } = useSelector((state) => state.allCategories);
  const categoriesArray = categories?.categories;
  const { loading, error, filteredProducts } = useSelector(
    (state) => state.filteredProducts
  );
  const productsArray = filteredProducts?.data?.products;
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const [currPage, setCurrPage] = useState(1);
  const [tagList, setTagList] = useState([]);

  const afterPageClicked = (page_number) => {
    setCurrPage(page_number);
  };
  useEffect(() => {
    dispatch(filterProducts(currPage, `categoryId=${categoryId}`));
  }, [categoryId, currPage]);

  return (
    <>
      <div className={`container ${styles.conten}`}>
        {loading ? (
          <div
            className={`container d-flex justify-content-center align-items-center ${styles.contenn}`}
          >
            <Loading />
          </div>
        ) : error ? (
          <div>errro</div>
        ) : productsArray?.length === 0 ? (
          <div>there is no products under this category</div>
        ) : (
          <div className={`container-fluid  `}>
            <div className="row justify-content-center align-items-start p-0  px-lg-5">
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
                    </div>
                  </div>
                </aside>
              </div>

              <div className="col-12 d-flex flex-column justify-content-center align-items-center   ">
                <div
                  className="row d-flex justify-content-between
                align-items-center w-90"
                >
                  <h2 className="text-center text-capitalize w-20">
                    {categoriesArray?.map((category) =>
                      category._id === categoryId ? category.categoryName : null
                    )}
                  </h2>
                  <SortComponentOnCategory />
                </div>

                <div className="container  mb-5">
                  <div className="row">
                    {productsArray?.map((product, index) => (
                      <div className={`col-lg-4 col-md-6 col-12`} key={index}>
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <MyPagination
              totPages={filteredProducts?.data?.numberOfPages}
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
        )}
      </div>
    </>
  );
}

export default CategoryDetails;
