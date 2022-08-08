import React, { useState, useEffect } from "react";
import { ProductCard } from "../../../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../../store/actions/productActions";
import { Link } from "react-router-dom";
import Loading from "../../../../components/Loading/Loading";
import styles from "./AdminProducts.module.css";
import axiosInstance from "../../../../network/axiosInstance";

function AdminProducts() {
  const dispatch = useDispatch();
  const {
    loading: userLoading,
    error: userError,
    userInfo,
  } = useSelector((state) => state.userLogin);
  const {
    loading: productsLoading,
    error: productsError,
    products,
  } = useSelector((state) => state.allProducts);
  const prodcutsArray = products?.products;
  const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    dispatch(getAllProducts(pageNum));
  }, [dispatch, pageNum]);
  const nextPage = () => {
    let pageNumber;
    pageNumber = pageNum;
    if (pageNum < 522) {
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

  const handleDelete = async (productId) => {
    let { data } = await axiosInstance({
      url: `/product`,
      method: "delete",
      data: { productId },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${userInfo?.token}`,
      },
    });
  };
  return (
    <div className="container mt-5">
      {productsLoading ? (
        <div className="d-flex justify-content-center align-self-center mt-5 mb-5">
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
                  <th scope="col">#</th>
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
                      <Link to="/">
                        <button className="btn">Edit </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          // console.log(product._id);
                          handleDelete(product?._id);
                        }}
                        className="btn"
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
