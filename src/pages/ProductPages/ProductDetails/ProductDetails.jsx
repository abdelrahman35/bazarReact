import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { getProductById } from "../../../store/actions/productActions";
import Loading from "../../../components/Loading/Loading";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";
import Rateing from "../../../components/Rateing/Rateing";
import { addToCart, addToFavourites } from "../../../store/actions/cartAction";
const ProductDetails = () => {
  const [qty, setQty] = useState(1);
  console.log(qty);
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

  const prodcutReviewsArray = product?.product?.reviews;
  const productQuantity = product?.product?.quantity;
  const quantityArray = Array.from(
    { length: productQuantity },
    (_, index) => index + 1
  );
  const addToCartHandler = () => {
    dispatch(addToCart(id, qty));
  };
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
                  <Rateing rate={product?.product?.rating} />
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
                <p>
                  Stock:{" "}
                  {product?.product?.quantity > 0 ? "in stock" : "out of stock"}
                </p>
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
                    onChange={(e) => {
                      setQty(parseInt(e.target.value));
                    }}
                  >
                    {quantityArray.map((x, index) => (
                      <option key={index} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>

                  <button
                    className={`${styles.btnWarningg}`}
                    onClick={() => {
                      addToCartHandler();
                    }}
                  >
                    <i className="fa-solid fa-cart-plus me-2"></i>
                    Add to cart
                  </button>
                  <button
                    className={`fa-solid fa-square-heart ${styles.favIcon}`}
                    onClick={() => {
                      dispatch(addToFavourites(id));
                    }}
                  ></button>
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
                    <h3 className={`${styles.overAllNum} mt-0 mb-2`}>
                      {product?.product?.rating}
                    </h3>
                    <div className="mb-5">
                      <Rateing rate={product?.product?.rating} size={"sm"} />
                    </div>
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

            <div className="row w-95 m-auto">
              <h2 className={styles.customerReviewTitle}>Customer Reviews</h2>
              {prodcutReviewsArray?.map((review, index) => (
                <div className="d-flex " key={index}>
                  <ReviewCard review={review} />
                </div>
              ))}
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
