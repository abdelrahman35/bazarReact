import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../../components/Loading/Loading";
import CreateReview from "../../../components/CreateReview/CreateReview";
import styles from "./ViewOrderDetails.module.css";
function ViewOrderDetails() {
  // get order id from params
  const { orderId } = useParams();
  //   order state from redux store
  const {
    loading: userOrdersLoading,
    error: userOrdersError,
    userOrders,
  } = useSelector((state) => state.userOrders);
  const userOrdersArray = userOrders?.orders;

  let order =
    userOrders.length > 0
      ? userOrdersArray?.find((item) => item._id === orderId)
      : localStorage.getItem("orderDetails")
      ? JSON.parse(localStorage.getItem("orderDetails"))
      : null;
  console.log(order);
  return userOrdersLoading ? (
    <Loading />
  ) : userOrders ? (
    <div className="container mt-2">
      <div className="row">
        <h4>Order Details</h4>
        <p>ordered at : {order?.createdAt?.substring(0, 10)} </p>

        <div className="card">
          <div className="card-body row">
            <div className="col-lg-8">
              <h5 className="card-title">shipping details</h5>
              <p>
                {order?.shippingAddress.street +
                  ", " +
                  order?.shippingAddress.city +
                  ", " +
                  order?.shippingAddress.country +
                  "."}
              </p>
              <p>+2{order?.shippingAddress?.mobile}</p>
            </div>
            <div className="col-lg-4">
              <p>order status:</p>
              <p
                className={`alert ${
                  order?.status === "Pending"
                    ? "alert-primary"
                    : order?.status === "cancelled"
                    ? "alert-danger"
                    : "alert-success"
                }`}
              >
                {order?.status}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="accordion mt-4" id="accordionExample">
            {order?.products?.map((product, index) => (
              <div key={product.productId} className="accordion-item ">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${product.name.split(" ").join("")}`}
                    aria-expanded="true"
                    aria-controls={`${product.name.split(" ").join("")}`}
                  >
                    <div>{product.name}</div>{" "}
                  </button>
                </h2>
                <div
                  id={`${product.name.split(" ").join("")}`}
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body container">
                    <div className="row">
                      <div className="col-lg-8">
                        <p>quantity: {product.quantity}</p>
                        <p>proudct price: {product.price} EGP</p>
                      </div>
                      <div className="col-1">
                        <img
                          src={`https://bazaarshop.s3.eu-west-3.amazonaws.com${product.image}`}
                          alt={product.name}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </div>
                      {order?.status === "delivered" ? (
                        <div>
                          <button
                            type="button"
                            className={`${styles.btnWarningg}`}
                            data-bs-toggle="modal"
                            data-bs-target="#reviewModal"
                          >
                            Add Review
                          </button>

                          <div
                            className="modal fade"
                            id="reviewModal"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">
                                  <CreateReview
                                    productId={product?.productId}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default ViewOrderDetails;
