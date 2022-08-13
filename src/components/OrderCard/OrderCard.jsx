import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cancelOrderIfPending } from "../../store/actions/ordersActions";
import styles from "./OrderCard.module.css";
const OrderCard = ({ order }) => {
  const dispatch = useDispatch();
  // function to cancel order of if the status or the order is still pending
  const handleCancelOrder = () => {
    if (order.status === "pending" || order?.status === "Pending") {
      dispatch(cancelOrderIfPending(order?._id));
    } else {
      let x = "order can not be cancelled.";
      return x;
    }
  };
  useEffect(() => {}, []);

  return (
    <>
      <div className={`container-fluid `}>
        <div className={`card mb-3" ${styles.card}`}>
          <div className="col-md-8 w-100">
            <div className="card-body p-0 px-2 py-3">
              <h5
                className={`m-0 card-title ${styles.Title} d-flex justify-content-start gap-4`}
              >
                <p className="m-0 mb-1">Order Number :</p>
                <p className="m-0 mb-1">({order?._id.substring(0, 10)})</p>
                <button className="">more</button>
              </h5>

              <p className={`card-text ${styles.OrderStatus}`}>
                {order?.status}
              </p>
              <div className="d-flex justify-content-between mt-2">
                <p className={`card-text ${styles.Date}`}>
                  <span>On {order?.createdAt?.substring(0, 10)}</span>
                </p>
                <p className={`card-text ${styles.Button}`}>
                  {order?.status === "pending" ||
                  order?.status === "Pending" ? (
                    <>
                      <button
                        className={styles.btnWarningg}
                        onClick={() => {
                          handleCancelOrder();
                        }}
                      >
                        Cancel Item
                      </button>
                    </>
                  ) : order?.status === "cancelled" ||
                    order?.status === "Cancelled" ? (
                    <span>Cancelled</span>
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
      <hr />
    </>
  );
};

export default OrderCard;
