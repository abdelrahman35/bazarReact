import React, { useEffect, useState } from "react";
import { createCategory } from "../../../../store/actions/categoriesActions";
import Loading from "../../../../components/Loading/Loading";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import styles from "./CreateCategory.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function CreateCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newCategory, setNewCategory] = useState("");
  const [validation, setValidation] = useState("");

  const {
    loading: userLoading,
    error: userError,
    userInfo,
  } = useSelector((state) => state.userLogin);

  const { category } = useSelector((state) => state.createCategory);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCategory(newCategory));
  };
  useEffect(() => {
    if (category?.message === "category added") {
      navigate("/admin/categories", { replace: true });
    }
  }, [category, navigate]);

  return (
    <div>
      {userLoading ? (
        <Loading />
      ) : userInfo && userInfo?.isAdmin ? (
        <section className="container w-100 m-auto mb-5">
          <Form className=" m-auto mt-5" onSubmit={handleSubmit}>
            <div
              className={`d-flex flex-column justify-content-center align-items-center mb-5 ${styles.formHeading}`}
            >
              <i className="fa-solid fa-cart-plus mb-3"></i>
              <h2 className={`${styles.heading} text-capitalize text-center`}>
                Create New Category
              </h2>
            </div>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="category">Enter Category Name</Form.Label>

              <Form.Control
                id="category"
                className={`input ${styles.formControl}`}
                type="text"
                name="category"
                onChange={(e) => {
                  setNewCategory(e.target.value);
                  if (newCategory.length <= 2) {
                    setValidation(
                      "category name must be more than three characters"
                    );
                  } else if (newCategory.length > 2) {
                    setValidation("");
                  }
                }}
              />
            </Form.Group>
            <div id="passwordHelp" className="text-danger mt-2">
              {validation}
            </div>
            <div className="w-100 d-flex justify-content-center">
              <Button
                className={`${styles.btnWarningg}`}
                variant="primary"
                type="submit"
              >
                Add Category
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

export default CreateCategory;
