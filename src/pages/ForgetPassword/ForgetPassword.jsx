import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./ForgetPassword.module.css";
import { forgetPassword } from "../../store/actions/userActions";
const ForgetPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };
  return (
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
  );
};

export default ForgetPassword;
