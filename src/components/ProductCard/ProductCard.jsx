import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartAction";
export const ProductCard = ({ product }) => {
  console.log(product);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
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
        <h1 className={`${styles.cardInfo}`}>{product.name}</h1>
        <div className={`${styles.icon} ${styles.icon1}`}>
          <h3 className={styles.title}> {product.name}</h3>
          <h3 className={styles.title}> {product.modelYear} yr</h3>
          <h3 className={styles.title}> {product.price}EGP</h3>
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
