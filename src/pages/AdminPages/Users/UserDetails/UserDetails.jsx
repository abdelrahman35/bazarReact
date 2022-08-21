import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../../components/Loading/Loading";
import MyPagination from "../../../../components/Pagination";
import { getUserDetails } from "../../../../store/actions/userActions";
import styles from "./UserDetails.module.css";
function UserDetails() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { loading, error, user } = useSelector((state) => state.userDetails);
  const userData = user?.user;
  const userOrders = user?.userOrders;
  // pagination
  const [currPage, setCurrPage] = useState(1);
  const [tagList, setTagList] = useState([]);

  const afterPageClicked = (page_number) => {
    setCurrPage(page_number);
  };
  useEffect(() => {
    dispatch(getUserDetails(userId, currPage));
  }, [userId, currPage]);

  return (
    <>
      {loading ? (
        <div
          className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
        >
          <Loading />
        </div>
      ) : user ? (
        <div className="container-fluid">
          <div className="row  w-90 m-auto">
            <div className="card">
              <div className="card-header">
                <h3 className="row m-2">user info</h3>
              </div>
              <div className="card-body">
                <p>
                  Name:{" "}
                  <span>{userData?.firstName + " " + userData?.lastName}</span>
                </p>
                <p>
                  Email: <span>{userData?.email}</span>
                </p>
                <p>
                  creation date: <span>{userData?.createdAt}</span>
                </p>
                <p>
                  role: <span>{userData?.isAdmin ? "admin" : "customer"}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row w-95 m-auto text-center">
            <table className="table table-striped">
              <thead>
                <tr>
                  {/* 
                  createdAt: "2022-08-06T17:47:02.712Z"
isDelivered: false
isPaid: true
paidAt: "2022-08-06T17:47:02.000Z"
paymentMethod: "card"
products: (2) [{…}, {…}]
shippingAddress: {street: 'mohamed beshir', city: 'Alexandria', country: 'Egypt', postalCode: '21164', phone: '012756422'}
shippingPrice: 0
status: "pending"
totalPrice: 999
updatedAt: "2022-08-06T17:47:02.712Z" */}
                  <th>#</th>
                  <th>create at</th>
                  <th>price</th>
                  <th>number of products</th>
                  <th>shipping address</th>
                  <th>phone number</th>
                  <th>status</th>
                  <th>payment method</th>
                  <th>payment status</th>
                  <th>delievery status</th>
                  <th>shipping price</th>
                </tr>
              </thead>
              <tbody>
                {userOrders?.map((order, index) => (
                  <tr key={order._id}>
                    <td>{index + 1}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{order.totalPrice}</td>
                    <td>{order?.products?.length}</td>
                    <td>
                      {order.shippingAddress.street +
                        ", " +
                        order.shippingAddress.city +
                        ", " +
                        order.shippingAddress.country}
                    </td>
                    <td>{order.shippingAddress.mobile}</td>
                    <td>{order.status}</td>
                    <td>{order.paymentMethod}</td>
                    <td>{order.isPaid ? "yes" : "no"}</td>
                    <td>{order.isDelieverd ? "yes" : "no"}</td>
                    <td>{order.shippingPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="row">
            <MyPagination
              totPages={user?.numberOfPages}
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
      ) : null}
    </>
  );
}

export default UserDetails;
