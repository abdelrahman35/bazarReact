import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderDetailsForAdmin } from "../../../../store/actions/ordersActions";
import { useParams } from "react-router-dom";
import styles from "./OrderDetailsForAdmin.module.css";
import Loading from "../../../../components/Loading/Loading";

function OrderDetailsForAdmin() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    loading: orderIsLoading,
    error: orderIsError,
    order,
  } = useSelector((state) => state.orderDetailsForAdmin);
  const orderObj = order?.order;
  useEffect(() => {
    dispatch(orderDetailsForAdmin(id));
  }, []);
  console.log(order);
  return (
    <>
      {orderIsLoading ? (
        <Loading />
      ) : order ? (
        <div className="container mt-2">
          <div className="row">
            <h4>Order Details</h4>
            <p>ordered at : {orderObj?.createdAt.substring(0, 10)} </p>

            <div className="card">
              <div className="card-body row">
                <div className="col-lg-8">
                  <h5 className="card-title">shipping details</h5>
                  <p>
                    {orderObj?.user?.firstName + " " + orderObj?.user?.lastName}
                  </p>

                  <p>
                    {orderObj?.shippingAddress.street +
                      ", " +
                      orderObj?.shippingAddress.city +
                      ", " +
                      orderObj?.shippingAddress.country +
                      "."}
                  </p>
                  <p>+2{orderObj?.shippingAddress?.phone}</p>
                </div>
                <div className="col-lg-4">
                  <p>order status:</p>
                  <p
                    className={`alert ${
                      orderObj?.status === "Pending"
                        ? "alert-primary"
                        : orderObj?.status === "cancelled"
                        ? "alert-danger"
                        : "alert-success"
                    }`}
                  >
                    {orderObj?.status}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="accordion mt-4" id="accordionExample">
                {orderObj?.products?.map((product, index) => (
                  <div key={index} className="accordion-item ">
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
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default OrderDetailsForAdmin;
