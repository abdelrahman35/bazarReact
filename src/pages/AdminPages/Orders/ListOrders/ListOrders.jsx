import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeOrderStatus,
  listAllOrders,
} from "../../../../store/actions/ordersActions";
import Loading from "../../../../components/Loading/Loading";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import styles from "./ListOrders.module.css";
import MyPagination from "../../../../components/Pagination";
function ListOrders() {
  const [pageNum, setPageNum] = useState(1);

  const dispatch = useDispatch();
  const [currPage, setCurrPage] = useState(1);
  const [tagList, setTagList] = useState([]);

  const afterPageClicked = (page_number) => {
    setCurrPage(page_number);
  };

  const {
    loading: ordersLoading,
    error: ordersError,
    orders,
  } = useSelector((state) => state.allOrders);
  const ordersArray = orders?.orders;
  const { isChanged, statusCode } = useSelector(
    (state) => state.orderIsChanged
  );
  const redirectArrayAfterSuccessUpdate = localStorage.getItem("CO")
    ? JSON.parse(localStorage.getItem("CO"))
    : [];
  //   CO => change order
  useEffect(() => {
    dispatch(listAllOrders(currPage));
    if (
      redirectArrayAfterSuccessUpdate[0] &&
      redirectArrayAfterSuccessUpdate[1] === 200
    ) {
      dispatch(listAllOrders(currPage));
      localStorage.removeItem("CO");
    }
  }, [currPage, isChanged, statusCode]);

  return (
    <div className="container mt-5 text-capitalize">
      {ordersLoading ? (
        <div
          className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
        >
          <Loading />
        </div>
      ) : orders ? (
        <div className={`${styles.page}`}>
          <div className="row d-flex justify-content-evenly">
            <table className="table table-hover text-capitalize ">
              <thead>
                <tr>
                  <th scope="col">Number</th>
                  <th scope="col">id</th>
                  <th scope="col">user</th>
                  <th scope="col">total price</th>
                  <th scope="col">payment method</th>
                  <th scope="col">order status</th>
                  <th scope="col">details</th>
                  <th scope="col">update status</th>
                </tr>
              </thead>
              <tbody>
                {ordersArray?.map((order, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <th scope="row">{order._id}</th>
                    <td>
                      {order?.user?.firstName + " " + order?.user?.lastName}
                    </td>
                    <td>{order.totalPrice}</td>
                    <td>{order.paymentMethod}</td>
                    <td>{order.status}</td>
                    <td>
                      <Link to={`/admin/order/${order._id}`}>
                        <button className="btn btn-outline-success text-capitalize">
                          details
                        </button>
                      </Link>
                    </td>
                    <td>
                      {order.status === "delivered" ||
                      order.status === "cancelled" ||
                      order.status === "rejected" ? (
                        order.status
                      ) : (
                        <select
                          onChange={(e) => {
                            dispatch(
                              changeOrderStatus(order._id, e.target.value)
                            );
                          }}
                        >
                          <optgroup label="select status">
                            <option value="accepted">accepted</option>
                            <option value="rejected">rejected</option>
                            <option value="shipped">shipped</option>
                            <option value="delivered">delivered</option>
                            <option value="cancelled">cancelled</option>
                          </optgroup>
                        </select>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <MyPagination
              totPages={orders?.numberOfPages}
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
        </div>
      ) : ordersError ? (
        <ErrorMessage statusCode={ordersError} />
      ) : null}
    </div>
  );
}

export default ListOrders;
