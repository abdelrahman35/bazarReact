import React from "react";
import styles from "./Fav.module.css";
import favitem from "../../components/FavouriteItem/FavouriteItem";
import image from "../../assets/images/productimage2.png";
const Favorite = () => {
  return (
    <div className={`${styles.component}`}>
      <div className={`container ${styles.con}`}>
        <div className={`${styles.Title}`}>
          <p>Favourite Items</p>
        </div>
        <hr />
        <div className={`card mb-3" ${styles.card}`}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h5 className={`card-title ${styles.Title}`}>
                  Laptop Shoulder Bag
                </h5>

                <p className={`card-text ${styles.OrderNumber}`}>
                  Order Number: <span>9354678</span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <p className={`card-text ${styles.Button1}`}>
                <button className={styles.btnWarningg}>BUY NOW</button>
              </p>
              <p className={`card-text `}>
                <button className={`${styles.Button2}`}>
                  <i className="fa-solid fa-trash"></i> REMOVE
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className={`card mb-3" ${styles.card}`}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h5 className={`card-title ${styles.Title}`}>
                  Laptop Shoulder Bag
                </h5>

                <p className={`card-text ${styles.OrderNumber}`}>
                  Order Number: <span>9354678</span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <p className={`card-text ${styles.Button1}`}>
                <button className={styles.btnWarningg}>BUY NOW</button>
              </p>
              <p className={`card-text `}>
                <button className={`${styles.Button2}`}>
                  <i className="fa-solid fa-trash"></i> REMOVE
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className={`card mb-3" ${styles.card}`}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h5 className={`card-title ${styles.Title}`}>
                  Laptop Shoulder Bag
                </h5>

                <p className={`card-text ${styles.OrderNumber}`}>
                  Order Number: <span>9354678</span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <p className={`card-text ${styles.Button1}`}>
                <button className={styles.btnWarningg}>BUY NOW</button>
              </p>
              <p className={`card-text `}>
                <button className={`${styles.Button2}`}>
                  <i className="fa-solid fa-trash"></i> REMOVE
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
