import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../../store/actions/categoriesActions";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../../../network/axiosInstance";

function CreateProduct() {
  const { userInfo } = useSelector((state) => state.userLogin);
  const token = userInfo?.token;
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    modelYear: 0,
  });
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const { categories: allCategories } = useSelector(
    (state) => state.allCategories
  );
  const categoriesArray = allCategories?.categories;
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productFormData = new FormData();
    productFormData.append("name", formValues.name);
    productFormData.append("category", category);
    productFormData.append("description", formValues.description);
    productFormData.append("price", formValues.price);
    productFormData.append("quantity", formValues.quantity);
    productFormData.append("modelYear", formValues.modelYear);
    productFormData.append("image", image);
    console.log(image);
    console.log(formValues);

    try {
      const headers = {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
      };

      const response = await axiosInstance.post("/product", productFormData, {
        headers,
      });
      console.log(response, "respon");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="contianer">
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          name="name"
          type="text"
          placeholder="name"
          onChange={handleChange}
        />
        <textarea
          className="form-control"
          placeholder="Description"
          name="description"
          onChange={handleChange}
        ></textarea>

        <input
          className="form-control"
          name="price"
          type="number"
          placeholder="price"
          onChange={handleChange}
        />
        <input
          className="form-control"
          name="quantity"
          type="number"
          placeholder="quantity"
          onChange={handleChange}
        />
        <input
          className="form-control"
          name="modelYear"
          type="number"
          placeholder="modelYear"
          onChange={handleChange}
        />
        <select
          className="form-select form-select-lg mb-3"
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
          className="form-control"
          name="image"
          type="file"
          placeholder="image"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CreateProduct;
