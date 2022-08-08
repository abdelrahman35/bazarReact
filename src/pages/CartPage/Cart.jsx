import styles from "./Cart.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import image1 from "../../assets/images/Productimage1.png";
const Cart = () => {
  const {
    loading: productLoading,
    error: productError,
    product,
  } = useSelector((state) => state.oneProduct);

  const productQuantity = product?.product?.quantity;
  const quantityArray = Array.from(
    { length: productQuantity },
    (_, index) => index + 1
  );
  return (
    <div className={`${styles.Cart} `}>
      {" "}
      {/* Cart */}
      <div className={`container `}>
        <div className={`row `}>
          <div className={`  col-12 col-lg-8  `}>
            <h2 className={`Text1`}> Cart</h2> {/* Text1 */}
            <div className={`d-flex row  ${styles.Left}`}>
              <div className={`col-lg-3 `}>
                <img src={image1} className={`${styles.imag}`}></img>{" "}
                {/* image */}
              </div>

              <div className="col-8">
                <div className="d-flex row">
                  <p className={`p-2 col-6 ${styles.title}`}>
                    High Quality Vase Antique
                  </p>{" "}
                  {/* title */}
                  <p className={`p-2 col-3 ${styles.title2}`}>599.99 EGP</p>
                </div>
                <div className="d-flex row">
                  <p className={`p-2 col-6 ${styles.titleDetail}`}>
                    production date: 11-1970
                  </p>
                  {/* title */}
                  <p className={`p-2 col-2`}></p>
                </div>
                <p className={``}> </p>
                <p className={`${styles.titleDetail2}`}>120 Review</p>
                <div className="d-flex row">
                  <div className={`col-6 ${styles.Text4}`}>
                    <p>
                      <i class="fa-solid fa-heart"></i>Move to wishlist
                    </p>
                  </div>
                  <div className={`col-6 ${styles.Text5}`}>
                    <p>
                      {" "}
                      <i class="fa-solid fa-trash"></i>Remove from cart
                    </p>
                  </div>
                  <div className=" quantity button col-2">
                    <p>
                      {/* Stock:{" "}
                      {product?.product?.quantity > 0
                        ? "in stock"
                        : "out of stock"} */}
                    </p>
                    {/* <label
                      htmlFor="quantity"
                      className={`text-capitalize  ${styles.descTitle} mb-2`}
                    ></label> */}
                    <div className="">
                      <select
                        id="quantity"
                        className={`form-select ${styles["form-select"]}`}
                        aria-label="Default select example"
                      >
                        {quantityArray.map((x, index) => (
                          <option key={index} value={x}>
                            {x}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`  col-12 col-lg-4`}>
            <h2 className={`Text2`}>Order Summary</h2>
            <div className={`row  ${styles.Right}`}>
              <div className={``}>
                {" "}
                {/* Right */}
                <div className={` `}>
                  {" "}
                  {/* firstrow */}
                  <div className="row">
                    <p className={`col-4 ${styles.first}`}>
                      Subtotal<span>(6items)</span>
                    </p>
                    <p className={`col-4 ${styles.second}`}>3,599.99EGP</p>
                  </div>
                  <div className="row">
                    <p className={`col-3 ${styles.first}`}> Shipping</p>
                    <p className={`col-5 ${styles.second}`}>Free</p>
                  </div>
                  <div className="row">
                    <p className={`col-3 ${styles.first}`}> Taxes</p>
                    <p className={`col-6 ${styles.second}`}>
                      Price Include 14% vat
                    </p>
                  </div>
                  <div className={`row `}>
                    {" "}
                    {/* bt */}
                    <button className={`${styles.btnWarningg}`}>
                      {" "}
                      {/* btnWarning */}
                      CHECK OUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
