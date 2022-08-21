import React, { useState, useEffect } from "react";
import { getAllCategories } from "../../../../store/actions/categoriesActions";
import { useSelector, useDispatch } from "react-redux";
import { updateProductImage } from "../../../../store/actions/productActions";
import Loading from "../../../../components/Loading/Loading";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import styles from "./UpdateProductImage.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function UpdateProductImage() {
  // declrations
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  // user info to specify if he is admin or not
  const {
    loading: userLoading,
    error: userError,
    userInfo,
  } = useSelector((state) => state.userLogin);

  const { product, statusCode } = useSelector(
    (state) => state.updateProductImage
  );
  const [image, setImage] = useState();
  // products state from store
  const {
    loading: productsLoading,
    error,
    products,
  } = useSelector((state) => state.allProducts);
  const prodcutsArray = products?.products;
  const productToEdit = prodcutsArray?.find(
    (product) => product._id === productId
  );
  const redirectArrayAfterSuccessUpdate = localStorage.getItem("PRI")
    ? JSON.parse(localStorage.getItem("PRI"))
    : [];
  useEffect(() => {
    dispatch(getAllCategories());
    if (
      redirectArrayAfterSuccessUpdate[0] &&
      redirectArrayAfterSuccessUpdate[1] === 200
    ) {
      localStorage.removeItem("PRI");
      navigate("/admin/products", { replace: true });
    } else if (error) {
      navigate("*", { replace: true, state: error });
    }
  }, [product, statusCode, error]);

  // function to send product details to create product action
  // check if product is returned in response
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductImage(productId, image));
  };

  return (
    <div>
      {userLoading ? (
        <Loading />
      ) : userInfo && userInfo?.isAdmin ? (
        <section className="container w-100 m-auto">
          <Form className=" m-auto mt-5" onSubmit={handleSubmit}>
            <div
              className={`d-flex flex-column justify-content-center align-items-center mb-5 ${styles.formHeading}`}
            >
              <i className="fa-solid fa-cart-plus mb-3"></i>
              <h2 className={`${styles.heading} text-capitalize text-center`}>
                Edit Product Image
              </h2>
            </div>
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
              >
                Edit
                <i className="fa-regular fa-arrow-right ms-2 fs-6"></i>
              </Button>
            </div>
          </Form>
        </section>
      ) : userError ? (
        <ErrorMessage />
      ) : productsLoading ? (
        <Loading />
      ) : null}
    </div>
  );
}

export default UpdateProductImage;
