import React from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NotificationManager } from "react-notifications";
import {
  addToCart,
  addToFavourites,
  removeFromFavourites,
} from "../../store/actions/cartAction";
import Rateing from "../Rateing/Rateing";
export const ProductCard = ({ product }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(product._id, 1));
  };
  const isExceeded = cartItems?.map((item) =>
    item.quantity === product.quantity ? [true, [item]] : [false, [item]]
  );

  const excedArr = isExceeded?.length > 0 ? isExceeded[0][1] : [];
  return (
    <>
      <div className="m-3">
        <div className={`card ${styles.cardBody} p-4 mx-3`}>
          <Link
            to={`/product-details/${product._id}`}
            className={`text-decoration-none ${styles.cardLinkReset}`}
          >
            <div className={`${styles.imgContainer}`}>
              <img
                className={`card-img-top ${styles.image} p-0 w-100`}
                src={`https://bazaarshop.s3.eu-west-3.amazonaws.com${product.image}`}
                alt={product.name}
              />
            </div>
          </Link>

          <div className="d-flex justify-content-between align-items-end">
            <div className="card-body text-start p-0 ">
              <h5 className={`card-title ${styles.productName}`}>
                {product.name.length >= 15
                  ? `${product.name.substring(0, 10)}...`
                  : product.name}
              </h5>
              <div className="card-text">
                <h6>price: {product.price} L.E</h6>

                <Rateing rate={product.rating} read={true} size={"xs"} />
                <span>{product.rating}</span>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              {/* {cartItems?.map((item) =>
                item.quantity === product?.quantity ? (
                  <button
                    className={`d-flex align-items-end  ${styles.outOfStockBtn}`}
                    disabled={true}
                    onClick={() => {
                      addToCartHandler();
                      NotificationManager.success(
                        "Product Added Successfully",
                        "Bazaar Shop"
                      );
                    }}
                  >
                
                    <i className="fa-solid fa-cart-circle-exclamation"></i>{" "}
                  </button>
                ) : (
                  <button
                    className={`d-flex align-items-end  ${styles.btnWarningg}`}
                    disabled={product?.quantity > 0 ? false : true}
                    onClick={() => {
                      addToCartHandler();
                      NotificationManager.success(
                        "Product Added Successfully",
                        "Bazaar Shop"
                      );
                    }}
                  >
                    <i className="fa-solid fa-cart-circle-arrow-up"></i>
                  </button>
                )
              )} */}
              {isExceeded?.length > 0 ? (
                excedArr?.map((x) =>
                  (x.productId === product._id && isExceeded[0][0] === true) ||
                  product.quantity === 0 ? (
                    <button
                      className={`d-flex align-items-end  ${styles.outOfStockBtn}`}
                      disabled={true}
                      onClick={() => {
                        addToCartHandler();
                        NotificationManager.success(
                          "Product Added Successfully",
                          "Bazaar Shop"
                        );
                      }}
                    >
                      <i className="fa-solid fa-cart-circle-exclamation"></i>{" "}
                    </button>
                  ) : (
                    <button
                      className={`d-flex align-items-end  ${styles.btnWarningg}`}
                      disabled={product?.quantity > 0 ? false : true}
                      onClick={() => {
                        addToCartHandler();
                        NotificationManager.success(
                          "Product Added Successfully",
                          "Bazaar Shop"
                        );
                      }}
                    >
                      <i className="fa-solid fa-cart-circle-arrow-up"></i>
                    </button>
                  )
                )
              ) : (
                <button
                  className={`d-flex align-items-end  ${styles.btnWarningg}`}
                  disabled={product?.quantity > 0 ? false : true}
                  onClick={() => {
                    addToCartHandler();
                    NotificationManager.success(
                      "Product Added Successfully",
                      "Bazaar Shop"
                    );
                  }}
                >
                  <i className="fa-solid fa-cart-circle-arrow-up"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
