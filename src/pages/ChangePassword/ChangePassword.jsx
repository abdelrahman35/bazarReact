import Form from "react-bootstrap/Form";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ChangePassword.module.css";
import { changePassword } from "../../store/actions/userActions";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  oldPassword: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  newPassword: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Please renter your password"),
});

const ResetPassword = () => {
  const changePasswordState = useSelector((state) => state.changePassword);
  const {
    loading: loadingChangePassword,
    error: errorChangePassword,
    changePasswordPayload,
  } = changePasswordState;

  const dispatch = useDispatch();
  const onSubmit = (values) => {
    changePassword();
    dispatch(changePassword(values.oldPassword, values.newPassword));
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
            <h2 className={` text-capitalize text-center`}>Change Password</h2>
            <p className="text-capitalize text-center">
              enter your old password and new password
            </p>
          </div>

          <Form.Group
            className={`mb-3 position-relative ${styles.allInput}`}
            controlId="formBasicOldPassword"
          >
            <Form.Control
              className={`input ${styles.formControl}`}
              type="password"
              placeholder="old password:"
              name="oldPassword"
              {...formik.getFieldProps("oldPassword")}
            />
            <i className="fa-solid fa-lock"></i>
            {formik.errors.oldPassword && formik.touched.oldPassword ? (
              <div className={styles.error}>{formik.errors.oldPassword}</div>
            ) : null}
          </Form.Group>
          <Form.Group
            className={`mb-3 position-relative ${styles.allInput}`}
            controlId="formBasicNewPassword"
          >
            <Form.Control
              className={`input ${styles.formControl}`}
              type="password"
              placeholder="new password:"
              name="newPassword"
              {...formik.getFieldProps("newPassword")}
            />
            <i className="fa-solid fa-lock"></i>
            {formik.errors.newPassword && formik.touched.newPassword ? (
              <div className={styles.error}>{formik.errors.newPassword}</div>
            ) : null}
          </Form.Group>
          <Form.Group
            className={`mb-3 position-relative ${styles.allInput}`}
            controlId="formBasicConfirmPassword"
          >
            <Form.Control
              className={`input ${styles.formControl}`}
              type="password"
              placeholder="confirm new password:"
              name="confirmPassword"
              {...formik.getFieldProps("confirmPassword")}
            />
            <i className="fa-solid fa-lock"></i>

            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <div className={styles.error}>
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </Form.Group>

          <div className="d-flex justify-content-center align-content-center">
            <button
              className={`${styles.btnWarningg}`}
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Change Password
            </button>
          </div>
        </Form>
      </section>{" "}
    </div>
  );
};

export default ResetPassword;
