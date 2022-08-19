import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
            <div className="card-body p-0 px-2 py-3 d-flex flex-column justify-content-evenly gap-1">
              <div
                className={`m-0 card-title ${styles.Title} d-flex justify-content-between  gap-4`}
              >
                <p className="m-0 mb-1 ">
                  Order Number :
                  <span className="m-0 mb-1">
                    ({order?._id.substring(0, 10)})
                  </span>
                </p>
                <Link to={`/order/${order?._id}`}>
                  <button
                    className={` ${styles.moreBtn}`}
                    onClick={() => {
                      localStorage.setItem(
                        "orderDetails",
                        JSON.stringify(order),
                      );
                    }}
                  >
                    Details
                  </button>
                </Link>
              </div>

              {order?.status === "success" ? (
                <p
                  className={`card-text ${styles.OrderStatus} ${styles.OrderStatusSuc} w-25`}
                >
                  {order?.status}
                </p>
              ) : order?.status === "pending" ? (
                <p
                  className={`card-text ${styles.OrderStatus} ${styles.OrderStatusPen} w-25`}
                >
                  {order?.status}
                </p>
              ) : (
                <p
                  className={`card-text ${styles.OrderStatus} ${styles.OrderStatusCan} w-25`}
                >
                  {order?.status}
                </p>
              )}

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
                    <input
                      className="form-control m-auto text-center"
                      type="text"
                      placeholder="Order Cancelled"
                      aria-label="Disabled input example"
                      disabled
                    />
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
