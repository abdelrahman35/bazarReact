import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAllOrders } from "../../../../store/actions/ordersActions";
import Loading from "../../../../components/Loading/Loading";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import styles from "./ListOrders.module.css";
function ListOrders() {
  const dispatch = useDispatch();
  const {
    loading: ordersLoading,
    error: ordersError,
    orders,
  } = useSelector((state) => state.allOrders);
  const ordersArray = orders?.orders;
  useEffect(() => {
    dispatch(listAllOrders());
  }, []);

  console.log(orders);
  return (
    <div className="container mt-5">
      {ordersLoading ? (
        <div
          className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
        >
          <Loading />
        </div>
      ) : orders ? (
        <div className={`${styles.page}`}>
          {" "}
          <div className="row d-flex justify-content-evenly">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Number</th>
                  <th scope="col">user</th>
                  <th scope="col">created at</th>
                  <th scope="col">total price</th>
                  <th scope="col">payment method</th>
                  <th scope="col">order status</th>
                  <th scope="col">details</th>
                </tr>
              </thead>
              <tbody>
                {ordersArray?.map((order, index) => (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{order.user.firstName + " " + order.user.lastName}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{order.totalPrice}</td>
                    <td>{order.paymentMethod}</td>
                    <td>{order.status}</td>
                    <td>
                      <Link to={`/admin/order/${order._id}`}>
                        <button className="btn btn-outline-success">
                          details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : ordersError ? (
        <ErrorMessage statusCode={ordersError} />
      ) : null}
    </div>
  );
}

export default ListOrders;
