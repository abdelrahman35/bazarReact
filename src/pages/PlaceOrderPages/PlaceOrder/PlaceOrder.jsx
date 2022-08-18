import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutBar from "../../../components/CheckoutBar/CheckoutBar";
import { createOrder } from "../../../store/actions/ordersActions";
import styles from "./PlaceOrder.module.css";
import { useNavigate } from "react-router-dom";
function PlaceOrder() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error: userError, userInfo } = useSelector(
    (state) => state.userLogin
  );
  const { cartItems, shippingAddress, paymentMethod } = useSelector(
    (state) => state.cart
  );
  const { isPlaced, statusCode } = useSelector((state) => state.orderIsPlaced);
  const submitHandeler = () => {
    dispatch(createOrder(cartItems, shippingAddress, paymentMethod));
  };
  useEffect(() => {
    if (!userInfo) {
      navigate("*", { replace: true, state: userError });
    }
    if (isPlaced?.clientSecret && statusCode === 201) {
      navigate("/payment", {
        replace: true,
        state: [isPlaced.clientSecret, isPlaced.order._id],
      });
    }
  }, [userInfo, isPlaced, statusCode, userError, navigate]);

  return (
    <div className="m-lg-5">
      <CheckoutBar step1 step2 step3 />
      <div className="container-fluid">
        <div className="row">
          {" "}
          <h2 className="text-center">review order</h2>
        </div>
        <div className="row">
          <div className="card shadow col-lg-8">
            <div className="card-body">
              <div>
                <h4>products</h4>{" "}
                <table className="table table-striped">
                  <thead className="container-fluid">
                    <tr className="row">
                      <th className="col-1">#</th>
                      <th className="col-2">image</th>
                      <th className="col-3">name</th>
                      <th className="col-3">price</th>
                      <th className="col-3">quantity</th>
                    </tr>
                  </thead>
                  <tbody className="container-fluid">
                    {cartItems?.map((item, index) => (
                      <tr key={item.productId} className="row">
                        <td className="col-1">{index + 1}</td>
                        <td className="col-2">
                          <img
                            src={`https://bazaarshop.s3.eu-west-3.amazonaws.com${item.image}`}
                            alt={item.name}
                            style={{ width: "50px" }}
                          />
                        </td>

                        <td className="col-3">{item.name}</td>
                        <td className="col-3">{item.price}</td>
                        <td className="col-3">{item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <h4>shipping address</h4>
                <div>
                  <p>
                    street: <span>{shippingAddress.street}</span>
                  </p>
                  <p>
                    city: <span>{shippingAddress.city}</span>
                  </p>
                  <p>
                    country: <span>{shippingAddress.country}</span>
                  </p>
                  <p>
                    phone: <span>{shippingAddress.mobile}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-4">
            <div className="card shadow col-lg-8">
              <div className="card-body">
                <h4 className="text-center">order summary</h4> <hr />
                <div className={styles.content}>
                  <div
                    className={`${styles.first} d-flex justify-content-between align-items-center`}
                  >
                    <p>
                      Subtotal<span>({cartItems?.length})items</span>
                    </p>
                    <p className={` ${styles.second}`}>
                      {cartItems?.reduce(
                        (contedPrice, product) =>
                          contedPrice + product.price * product.quantity,
                        0
                      )}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center ">
                    <p className={` ${styles.first}`}>Shipping</p>
                    <p className={` ${styles.second}`}>Free</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center ">
                    <p className={` ${styles.first}`}>Taxes</p>
                    <p className={` ${styles.second}`}>Price Include 14% vat</p>
                  </div>
                </div>
                <div>
                  {paymentMethod === "cash" ? (
                    <button
                      className={`${styles.btnWarningg}`}
                      onClick={() => {
                        submitHandeler();
                        dispatch({ type: "CLEAR_CART" });
                        navigate("/success", { replace: true });
                      }}
                    >
                      place order
                    </button>
                  ) : (
                    <button
                      className={`${styles.btnWarningg}`}
                      onClick={() => {
                        submitHandeler();
                      }}
                    >
                      place order
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
