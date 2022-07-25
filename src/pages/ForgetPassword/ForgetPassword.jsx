import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ForgetPassword.module.css";
import { forgetPassword } from "../../store/actions/userActions";
export const ForgetPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    dispatch(forgetPassword(email));
  };
  return (
    <div className={`container mt-3`}>
      <section className="container w-40 m-auto">
        <Form className=" m-auto mt-5 mb-5" onSubmit={submitHandler}>
          <div
            className={`d-flex flex-column justify-content-center align-items-center mb-5 ${styles.formHeading}`}
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
            className={`mb-3 position-relative ${styles.allInput}`}
            controlId="formBasicEmail"
          >
            <Form.Control
              className={`input ${styles.formControl}`}
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
            <button
              className={`${styles.btnWarningg}`}
              type="submit"
              // disabled={!(formik.isValid && formik.dirty)}
            >
              Submit
            </button>
          </div>
        </Form>
      </section>{" "}
    </div>
  );
};
