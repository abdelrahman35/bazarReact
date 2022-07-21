import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import { register } from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("invalid email format"),
  lastName: Yup.string()
    .required("Required")
    .matches(/^\S*$/, "* This field cannot contain only blankspaces"),
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

function SignUpPage() {
  // declarations
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const redirect = location.search ? location.search.split("=")[1] : "/";
  // functions
  const onSubmit = (values) => {
    dispatch(
      register(values.firstName, values.lastName, values.email, values.password)
    );
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect, { replace: true });
    }
  }, [redirect, navigate, userInfo]);
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <section className="section7">
        <Form className=" m-auto mt-5" onSubmit={formik.handleSubmit}>
          <h1 className="text-capitalize text-center mb-5">
            Regestration form
          </h1>

          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Control
              className="input"
              type="text"
              placeholder="Enter Your first Name"
              name="firstName"
              {...formik.getFieldProps("firstName")}
            />
            {formik.errors.firstName && formik.touched.firstName ? (
              <div style={{ color: "red" }}>{formik.errors.firstName}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Control
              className="input"
              type="text"
              placeholder="Enter last Name"
              name="lastName"
              {...formik.getFieldProps("lastName")}
            />
            {formik.errors.lastName && formik.touched.lastName ? (
              <div style={{ color: "red" }}>{formik.errors.lastName}</div>
            ) : null}
          </Form.Group>
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

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Control
              className="input"
              type="password"
              placeholder="Confirm Password"
              name="confirm"
              {...formik.getFieldProps("confirm")}
            />
            {formik.errors.confirm && formik.touched.confirm ? (
              <div style={{ color: "red" }}>{formik.errors.confirm}</div>
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
      </section>
    </>
  );
}

export default SignUpPage;
