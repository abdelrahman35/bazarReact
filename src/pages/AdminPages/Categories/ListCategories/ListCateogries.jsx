import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Loading from "../../../../components/Loading/Loading";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import styles from "./ListCategories.module.css";
import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2/dist/sweetalert2.js";
// import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";

import {
  getAllCategories,
  deleteCategory,
  updateCategory,
} from "../../../../store/actions/categoriesActions";
function ListCateogries() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error: userError, userInfo } = useSelector(
    (state) => state.userLogin,
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
    // const respond = window.alert(`Do you want to delete ${categoryName}`);
    // if (respond) {
    //   dispatch(deleteCategory(categoryId));
    // }
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success",
            dispatch(deleteCategory(categoryId)),
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error",
          );
        }
      });
  };
  // function to update category :
  const handleUpdateCategory = (categoryId, categoryName) => {
    Swal.fire({
      title: `Please Enter New Name Of Category: ${categoryName}`,
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Update",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        dispatch(updateCategory(categoryId, login));
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "New Category Name : " + result.value,
        });
      }
    });
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
        <div className={`${styles.page} container-fluid w-90`}>
          {" "}
          <div className="row">
            <div className="d-flex justify-content-end">
              <Link to="/admin/categories/create">
                <button className={`  ${styles.btnWarningg}`}>
                  Add New Category
                </button>
              </Link>{" "}
            </div>
          </div>
          <div className="row d-flex justify-content-evenly">
            <table className="table table-hover mt-5 w-95">
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
                    <th scope="row">{index + 1}</th>
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
                        Delete
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="outline-success"
                        onClick={() => {
                          handleUpdateCategory(
                            category._id,
                            category.categoryName,
                          );
                        }}
                      >
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
