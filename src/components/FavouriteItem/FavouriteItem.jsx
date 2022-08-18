import React from "react";
import styles from "./FavouriteItem.module.css";
import { Link } from "react-router-dom";
import Rateing from "../Rateing/Rateing";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromFavourites,
} from "../../store/actions/cartAction";
const FavouriteItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="m-3">
      <div className={`card ${styles.cardBody}`}>
        <div className={styles.imageWrapper}>
          <img
            src={`https://bazaarshop.s3.eu-west-3.amazonaws.com${product.image}`}
            className={`card-img-top `}
            alt={product.name}
          />
        </div>

        <div className="card-body">
          <h5 className={`card-title ${styles.productName}`}>{product.name}</h5>
          <div className="card-text">
            <h6>price: {product.price}</h6>
            <span
              className={`${styles.title} ${styles.review} d-flex justify-content-start gap-2 align-items-center`}
            >
              <Rateing rate={product.rating} size={"xs"} />
              <span className="mt-1">{product.rating}</span>
            </span>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button
            className={`btn ${styles.btnWarningg}`}
            onClick={() => {
              dispatch(addToCart(product._id, 1));
              dispatch(removeFromFavourites(product._id));
            }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button
            onClick={() => {
              dispatch(removeFromFavourites(product._id));
            }}
            to="#"
            className={`btn ${styles.btnWarningg}`}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouriteItem;
