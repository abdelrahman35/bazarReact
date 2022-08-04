import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Loading from "../../../../components/Loading/Loading";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import styles from "./ListCategories.module.css";

import {
  getAllCategories,
  deleteCategory,
} from "../../../../store/actions/categoriesActions";
import axiosInstance from "../../../../network/axiosInstance";
import axios from "axios";
function ListCateogries() {
  const dispatch = useDispatch();
  const {
    loading: categoriesLoading,
    error: categoriesError,
    categories,
  } = useSelector((state) => state.allCategories);
  const categoriesArray = categories?.categories;
  const { deletedCategory } = useSelector((state) => state.deleteCategoryState);
  useEffect(() => {
    dispatch(getAllCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deletedCategory]);

  const handleDeleteCategory = async (categoryId, categoryName) => {
    const respond = window.confirm(`Do you want to delete ${categoryName}`);
    if (respond) {
      dispatch(deleteCategory(categoryId));
    }
  };

  return (
    <div className="container mt-5">
      {categoriesLoading ? (
        <div
          className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
        >
          <Loading />
        </div>
      ) : categories ? (
        <div className={`${styles.page}`}>
          {" "}
          <div className="row">
            <div className="d-flex justify-content-end">
              <Link to="/admin/categories/create">
                <button className="btn btn-primary">Add New Category</button>
              </Link>{" "}
            </div>
          </div>
          <div className="row d-flex justify-content-evenly">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Number</th>
                  <th scope="col">Name</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {categoriesArray?.map((category, index) => (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{category.categoryName}</td>
                    <td>
                      <Button
                        variant="outline-danger"
                        onClick={() => {
                          handleDeleteCategory(
                            category._id,
                            category.categoryName,
                          );
                        }}
                      >
                        {" "}
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : categoriesError ? (
        <ErrorMessage statusCode={categoriesError} />
      ) : null}
    </div>
  );
}

export default ListCateogries;
