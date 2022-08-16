import React from "react";
import styles from "./FavouriteItem.module.css";
import image from "../../assets/images/productimage2.png";
import { Link } from "react-router-dom";
const FavouriteItem = () => {
  return (
    <div className="m-3">
      <div className={`card ${styles.cardBody}`}>
        <img src={image} className={`card-img-top ${styles.image}`} alt="..." />
        <div className="card-body">
          <h5 className={`card-title ${styles.productName}`}>product Name</h5>
          <p className="card-text">
            <h6>price: 255 L.E</h6>
            <i className="fa-solid fa-star"></i>{" "}
            <i className="fa-solid fa-star"></i>{" "}
            <i className="fa-solid fa-star"></i>{" "}
            <i className="fa-solid fa-star"></i>{" "}
            <i className="fa-solid fa-star"></i> <span>3.8</span>
          </p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <Link to="#" className={`btn ${styles.btnWarningg}`}>
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <Link to="#" className={`btn ${styles.btnWarningg}`}>
            <i className="fa-solid fa-trash"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FavouriteItem;
