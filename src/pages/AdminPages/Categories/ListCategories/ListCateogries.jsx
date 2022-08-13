import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Loading from "../../../../components/Loading/Loading";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import styles from "./ListCategories.module.css";
import { useNavigate } from "react-router-dom";
import {
  getAllCategories,
  deleteCategory,
  updateCategory,
} from "../../../../store/actions/categoriesActions";
function ListCateogries() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error: userError, userInfo } = useSelector(
    (state) => state.userLogin
  );

  const {
    loading: categoriesLoading,
    error: categoriesError,
    categories,
  } = useSelector((state) => state.allCategories);
  const categoriesArray = categories?.categories;
  const { deletedCategory } = useSelector((state) => state.deleteCategoryState);
  const { isUpdated } = useSelector((state) => state.updateCategory);
  useEffect(() => {
    if (userInfo?.isAdmin) {
      dispatch(getAllCategories());
    } else {
      navigate("*", { replace: true, state: userError });
    }
    if (categoriesError) {
      navigate("*", { replace: true, state: categoriesError });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deletedCategory, isUpdated]);

  // function to delete cateogory
  const handleDeleteCategory = (categoryId, categoryName) => {
    const respond = window.confirm(`Do you want to delete ${categoryName}`);
    if (respond) {
      dispatch(deleteCategory(categoryId));
    }
  };
  // function to update category :
  const handleUpdateCategory = (categoryId, categoryName) => {
    const newCategoryName = window.prompt(
      `please enter new name of category: ${categoryName}`
    );
    if (newCategoryName) {
      dispatch(updateCategory(categoryId, newCategoryName));
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
      ) : categories && userInfo?.isAdmin ? (
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
                  <th scope="col">Update</th>
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
                            category.categoryName
                          );
                        }}
                      >
                        {" "}
                        Delete
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="outline-primary"
                        onClick={() => {
                          handleUpdateCategory(
                            category._id,
                            category.categoryName
                          );
                        }}
                      >
                        {" "}
                        Update
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
