import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import { Link, lazy, suspense } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToFavourites } from "../../store/actions/cartAction";
import Rateing from "../Rateing/Rateing";
export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(product._id, 1));
  };
  return (
    <>
      <div
        className={`${styles.box17} d-flex flex-column justify-content-center
                        align-items-center`}
      >
        <div className="text-center ">
          <img
            className="m-3 w-50"
            src={`https://bazaarshop.s3.eu-west-3.amazonaws.com${product.image}`}
            alt={product.name}
          />
        </div>

        <div className="d-flex flex-column w-90 align-items-start text-capitalize">
          <h3 className={`${styles.title}  `}> {product.name}</h3>
          <h3 className={`${styles.title}`}>
            EGP <strong className="fs-4">{product.price}</strong>
          </h3>
          <h3
            className={`${styles.title} ${styles.review} d-flex align-items-center gap-2`}
          >
            <Rateing rate={product.rating} size={"xs"} />
            {product.rating}
          </h3>
        </div>

        <div className={`${styles.icon} ${styles.icon1}`}>
          <button
            onClick={() => {
              dispatch(addToFavourites(product._id));
            }}
          >
            <i className={`fa-regular fa-heart ${styles.favIcon}`}></i>
          </button>
          <h2 className={styles.cardDescreptionHover}>{product.description}</h2>
        </div>
        <div className={`${styles.boxContent}`}>
          <ul
            className={`${styles.icon} d-flex justify-content-evenly
                                align-items-center list-unstyled`}
          >
            <li>
              <Link to={`/product-details/${product._id}`}>
                <button className={styles.btnWarningg}>View Item</button>
              </Link>
            </li>
            <li>
              <button
                className={styles.btnWarningg}
                onClick={() => {
                  addToCartHandler();
                }}
              >
                Add To Cart
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
