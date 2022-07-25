import React from "react";
import styles from "./ProductCard.module.css";
import ProductImage from "../../assets/images/ProductImage.svg";
// import styled from "styled-components";
export const ProductCard = () => {
  //   const Button = styled.button`
  //     background-color: var(--color1) !important;
  //     height: 4vw;
  //     width: 12vw;
  //     border-radius: 10px;
  //     margin-left: 1vw;
  //     cursor: pointer;
  //   `;
  return (
    <>
      <div className={`card ${styles.cards}`}>
        <img
          className={`card-img-top ${styles.imgs}`}
          src={ProductImage}
          alt="Card image cap"
        />
        <div className="card-body">
          <div className="d-flex flex-row ">
            <div className="Product-Tit1">Product Name : </div>
            <div className="Product-Tit ms-3">Camera 1920 </div>
          </div>

          <div className="d-flex">
            <p className="Product-description">Model Year : </p>
            <p className="Product-description ms-3">1920</p>
          </div>
          <h4 className={`${styles.ProductPrice} ms-3 `}>
            200
            <sup>EGP</sup>
          </h4>
          <div className="d-flex ">
            <i className="fa-regular fa-star ms-3 mt-1"></i>
            <i className="fa-regular fa-star  mt-1"></i>
            <i className="fa-regular fa-star  mt-1"></i>
            <i className="fa-regular fa-star  mt-1"></i>
            <i className="fa-regular fa-star  mt-1"></i>
            <i className="fa-regular fa-star  mt-1"></i>
          </div>

          <br />

          <button className={styles.btnWarningg}>View Item</button>
          <button className={styles.btnWarningg}>Add To Cart</button>
        </div>
      </div>
    </>
  );
};
