import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutBar from "../../../components/CheckoutBar/CheckoutBar";
import { createOrder } from "../../../store/actions/ordersActions";
import styles from "./PlaceOrder.module.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function PlaceOrder() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error: userError, userInfo } = useSelector(
    (state) => state.userLogin
  );
  const { cartItems, shippingAddress, paymentMethod } = useSelector(
    (state) => state.cart
  );
  const {
    isPlaced,
    statusCode,
    error: placeError,
  } = useSelector((state) => state.orderIsPlaced);
  const submitHandeler = () => {
    dispatch(createOrder(cartItems, shippingAddress, paymentMethod));
  };
  const redirectArrayAfterSuccessUpdate = localStorage.getItem("ORS")
    ? JSON.parse(localStorage.getItem("ORS"))
    : [];
  //   US => update success
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
    if (
      redirectArrayAfterSuccessUpdate[0] &&
      redirectArrayAfterSuccessUpdate[1] === 201 &&
      !isPlaced?.clientSecret
    ) {
      localStorage.removeItem("ORS");
      dispatch({ type: "CLEAR_CART" });
      navigate("/success", { replace: true });
    }
    if (JSON.parse(localStorage.getItem("EROFORP"))) {
      Swal.fire({
        title: "order is not palced",
        text: "one of selected product is out of stock",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "back to products page ",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("EROFORP");
          navigate("/products", { replace: true });
          dispatch({ type: "CLEAR_CART" });
        }
      });
    }
  }, [userInfo, isPlaced, statusCode, userError, navigate, placeError]);
  // useEffect(() => {
  //   if (!placeError) {
  //     dispatch({ type: "CLEAR_CART" });
  //     navigate("/success", { replace: true });
  //   }
  // }, [placeError]);

  return (
    <section className={styles.section}>
      <div className="m-lg-5 text-capitalize">
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
                      street: <span>{shippingAddress?.street}</span>
                    </p>
                    <p>
                      city: <span>{shippingAddress?.city}</span>
                    </p>
                    <p>
                      country: <span>{shippingAddress?.country}</span>
                    </p>
                    <p>
                      phone: <span>{shippingAddress?.mobile}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-center">
              <div className="card shadow col-lg-8 w-100 h-100">
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
                      <p className={` ${styles.second}`}>
                        Price Include 14% vat
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    {paymentMethod === "cash" ? (
                      <button
                        className={`${styles.btnWarningg}`}
                        onClick={() => {
                          submitHandeler();
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
    </section>
  );
}

export default PlaceOrder;
