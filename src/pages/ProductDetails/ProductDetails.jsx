import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import image1 from "../../assets/images/Productimage1.png";
import { getProductById } from "../../store/actions/productActions";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import tryImg from "../../assets/images/Productimage1.png";

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
  console.log(product?.product?._id);
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
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="">
                  <img
                    className="w-100"
                    src={`https://bazaarshop.s3.eu-west-3.amazonaws.com${product?.product?.image}`}
                    alt={product?.product?.name}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <h1 className={styles.title}>{product?.product?.name}</h1>
                <h3> EGP {product?.product?.price}</h3>
                <h3> {product?.product?.rating} review</h3>
                <hr></hr>
                <h3>model year : {product?.product?.modelYear} </h3>
                <h3>About this item : {product?.product?.description} </h3>
                <div className="d-flex">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <button className={`${styles.btnWarningg}`}>
                    <i className="fa-solid fa-cart-plus"></i>
                    Add to cart
                  </button>
                  <div>
                    <i className="fa-solid fa-square-heart"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <h2>Reviews</h2>
              <hr></hr>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div
                    className={`${styles.overallRating} d-flex justify-content-center align-items-center flex-column mt-3`}
                  >
                    <h3>Overall Rating</h3>
                    <h3> {product?.product?.rating}</h3>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <h2> How do I review this product? </h2>
                  If you recently purchased this product from noon, you can go
                  to your Orders page and click on the Submit Review button
                </div>
                <div className="col-12 col-md-4">
                  <h2> Where do the reviews come from?</h2> Our reviews are from
                  noon customers who purchased the product and submitted a
                  review
                </div>
              </div>
            </div>
            <div className="row">
              <h2>Customer Reviews</h2>
              <div className="ms-4">
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
      ) : /* <section>
          <div className={`container-fluid d-flex `}>
            <div
              className={`row justify-content-center justify-content-lg-between ${styles.Content}`}
            >
              <div className="col-12 col-md-6 col-md-4">
                <div className={styles.imgcontent}>
                  <img
                    src={`${product?.product?.image}`}
                    alt={product?.product?.name}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-md-4">
                <div className={styles.rightcont}>
                  <h1 className={styles.title}>{product?.product?.name}</h1>
                  <div className={styles.price}>
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
        </section> */

      productError ? (
        <ErrorMessage />
      ) : null}
    </>
  );
};

export default ProductDetails;
