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
          className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
        >
          <Loading />
        </div>
      ) : product ? (
        <section>
          <div className="container p-5">
            <div className="row mt-5 justify-content-center align-items-center">
              <div className="col-12 col-md-6">
                <div className="d-flex justify-content-center align-content-center">
                  <img
                    className="w-75"
                    src={`https://bazaarshop.s3.eu-west-3.amazonaws.com${product?.product?.image}`}
                    alt={product?.product?.name}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <h1 className={styles.title}>{product?.product?.name}</h1>
                <h3 className={styles.price}> EGP {product?.product?.price}</h3>
                <h3 className={styles.review}>
                  {product?.product?.rating} review
                </h3>
                <hr></hr>
                <h3 className={styles.model}>
                  model year : {product?.product?.modelYear}{" "}
                </h3>
                <h3 className={`${styles.descTitle}`}>
                  About this item :
                  <p className={styles.descBody}>
                    {product?.product?.description}
                  </p>
                </h3>
                <label
                  htmlFor="quantity"
                  className={`text-capitalize  ${styles.descTitle} mb-2`}
                >
                  quantity:
                </label>
                <div className="d-flex justify-content-start gap-3 align-items-center">
                  <select
                    id="quantity"
                    className={`form-select ${styles["form-select"]}`}
                    aria-label="Default select example"
                  >
                    <option defaultValue> {product?.product?.quantity}</option>

                    {product?.product?.quantity === 1 ? (
                      <option value="1" className="d-none">
                        0
                      </option>
                    ) : (
                      //map on quantity here
                      <option value="" className="">
                        {product?.product?.quantity - 1}
                      </option>
                    )}
                  </select>

                  <button className={`${styles.btnWarningg}`}>
                    <i className="fa-solid fa-cart-plus me-2"></i>
                    Add to cart
                  </button>
                  <div>
                    <i
                      className={`fa-solid fa-square-heart ${styles.favIcon}`}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <h2 className={styles.reviewTitle}>Reviews</h2>
              <hr className={styles.reviewHr}></hr>
              <div className="row mb-5">
                <div className="col-12 col-md-4">
                  <div
                    className={`${styles.overallRating} d-flex justify-content-center align-items-center flex-column mt-3 pe-4`}
                  >
                    <h3 className={styles.overAll}>Overall Rating</h3>
                    <h3 className={`${styles.overAllNum} mt-0 mb-0`}>
                      {product?.product?.rating}
                    </h3>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="mt-3">
                    <div className="d-flex justify-content-start gap-2 align-items-center">
                      <span className={styles.spanQuistionMark}>?</span>
                      <h2 className={`${styles.reveiwParTitle} mt-2 `}>
                        How do I review this product
                      </h2>
                    </div>

                    <p>
                      If you recently purchased this product from noon, you can
                      go to your Orders page and click on the Submit Review
                      button
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="mt-3">
                    <div className="d-flex justify-content-start gap-2 align-items-center">
                      <span className={styles.spanQuistionMark}>?</span>
                      <h2 className={`${styles.reveiwParTitle} mt-2 `}>
                        Where do the reviews come from
                      </h2>
                    </div>

                    <p>
                      Our reviews are from Bazaar customers who purchased the
                      product and submitted a review
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <h2>Customer Reviews</h2>
              <div className="ms-4 d-flex fle">
                <div className="row">
                  <h3>Reviewer Name is here</h3>
                  <h3>Reviewer rate is here</h3>
                  <h3>date of reviewer</h3>
                  <p>
                    The battery is not as indicated it does not stay till 14
                    days as specified but rather 2 days max but the band overall
                    is great
                  </p>
                  <hr></hr>
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
