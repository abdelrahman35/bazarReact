import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";

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
  const { userInfo } = userLogin;
  // functions
  const onSubmit = (values) => {
    dispatch(login(values.email, values.password));
  };
  console.log(navigate);
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
      <section className="section7">
        <Form className=" m-auto mt-5 mb-5" onSubmit={formik.handleSubmit}>
          <h1 className="text-capitalize text-center mb-5">LoginPage form </h1>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="input"
              type="email"
              placeholder="Enter email"
              name="email"
              {...formik.getFieldProps("email")}
            />
            {formik.errors.email && formik.touched.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}

            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              {...formik.getFieldProps("password")}
            />
            {formik.errors.password && formik.touched.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
          </Form.Group>

          <Button
            className="btn"
            variant="primary"
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
          >
            Submit
          </Button>
        </Form>

        <Link to="/signup">
          <small>create account?</small>
        </Link>
      </section>
    </>
  );
}

export default LoginPage;
