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
              <h4>products</h4>{" "}
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>{" "}
          <div className="col-lg-4">
            <div className="card shadow col-lg-8">
              <div className="card-body">
                <h4 className="text-center">order summary</h4> <hr />
                {paymentMethod === "cash" ? (
                  <button
                    className={`${styles.btnWarningg}`}
                    onClick={() => {
                      submitHandeler();
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
  );
}

export default PlaceOrder;
