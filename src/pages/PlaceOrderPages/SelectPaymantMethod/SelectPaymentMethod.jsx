import React from "react";
import { useState } from "react";
import CheckoutBar from "../../../components/CheckoutBar/CheckoutBar";
import styles from "./SelectPaymentMethod.module.css";
import { useDispatch } from "react-redux";
import { setPaymentMethod } from "../../../store/actions/cartAction";
import { useNavigate } from "react-router-dom";
function SelectPaymentMethod() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paymentMethodsArray = ["card", "cash"];
  const [paymentMethodType, setPaymentMethodType] = useState("cash");
  const [paymentMethodIsSelected, setPaymentMethodIsSelected] = useState(false);
  return (
    <>
      <CheckoutBar step1 step2 />
      <div className="d-flex justify-content-around">
        {paymentMethodsArray.map((method, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              htmlFor="paymentMethod"
              value={method}
              onChange={(e) => {
                setPaymentMethodType(e.target.value);
                setPaymentMethodIsSelected(true);
              }}
            />
            <label className="form-check-label" htmlFor="paymentMethod">
              {method}
            </label>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-end m-3">
        {paymentMethodIsSelected ? (
          <button
            className={`${styles.btnWarningg}`}
            onClick={() => {
              dispatch(setPaymentMethod(paymentMethodType));
              navigate("/placeorder", { replace: true });
            }}
          >
            Next
          </button>
        ) : null}
      </div>
    </>
  );
}

export default SelectPaymentMethod;
