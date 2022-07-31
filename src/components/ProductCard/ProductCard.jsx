import React from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import ProductImage from "../../assets/images/productimage2.png";
export const ProductCard = ({ product }) => {
  return (
    <>
      <div
        className={`${styles.box17} d-flex flex-column justify-content-center
                        align-items-center`}
      >
        <div className="text-center ">
          <img className="w-90 m-3" src={ProductImage} alt="" />
        </div>
        <h1 className={`${styles.cardInfo}`}>Products Name : {product.name}</h1>
        <div className={`${styles.icon} ${styles.icon1}`}>
          <h3 className={styles.title}>Products Name : {product.name}</h3>
          <h3 className={styles.title}>Model Year : {product.modelYear}</h3>
          <h3 className={styles.title}>Model Year : {product.modelYear}</h3>
        </div>
        <div className={`${styles.boxContent}`}>
          <ul
            className={`${styles.icon} d-flex justify-content-evenly
                                align-items-center list-unstyled`}
          >
            <li>
              <Link to="/product-details">
                <button className={styles.btnWarningg}>View Item</button>
              </Link>
            </li>
            <li>
              <Link to="/">
                <button className={styles.btnWarningg}>Add To Cart</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
