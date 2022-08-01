import React, { useState, useEffect } from "react";
import { getAllCategories } from "../../../store/actions/categoriesActions";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../../../store/actions/productActions";
import Loading from "../../../components/Loading/Loading";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import styles from "./CreateProudct.module.css";
function CreateProduct() {
  // declrations
  const dispatch = useDispatch();
  // user info to specify if he is admin or not
  const {
    loading: userLoading,
    error: userError,
    userInfo,
  } = useSelector((state) => state.userLogin);
  // setting form values state
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    modelYear: 0,
  });
  // state of category
  const [category, setCategory] = useState("");
  // array of categories from store
  const { categories: allCategories } = useSelector(
    (state) => state.allCategories
  );
  const categoriesArray = allCategories?.categories;
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  // state of image
  const [image, setImage] = useState(null);

  // setting the values of the inputs to product details
  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  // function to send product details to create product action
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createProduct(formValues, image, category));
  };

  return (
    <div>
      {userLoading ? (
        <Loading />
      ) : userInfo && userInfo?.isAdmin ? (
        <div className="container">
          <h2>Create Product</h2>
          <form onSubmit={handleSubmit}>
            <input
              className={`input ${styles.formControl}`}
              name="name"
              type="text"
              placeholder="name"
              onChange={handleChange}
            />
            <textarea
              className={`input ${styles.formControl}`}
              placeholder="Description"
              name="description"
              onChange={handleChange}
            ></textarea>

            <input
              className={`input ${styles.formControl}`}
              name="price"
              type="number"
              placeholder="price"
              onChange={handleChange}
            />
            <input
              className={`input ${styles.formControl}`}
              name="quantity"
              type="number"
              placeholder="quantity"
              onChange={handleChange}
            />
            <input
              className={`input ${styles.formControl}`}
              name="modelYear"
              type="number"
              placeholder="modelYear"
              onChange={handleChange}
            />
            <select
              className={`input ${styles.formControl}`}
              aria-label=".form-select-lg example"
              placeholder="select category"
              name="category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {categoriesArray?.map((category, index) => (
                <option value={category._id} key={index}>
                  {" "}
                  {category.categoryName}
                </option>
              ))}
            </select>

            <input
              className={`input ${styles.formControl}`}
              name="image"
              type="file"
              placeholder="image"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            <input
              type="submit"
              value="Submit"
              className={`${styles.btnWarningg}`}
            />
          </form>
        </div>
      ) : userError ? (
        <ErrorMessage />
      ) : null}
    </div>
  );
}

export default CreateProduct;
