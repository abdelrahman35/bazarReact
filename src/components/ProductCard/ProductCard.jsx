import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import { Link, lazy, suspense } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToFavourites,
  removeFromFavourites,
} from "../../store/actions/cartAction";
import Rateing from "../Rateing/Rateing";
export const ProductCard = ({ product }) => {
  const { favourites } = useSelector((state) => state.favouritesProducts);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(product._id, 1));
  };
  return (
    <>
      <div className="m-3 w-100">
        <div className={`card ${styles.cardBody} p-4`}>
          {favourites?.map((item) =>
            item.product._id !== product._id ? (
              <button
                className={`text-start  ${styles.Btn}`}
                onClick={() => {
                  dispatch(addToFavourites(product._id));
                }}
              >
                <i className={`fa-light fa-heart ${styles.colorFav}`}></i>
              </button>
            ) : (
              <button
                className={`text-start  ${styles.Btn}`}
                onClick={() => {
                  dispatch(removeFromFavourites(product._id));
                }}
              >
                <i className={`fa-solid fa-heart ${styles.colorFav}`}></i>
              </button>
            )
          )}

          <Link
            to={`/product-details/${product._id}`}
            className={`text-decoration-none ${styles.cardLinkReset}`}
          >
            <div className={`${styles.imgContainer}`}>
              <img
                className={`card-img-top ${styles.image} p-0`}
                src={`https://bazaarshop.s3.eu-west-3.amazonaws.com${product.image}`}
                alt={product.name}
              />
            </div>
          </Link>

          <div className="d-flex justify-content-between align-items-end">
            <div className="card-body text-start p-0 ">
              <h5 className={`card-title ${styles.productName}`}>
                {product.name.length >= 15
                  ? `${product.name.substring(0, 15)}...`
                  : product.name}
              </h5>
              <div className="card-text">
                <h6>price: {product.price} L.E</h6>

                <Rateing rate={product.rating} size={"xs"} />
                <span>{product.rating}</span>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                className={`d-flex align-items-end  ${styles.btnWarningg}`}
                onClick={() => {
                  addToCartHandler();
                }}
              >
                <i className="fa-solid fa-cart-circle-arrow-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
