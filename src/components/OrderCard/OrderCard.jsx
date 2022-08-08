import React from "react";
import styles from "./OrderCard.module.css";
import image from "../../assets/images/productimage2.png";
const OrderCard = () => {
  return (
    <div className={`container ${styles.con}`}>
      <div className={`card mb-3" ${styles.card}`}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className={`card-title ${styles.Title}`}>
                Laptop Shoulder Bag
              </h5>
              <p className={`card-text ${styles.OrderNumber}`}>
                Order Number: <span>9354678</span>
              </p>
              <p className={`card-text ${styles.OrderStatus}`}>
                CANCELLED-PAYMENT UNSUCCESSFULL
              </p>
              <p className={`card-text ${styles.Date}`}>
                <p>On 26-6-2020</p>
              </p>
              <p className={`card-text ${styles.Button}`}>
                <button className={styles.btnWarningg}>Cancel Item</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
