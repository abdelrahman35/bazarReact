import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartAction";
import Rateing from "../Rateing/Rateing";
export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
  };
  return (
    <>
      <div className="m-3 w-100">
        <div className={`card ${styles.cardBody} p-4`}>
          <Link className="text-start" to="/">
            <i className={`fa-light fa-heart ${styles.colorFav}`}></i>
          </Link>

          <Link
            to={`/product-details/${product._id}`}
            className={`text-decoration-none ${styles.cardLinkReset}`}
          >
            <div className={`${styles.imgContainer} text-end `}>
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
