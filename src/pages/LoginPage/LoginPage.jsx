import Form from "react-bootstrap/Form";
import { replace, useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

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

function LoginPage() {
  // declarations
  const navigate = useNavigate();
  // const location = useLocation();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error: userError, userInfo } = userLogin;
  // functions
  const onSubmit = (values) => {
    dispatch(login(values.email, values.password));
  };

  useEffect(() => {
    if (userError) {
      navigate("*", { replace: true, state: userError });
    }
    if (userInfo) {
      navigate(-1, { replace: true });
    }
  }, [navigate, userInfo, userError]);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      {!userInfo ? (
        <section className="container w-100 m-auto">
          <Form className=" m-auto mt-5 mb-5" onSubmit={formik.handleSubmit}>
            <div
              className={`d-flex flex-column justify-content-center align-items-center mb-5 ${styles.formHeading}`}
            >
              <i className="fa-solid fa-circle-right"></i>
              <h2 className={` text-capitalize text-center`}>Welcome !</h2>
              <p className="text-capitalize text-center">
                Sign in to your account
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

            <div className="d-flex justify-content-between align-content-center ">
              <button
                className={`${styles.btnWarningg}`}
                type="submit"
                data-bs-dismiss="modal"
                disabled={!(formik.isValid && formik.dirty)}
              >
                Login
              </button>
              <Link
                to="/forgetPassword"
                className={`${styles.forgetPassword} `}
              >
                <small data-bs-dismiss="modal">Forgot password ?</small>
              </Link>
            </div>
          </Form>
        </section>
      ) : userError ? (
        <ErrorMessage statusCode={userError} />
      ) : null}
    </>
  );
}

export default LoginPage;
