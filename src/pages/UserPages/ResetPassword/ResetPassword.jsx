import Form from "react-bootstrap/Form";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ResetPassword.module.css";
import { resetPassword } from "../../../store/actions/userActions";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loading from "../../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Required").email("invalid email format"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please renter your password"),
});

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useParams();

  const onSubmit = (values) => {
    dispatch(resetPassword(values.email, values.password, token));
    setTimeout(() => {
      navigate("/", { replace: true });
      localStorage.removeItem("FP");
    }, 1000);
  };
  const { loading, statusCode } = useSelector(
    (state) => state.resetPasswordForUser
  );
  const redirectArrayAfterSuccessUpdate = localStorage.getItem("RP")
    ? JSON.parse(localStorage.getItem("RP"))
    : [];
  //   RP => reset password
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  useEffect(() => {
    if (
      redirectArrayAfterSuccessUpdate[0] &&
      redirectArrayAfterSuccessUpdate[1] == 200
    ) {
      setTimeout(() => {
        navigate("/", { replace: true });
        localStorage.removeItem("RP");
      }, 2000);
    }
  }, [statusCode]);

  return redirectArrayAfterSuccessUpdate[0] &&
    redirectArrayAfterSuccessUpdate[1] == 200 ? (
    <div
      className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
    >
      <section className="container w-100 m-auto">
        <p className="text-capitalize text-center">
          password had been reseted successfully
        </p>{" "}
      </section>
    </div>
  ) : loading ? (
    <div
      className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
    >
      <section className="container w-100 m-auto">
        <Loading />
      </section>
    </div>
  ) : (
    <div
      className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
    >
      <section className="container w-100 m-auto">
        <Form
          className=" m-auto mt-5 mb-5 d-flex flex-column gap-4"
          onSubmit={formik.handleSubmit}
        >
          <div
            className={`d-flex flex-column justify-content-center align-items-center gap-2 mb-5 ${styles.formHeading}`}
          >
            <i className="fa-solid fa-circle-right"></i>
            <h2 className={` text-capitalize text-center`}>Reset Password !</h2>
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
          <Form.Group
            className={`mb-3 position-relative ${styles.allInput}`}
            controlId="formBasicPassword"
          >
            <Form.Control
              className={`input ${styles.formControl}`}
              type="password"
              placeholder="Confirm Password"
              name="confirm"
              {...formik.getFieldProps("confirm")}
            />
            {formik.errors.confirm && formik.touched.confirm ? (
              <div className={styles.error}>{formik.errors.confirm}</div>
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
