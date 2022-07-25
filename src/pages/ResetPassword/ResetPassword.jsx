import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./ResetPassword.module.css";
import { resetPassword } from "../../store/actions/userActions";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Required").email("invalid email format"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { token } = useParams();

  const onSubmit = (values) => {
    console.log(values.password);
    dispatch(resetPassword(values.email, values.password, token));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className={`container mt-3`}>
      <section className="container w-40 m-auto">
        <Form className=" m-auto mt-5 mb-5" onSubmit={formik.handleSubmit}>
          <div
            className={`d-flex flex-column justify-content-center align-items-center mb-5 ${styles.formHeading}`}
          >
            <i className="fa-solid fa-circle-right"></i>
            <h2 className={` text-capitalize text-center`}>Reset Password</h2>
            <p className="text-capitalize text-center">
              enter your email and new password
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
              {...formik.getFieldProps("email")}
            />
            <i className="fa-solid fa-envelope"></i>
            {formik.errors.email && formik.touched.email ? (
              <div className={styles.error}>{formik.errors.email}</div>
            ) : null}
          </Form.Group>

          <Form.Group
            className={`mb-3 position-relative ${styles.allInput}`}
            controlId="formBasicPassword"
          >
            <Form.Control
              className={`input ${styles.formControl}`}
              type="password"
              placeholder="Password :"
              name="password"
              {...formik.getFieldProps("password")}
            />
            <i className="fa-solid fa-lock"></i>
            {formik.errors.password && formik.touched.password ? (
              <div className={styles.error}>{formik.errors.password}</div>
            ) : null}
          </Form.Group>

          <div className="d-flex justify-content-center align-content-center">
            <button
              className={`${styles.btnWarningg}`}
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Reset Password
            </button>
          </div>
        </Form>
      </section>{" "}
    </div>
  );
};

export default ResetPassword;
