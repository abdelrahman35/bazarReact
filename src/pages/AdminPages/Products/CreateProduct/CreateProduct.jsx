import React, { useState, useEffect } from "react";
import { getAllCategories } from "../../../../store/actions/categoriesActions";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../../../../store/actions/productActions";
import Loading from "../../../../components/Loading/Loading";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import styles from "./CreateProudct.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  description: "",
  price: 0,
  modelYear: 0,
  quantity: 0,
};

const validationSchema = Yup.object({
  name: Yup.string().required("product name is required"),
  description: Yup.string().required("product name is required"),
  price: Yup.number()
    .min(1, "please enter a price")
    .required("proudct price is required"),
  modelYear: Yup.number()
    .max(2022, "Max value is current year")
    .min(1, "please enter the model year")
    .required("please enter model year"),
  quantity: Yup.number()
    .required("Please enter a quantity")
    .min(1, "please enter product quantity  "),
});

function CreateProduct() {
  // declrations
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // user info to specify if he is admin or not
  const {
    loading: userLoading,
    error: userError,
    userInfo,
  } = useSelector((state) => state.userLogin);

  // state of category
  const [category, setCategory] = useState("");
  // array of categories from store
  const { categories: allCategories } = useSelector(
    (state) => state.allCategories
  );
  const categoriesArray = allCategories?.categories;
  const { product } = useSelector((state) => state.createdProduct);

  useEffect(() => {
    dispatch(getAllCategories());
    if (product?.data?.product) {
      navigate("/admin/products", { replace: true });
    }
  }, [dispatch, product, navigate]);
  // state of image
  const [image, setImage] = useState(null);

  // function to send product details to create product action
  // check if product is returned in response
  const onSubmit = (values) => {
    dispatch(createProduct(values, image, category));
  };

  // formik
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      {userLoading ? (
        <Loading />
      ) : userInfo && userInfo?.isAdmin ? (
        <section className="container w-100 m-auto">
          <Form className=" m-auto mt-5" onSubmit={formik.handleSubmit}>
            <div
              className={`d-flex flex-column justify-content-center align-items-center mb-5 ${styles.formHeading}`}
            >
              <i className="fa-solid fa-cart-plus mb-3"></i>
              <h2 className={`${styles.heading} text-capitalize text-center`}>
                Create New Product
              </h2>
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Enter Product Name</Form.Label>

              <Form.Control
                className={`input ${styles.formControl}`}
                type="text"
                name="name"
                {...formik.getFieldProps("name")}
              />
              {formik.errors.name && formik.touched.name ? (
                <div className={styles.error}>{formik.errors.name}</div>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Enter Product Description</Form.Label>

              <Form.Control
                className={`input ${styles.formControl}`}
                type="text"
                name="description"
                {...formik.getFieldProps("description")}
              />
              {formik.errors.description && formik.touched.description ? (
                <div className={styles.error}>{formik.errors.description}</div>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Enter Price</Form.Label>

              <Form.Control
                className={`input ${styles.formControl}`}
                type="number"
                min={0}
                name="price"
                {...formik.getFieldProps("price")}
              />
              {formik.errors.price && formik.touched.price ? (
                <div className={styles.error}>{formik.errors.price}</div>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicModelYear">
              <Form.Label>Enter Model Year</Form.Label>

              <Form.Control
                className={`input ${styles.formControl}`}
                type="number"
                max={2022}
                min={0}
                name="modelYear"
                {...formik.getFieldProps("modelYear")}
              />
              {formik.errors.modelYear && formik.touched.modelYear ? (
                <div className={styles.error}>{formik.errors.modelYear}</div>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicQuantity">
              <Form.Label>Enter Quantity</Form.Label>

              <Form.Control
                className={`input ${styles.formControl}`}
                type="number"
                min={0}
                name="quantity"
                {...formik.getFieldProps("quantity")}
              />
              {formik.errors.quantity && formik.touched.quantity ? (
                <div className={styles.error}>{formik.errors.quantity}</div>
              ) : null}
            </Form.Group>

            <Form.Group>
              <Form.Label>Select Category</Form.Label>

              <Form.Select
                className={`input ${styles.formControl}`}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                {categoriesArray?.map((category, index) => (
                  <optgroup
                    className={`input ${styles.formControl}`}
                    key={index}
                  >
                    <option value={category._id}>
                      {category.categoryName}
                    </option>
                  </optgroup>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group
              controlId="formFile"
              className={`input ${styles.formControl}`}
            >
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </Form.Group>
            <div className="w-100 d-flex justify-content-center">
              <Button
                className={`${styles.btnWarningg}`}
                variant="primary"
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
              >
                Create
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

export default CreateProduct;
