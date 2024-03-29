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
      <section className={styles.section}>
        <CheckoutBar step1 step2 />

        <div className={`container d-flex flex-column ${styles.slectooo}`}>
          <h3 className="text-capitalize fw-normal">Choose Payment Method :</h3>
          <div className="d-flex row justify-content-around mt-3 align-items-center">
            {paymentMethodsArray.map((method, index) => (
              <div className=" col-12 col-md-6 mt-5 mt-md-0" key={index}>
                <button
                  className={`btn w-100   ${styles.btingo} `}
                  name="paymentMethod"
                  id="paymentMethod"
                  value={method}
                  onClick={(e) => {
                    setPaymentMethodType(e.target.value);
                    setPaymentMethodIsSelected(true);
                  }}
                >
                  Pay Using {method}
                </button>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center m-3">
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
        </div>
      </section>
    </>
  );
}

export default SelectPaymentMethod;
