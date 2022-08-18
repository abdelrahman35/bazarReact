import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { successPaymentHandler } from "../../../store/actions/ordersActions";
import styles from "./Success.module.css";
const Success = () => {
  const dispatch = useDispatch();
  const { statusCode } = useSelector((state) => state.orderIsPlaced);
  const clientSecret = JSON.parse(localStorage.getItem("cs"));
  useEffect(() => {
    if (clientSecret) {
      dispatch({ type: "CLEAR_CART" });

      dispatch(successPaymentHandler());
    } else if (!clientSecret && statusCode === 201) {
      dispatch({ type: "CLEAR_CART" });
    }
  }, [statusCode]);

  return (
    <>
      <div className={`container  ${styles.Con}`}>
        <div className="row w-80 justify-content-center align-items-center">
          <div className={`${styles.component} w-100`}>
            <i className={`fa-solid fa-circle-check  me-2`}></i>
            <p className="m-0 mb-1 text-capitalize">
              Order is placed Successfully{" "}
              <Link className={`${styles.redirectLink}`} to={"/products"}>
                continue shopping
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
