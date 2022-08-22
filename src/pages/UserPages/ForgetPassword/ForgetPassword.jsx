import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ForgetPassword.module.css";
import { forgetPassword } from "../../../store/actions/userActions";
import Loading from "../../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgetPassword(email));
    setTimeout(() => {
      navigate("/", { replace: true });
      localStorage.removeItem("FP");
    }, 1000);
  };
  const { statusCode, forgetPasswordR, error } = useSelector(
    (state) => state.resetPasswordForUser
  );
  const redirectArrayAfterSuccessUpdate = localStorage.getItem("FP")
    ? JSON.parse(localStorage.getItem("FP"))
    : [];

  useEffect(() => {
    if (
      redirectArrayAfterSuccessUpdate[0] &&
      redirectArrayAfterSuccessUpdate[1] === 200
    ) {
      setTimeout(() => {
        navigate("/", { replace: true });
        localStorage.removeItem("FP");
      }, 2000);
    } else if (error) {
      navigate("*", { replace: true, state: error });
    }
  }, [statusCode, forgetPasswordR, error]);
  return !redirectArrayAfterSuccessUpdate[0] &&
    redirectArrayAfterSuccessUpdate[1] !== 200 ? (
    <div
      className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
    >
      <section className="container w-100 m-auto">
        <Form
          className=" m-auto mt-5 mb-5 d-flex flex-column gap-4"
          onSubmit={submitHandler}
        >
          <div
            className={`d-flex flex-column justify-content-center align-items-center gap-2 mb-5 ${styles.formHeading}`}
          >
            <i className="fa-solid fa-circle-right"></i>
            <h2 className={` text-capitalize text-center`}>
              Forget Your Password ?
            </h2>
            <p className="text-capitalize text-center">
              enter your email to reset it
            </p>
          </div>
          <Form.Group
            className={`mb-3 position-relative ${styles.allInput} w-60 m-auto`}
            controlId="formBasicEmail"
          >
            <Form.Control
              className={`input ${styles.formControl} `}
              type="email"
              placeholder="E-mail :"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <i className="fa-solid fa-envelope"></i>
          </Form.Group>

          <div className="d-flex justify-content-center align-content-center">
            <button className={`${styles.btnWarningg}`} type="submit">
              Submit
            </button>
          </div>
        </Form>
      </section>{" "}
    </div>
  ) : (
    <div
      className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
    >
      <section className="container w-100 m-auto">
        <p className="text-capitalize text-center">
          password had been reseted successfully
        </p>{" "}
      </section>
    </div>
  );
};

export default ForgetPassword;
