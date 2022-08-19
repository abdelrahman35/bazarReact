import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import { register } from "../../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("Required")
    .matches(/^\S*$/, "Name must not contain spaces"),
  email: Yup.string().required("Required").email("invalid email format"),
  lastName: Yup.string()
    .required("Required")
    .matches(/^\S*$/, "Name must not contain spaces"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
    ),
});

function SignUpPage() {
  // declarations
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { error: userError, userInfo } = userRegister;
  // functions
  const onSubmit = (values) => {
    dispatch(
      register(
        values.firstName,
        values.lastName,
        values.email,
        values.password,
      ),
    );
  };
  useEffect(() => {
    if (userInfo) {
      navigate(-1, { replace: true });
    }
  }, [navigate, userInfo]);
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      {!userInfo ? (
        <section className="container w-100 m-auto">
          <Form className=" m-auto mt-5" onSubmit={formik.handleSubmit}>
            <div
              className={`d-flex flex-column justify-content-center align-items-center mb-5 ${styles.formHeading}`}
            >
              <i className="fa-solid fa-user mb-3"></i>
              <h2 className={`${styles.heading} text-capitalize text-center`}>
                Create Account !
              </h2>
              <div className="text-capitalize text-center">
                {userError ? (
                  <ErrorMessage statusCode={userError} />
                ) : (
                  "Create new account"
                )}
              </div>
            </div>
            <Form.Group
              className={`mb-3 position-relative ${styles.allInput}`}
              controlId="formBasicFirstName"
            >
              <Form.Control
                className={`input ${styles.formControl}`}
                type="text"
                placeholder="Enter Your first Name"
                name="firstName"
                {...formik.getFieldProps("firstName")}
              />
              <i className="fa-solid fa-circle-1"></i>{" "}
              {formik.errors.firstName && formik.touched.firstName ? (
                <div className={styles.error}>{formik.errors.firstName}</div>
              ) : null}
            </Form.Group>
            <Form.Group
              className={`mb-3 position-relative ${styles.allInput}`}
              controlId="formBasicLastName"
            >
              <Form.Control
                className={`input ${styles.formControl}`}
                type="text"
                placeholder="Enter last Name"
                name="lastName"
                {...formik.getFieldProps("lastName")}
              />
              <i className="fa-solid fa-circle-2"></i>{" "}
              {formik.errors.lastName && formik.touched.lastName ? (
                <div className={styles.error}>{formik.errors.lastName}</div>
              ) : null}
            </Form.Group>
            <Form.Group
              className={`mb-3 position-relative ${styles.allInput}`}
              controlId="formBasicEmail"
            >
              <Form.Control
                className={`input ${styles.formControl}`}
                type="email"
                placeholder="Enter email"
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
                placeholder="Password"
                name="password"
                {...formik.getFieldProps("password")}
              />
              <i className="fa-solid fa-lock"></i>

              {formik.errors.password && formik.touched.password ? (
                <div className={styles.error}>{formik.errors.password}</div>
              ) : null}
            </Form.Group>
            <div className="w-100 d-flex justify-content-center">
              <Button
                className={`${styles.btnWarningg}`}
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
              >
                Create
                <i className="fa-regular fa-arrow-right ms-2 fs-6"></i>
              </Button>
            </div>
          </Form>
        </section>
      ) : null}
    </>
  );
}

export default SignUpPage;
