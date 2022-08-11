import styles from "./CartCard.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "../../assets/images/Productimage1.png";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../store/actions/cartAction";
const CartCard = ({ productFromCart }) => {
  const dispatch = useDispatch();
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
  console.log(productFromCart);
  const removeFromCartHandler = () => {
    dispatch(removeFromCart(productFromCart.productId));
  };

  return (
    <>
      <div className="col-12 col-md-7 col-lg-8 d-flex align-items-start flex-column">
        <div className={`d-flex row  ${styles.Left} w-100 m-0 px-5 px-md-0`}>
          <div className={`col-md-3 `}>
            <img
              src={`https://bazaarshop.s3.eu-west-3.amazonaws.com${productFromCart?.productImage}`}
              className={`w-100`}
              alt="order img"
            />
          </div>
          <div
            className={`col-md-6 p-0 d-flex flex-column justify-content-center align-items-between `}
          >
            <div className="d-flex flex-column gap-1">
              <p className={` m-0 p-0 w-100   col-6 ${styles.title}`}>
                {productFromCart?.productName}
              </p>
            </div>
            <div className="d-flex justify-content-start gap-4">
              <div className={`col-6 `}>
                <Link className={styles.ancorBtns} to="/">
                  <p className={styles.btns}>
                    <i className="fa-solid fa-heart me-2"></i>Move to wishlist
                  </p>
                </Link>
              </div>
              <div className={`col-6 `}>
                <button
                  className={styles.ancorBtns}
                  onClick={() => {
                    removeFromCartHandler();
                  }}
                >
                  <p className={styles.btns}>
                    <i className="fa-solid fa-trash me-2"></i>Remove from cart
                  </p>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3 d-flex flex-column align-items-center">
            <p className={`p-2 col-12  w-50 ${styles.title2}`}>
              {productFromCart?.productPrice} EGP
            </p>
            <select
              id="quantity"
              className={`form-select col-12 w-50 ${styles["form-select"]}`}
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
    </>
  );
};

export default CartCard;
