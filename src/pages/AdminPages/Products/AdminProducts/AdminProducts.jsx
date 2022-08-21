import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getAllProducts,
} from "../../../../store/actions/productActions";
import { Link } from "react-router-dom";
import Loading from "../../../../components/Loading/Loading";
import styles from "./AdminProducts.module.css";
import { useNavigate } from "react-router-dom";
import MyPagination from "../../../../components/Pagination";
function AdminProducts() {
  // declarations
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // functions for pagination
  const [currPage, setCurrPage] = useState(1);
  const [tagList, setTagList] = useState([]);

  const afterPageClicked = (page_number) => {
    setCurrPage(page_number);
  };
  // user info state from store
  const { error: userError, userInfo } = useSelector(
    (state) => state.userLogin,
  );
  // products state from store
  const { loading: productsLoading, products } = useSelector(
    (state) => state.allProducts,
  );
  const prodcutsArray = products?.products;
  // state for deleted product from store
  const { isDeleted } = useSelector((state) => state.deletedProduct);
  // state for page number for pagination
  //
  useEffect(() => {
    if (userInfo && userInfo?.isAdmin) {
      dispatch(getAllProducts(currPage));
    } else {
      navigate("*", { replace: true, state: userError });
    }
  }, [dispatch, currPage, isDeleted]);

  // delete product function
  const handleDelete = (productId) => {
    const productToDelete = prodcutsArray?.find(
      (product) => product._id === productId,
    );
    const respond = window.confirm(
      `Do you want to delete ${productToDelete?.name}`,
    );
    if (respond) {
      dispatch(deleteProduct(productId));
    }
  };

  return (
    <div className="container mt-5">
      {productsLoading ? (
        <div
          className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
        >
          <Loading />
        </div>
      ) : products ? (
        <div className={`container-fluid w-100 m-auto ${styles.page}`}>
          <div className="row">
            <div className="d-flex justify-content-end">
              <Link to="/admin/products/create">
                <button className={`btn btn-primary ${styles.btnWarningg}`}>
                  Create Product
                </button>
              </Link>{" "}
            </div>
          </div>
          <div className="row">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Number</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {prodcutsArray?.map((product, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                      <Link to={`/admin/updateproduct/${product._id}`}>
                        <button className="btn btn-outline-success">
                          Edit{" "}
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          handleDelete(product?._id);
                        }}
                        className="btn btn-outline-danger"
                      >
                        Delete{" "}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <MyPagination
            totPages={products?.numberOfPages}
            currentPage={currPage}
            pageClicked={(ele) => {
              afterPageClicked(ele);
            }}
          >
            <ul>
              {tagList.map((ele, ind) => (
                <li key={ele + ind}>{ele}</li>
              ))}
            </ul>
          </MyPagination>
        </div>
      ) : null}
    </div>
  );
}

export default AdminProducts;
