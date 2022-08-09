import React from "react";
import styles from "./OrderCard.module.css";
const OrderCard = ({ order }) => {
  console.log(order);
  return (
    <div className={`container `}>
      <div className={`card mb-3" ${styles.card}`}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className={`card-title ${styles.Title}`}>
                Order Number: {order?._id}
              </h5>

              <p className={`card-text ${styles.OrderStatus}`}>
                {order?.status}
              </p>
              <p className={`card-text ${styles.Date}`}>
                <p>On {order?.createdAt?.substring(0, 10)}</p>
              </p>
              <p className={`card-text ${styles.Button}`}>
                {order?.status === "pending" || order?.status === "Pending" ? (
                  <button className={styles.btnWarningg}>Cancel Item</button>
                ) : order?.status === "cancelled" ||
                  order?.status === "Cancelled" ? (
                  <div>Cancelled</div>
                ) : (
                  <>
                    <button className={styles.btnWarningg}>
                      {" "}
                      view details
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
