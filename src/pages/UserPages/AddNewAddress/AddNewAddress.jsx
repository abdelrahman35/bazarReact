import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewAddress } from "../../../store/actions/userActions";
import Loading from "../../../components/Loading/Loading";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import styles from "./AddNewAddress.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import govNames from "../../../assets/govFile.json";

const initialValues = {
  street: "",
  country: "",
  mobile: 0,
};

const validationSchema = Yup.object({
  street: Yup.string().required("street is required"),
  country: Yup.string().required("country is required"),
  mobile: Yup.number().required("phone number is required"),
});

function AddNewAddress() {
  // declrations
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    loading: userLoading,
    error: userError,
    userInfo,
  } = useSelector((state) => state.userLogin);

  const [city, setCity] = useState();
  const onSubmit = (values) => {
    dispatch(addNewAddress(values, city));
  };
  const { address } = useSelector((state) => state.addAddress);
  const statusCode = localStorage.getItem("ad")
    ? JSON.parse(localStorage.getItem("ad"))
    : null;
  // formik
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  useEffect(() => {
    if (address && statusCode === 201) {
      navigate(-1, { replace: true });
      localStorage.removeItem("ad");
    }
  }, [address, statusCode]);

  return (
    <div>
      {userLoading ? (
        <Loading />
      ) : userInfo ? (
        <section className="container w-100 m-auto">
          <Form className=" m-auto mt-5" onSubmit={formik.handleSubmit}>
            <div
              className={`d-flex flex-column justify-content-center align-items-center mb-5 ${styles.formHeading}`}
            >
              <i className="fa-solid fa-address-book"></i>
              <h2 className={`${styles.heading} text-capitalize text-center`}>
                Add New Address
              </h2>
            </div>
            <Form.Group className="mb-3" controlId="formBasicStreet">
              <Form.Label>street name</Form.Label>

              <Form.Control
                className={`input ${styles.formControl}`}
                type="text"
                name="street"
                {...formik.getFieldProps("street")}
              />
              {formik.errors.street && formik.touched.street ? (
                <div classstreet={styles.error}>{formik.errors.street}</div>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCountry">
              <Form.Label>country</Form.Label>

              <Form.Control
                className={`input ${styles.formControl}`}
                type="text"
                name="country"
                {...formik.getFieldProps("country")}
              />
              {formik.errors.country && formik.touched.country ? (
                <div className={styles.error}>{formik.errors.country}</div>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMobile">
              <Form.Label>Phone Number</Form.Label>

              <Form.Control
                className={`input ${styles.formControl}`}
                type="string"
                name="mobile"
                {...formik.getFieldProps("mobile")}
              />
              {formik.errors.mobile && formik.touched.mobile ? (
                <div className={styles.error}>{formik.errors.mobile}</div>
              ) : null}
            </Form.Group>

            <Form.Group>
              <Form.Label>Select City</Form.Label>

              <Form.Select
                className={`input ${styles.formControl}`}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              >
                {govNames?.map((gov, index) => (
                  <option
                    value={gov.name_en}
                    key={index}
                    className={`input ${styles.formControl}`}
                  >
                    {gov.name_en}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <div className="w-100 d-flex justify-content-center">
              <Button
                className={`${styles.btnWarningg}`}
                variant="primary"
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
              >
                Add
                <i className="fa-regular fa-arrow-right ms-2 fs-6"></i>
              </Button>
            </div>
          </Form>
        </section>
      ) : userError ? (
        <ErrorMessage />
      ) : null}
    </div>
  );
}

export default AddNewAddress;
