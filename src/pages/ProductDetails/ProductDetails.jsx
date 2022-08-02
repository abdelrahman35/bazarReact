import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { getProductById } from "../../store/actions/productActions";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    loading: productLoading,
    error: productError,
    product,
  } = useSelector((state) => state.oneProduct);
  useEffect(() => {
    dispatch(getProductById(id));
  }, [id, dispatch]);

  return (
    <>
      {productLoading ? (
        <div
          className={`container d-flex justify-content-center align-items-center ${styles.page}`}
        >
          <Loading />
        </div>
      ) : product ? (
        <section>
          <div className={`container d-flex `}>
            <div
              className={`row justify-content-center justify-content-lg-between ${styles.Content}`}
            >
              <div className="col-6 col-md-4">
                <div className={styles.imgcontent}>
                  <img
                    src={`${product?.product?.image}`}
                    alt={product?.product?.name}
                  />
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className={styles.rightcont}>
                  <h1 className={styles.title}>{product?.product?.name}</h1>
                  <div className={styles.price}>
                    {" "}
                    EGP {product?.product?.price}
                  </div>
                  <div className={`d-flex ${styles.review} justify-content`}>
                    <i className="fa-regular fa-star ms-3 mt-1"></i>
                    <i className="fa-regular fa-star  mt-1"></i>
                    <i className="fa-regular fa-star  mt-1"></i>
                    <i className="fa-regular fa-star  mt-1"></i>
                    <i className="fa-regular fa-star  mt-1"></i>
                  </div>
                  <hr />
                  <div className={styles.Pdate}>
                    Product Date :{product?.product?.modelYear}
                  </div>
                  <h4>About this item</h4>
                  <div>{product?.product?.description}</div>
                  <br />
                  <p>Quantity:</p>

                  <div className="d-flex">
                    <div className={`dropdown ${styles.drop}`}>
                      <button
                        className={`btn dropdown-toggle`}
                        type="button"
                        id="dropdownMenu2"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        1
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        <li>
                          <button className="dropdown-item" type="button">
                            2
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item" type="button">
                            3
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item" type="button">
                            4
                          </button>
                        </li>
                      </ul>
                    </div>
                    <button className={styles.btnWarningg}>Add To Cart</button>{" "}
                    <i
                      className={`fa-solid fa-square-heart ${styles.icon}`}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : productError ? (
        <ErrorMessage />
      ) : null}
    </>
  );
};

export default ProductDetails;
