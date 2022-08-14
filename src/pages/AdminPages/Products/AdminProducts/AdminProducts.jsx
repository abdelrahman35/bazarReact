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
function AdminProducts() {
  // declarations
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // user info state from store
  const { error: userError, userInfo } = useSelector(
    (state) => state.userLogin
  );
  // products state from store
  const { loading: productsLoading, products } = useSelector(
    (state) => state.allProducts
  );
  const prodcutsArray = products?.products;
  // state for deleted product from store
  const { isDeleted } = useSelector((state) => state.deletedProduct);
  // state for page number for pagination
  const [pageNum, setPageNum] = useState(1);
  //
  useEffect(() => {
    if (userInfo && userInfo?.isAdmin) {
      dispatch(getAllProducts(pageNum));
    } else {
      navigate("*", { replace: true, state: userError });
    }
  }, [dispatch, pageNum, isDeleted]);

  // functions for pagination
  const nextPage = () => {
    let pageNumber;
    pageNumber = pageNum;
    if (pageNum < products?.numberOfPages) {
      pageNumber++;
    }
    setPageNum(pageNumber);
  };
  const prevPage = () => {
    let pageNumber;
    pageNumber = pageNum;
    if (pageNum > 1) {
      pageNumber--;
    }
    setPageNum(pageNumber);
  };
  // delete product function
  const handleDelete = (productId) => {
    const productToDelete = prodcutsArray?.find(
      (product) => product._id === productId
    );
    const respond = window.confirm(
      `Do you want to delete ${productToDelete?.name}`
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
        <div className={`${styles.page}`}>
          {" "}
          <div className="row">
            <div className="d-flex justify-content-end">
              <Link to="/admin/products/create">
                <button className="btn btn-primary">Create Product</button>
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
                    <th scope="row">{index}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                      <Link to={`/admin/updateproduct/${product._id}`}>
                        <button className="btn">Edit </button>
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
          <nav aria-label="Page navigation example">
            <ul className="pagination ">
              <li className="page-item  ">
                <Link
                  to="#"
                  className="page-link text-dark bg-outline-dark"
                  onClick={() => {
                    prevPage();
                  }}
                >
                  Previous
                </Link>
              </li>
              <li className="page-item">
                <Link
                  to="#"
                  className="page-link text-dark bg-outline-dark"
                  onClick={() => {
                    prevPage();
                  }}
                >
                  {pageNum}
                </Link>
              </li>

              <li className="page-item">
                <Link
                  className="page-link text-dark bg-outline-dark"
                  to="#"
                  onClick={() => {
                    nextPage();
                  }}
                >
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

export default AdminProducts;
