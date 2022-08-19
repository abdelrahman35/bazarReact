import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProfilePage.module.css";
import { logout } from "../../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loading from "../../../components/Loading/Loading";
import { getUserOrders } from "../../../store/actions/ordersActions";
import OrderCard from "../../../components/OrderCard/OrderCard";
import AddressItem from "../../../components/AddressItem/AddressItem";
function ProfilePage() {
  const { loading: addressLoading, address } = useSelector(
    (state) => state.addAddress,
  );
  const addressArray = address?.address;
  // declarations
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // states
  const [pageNum, setPageNum] = useState(1);
  const [renderedData, setRenderedData] = useState("accountDetails");
  // store states
  const userLogin = useSelector((state) => state.userLogin);
  const { loading: userLoading, error: userError, userInfo } = userLogin;
  const addressArrayFromUserInfo = userInfo?.address;
  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };
  const {
    loading: userOrdersLoading,
    error: userOrdersError,
    userOrders,
  } = useSelector((state) => state.userOrders);
  const userOrdersArray = userOrders?.orders;
  const { orderIsCancelled } = useSelector((state) => state.cancelOrder);
  // pagination functions
  const nextPage = () => {
    let pageNumber;
    pageNumber = pageNum;
    if (pageNum < userOrders?.numberOfPages) {
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
  useEffect(() => {
    if (!userInfo) {
      navigate("*", { replace: true });
    } else if (userInfo) {
      dispatch(getUserOrders(pageNum));
    }
  }, [userInfo, navigate, pageNum, orderIsCancelled, addressArray]);

  return userLoading ? (
    <Loading />
  ) : userError ? (
    <ErrorMessage />
  ) : userInfo ? (
    <div className={`${styles.page}`}>
      <div className={`container`}>
        <div className={`row `}>
          <div className="col-lg-4 mt-5">
            <div className={`card shadow w-100 ${styles.leftCard}`}>
              <div className="card-body p-0">
                <div
                  className={`  fs-5 ${styles.title} ${styles["card-title"]}`}
                  onClick={() => {
                    setRenderedData("accountDetails");
                  }}
                >
                  <i className="fa-regular fa-user"></i>{" "}
                  <p className="d-inline ms-2">My Bazar Account</p>
                </div>
                <div
                  onClick={() => {
                    setRenderedData("orders");
                  }}
                  className={`${styles["card-title"]}  fs-5 ${styles.title}`}
                >
                  <i className="fa-regular fa-clipboard-list"></i>{" "}
                  <p className="d-inline ms-2">Orders</p>
                </div>

                <div
                  onClick={() => {
                    setRenderedData("AddressBook");
                  }}
                  className={`${styles["card-title"]}  fs-5 ${styles.title}`}
                >
                  <i className="fa-solid fa-address-book"></i>
                  <p className="d-inline ms-2">Address Book</p>
                </div>
                <hr className={`${styles.hr} m-0`} />

                <button
                  className={`${styles.btnWarningg}`}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mb-5">
            {renderedData === "accountDetails" ? (
              <div className={`card shadow w-100 ${styles.rightCard}`}>
                <div className="card-body">
                  <h5 className="text-capitalize">Account Overview</h5>
                  <hr className={`${styles.hr}`} />

                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <p className=" m-0 p-0 text-capitalize">
                        <h4 className="card-title m-0 p-0 fs-4">
                          Hello {userInfo.firstName + " " + userInfo.lastName}
                        </h4>{" "}
                      </p>
                      <Link to="/" className={styles.edit}>
                        <i className="fa-solid fa-pen"></i>
                      </Link>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-around gap-4 mt-1 text-capitalize">
                      <div className="card-text d-flex flex-column justify-content-between gap-2">
                        <h6 className="card-subtitle  text-muted fs-5 m-0 p-0 fs-6">
                          email : {userInfo.email}{" "}
                        </h6>
                        <h6 className="card-subtitle  text-muted fs-5 m-0 p-0 fs-6">
                          Number of Saved Addresses :{" "}
                          {addressArray?.length > 0
                            ? addressArray?.length
                            : addressArrayFromUserInfo?.length}
                        </h6>
                        <h6 className=" card-subtitle  text-muted fs-5 m-0 p-0 fs-6">
                          Number of Orders : {userOrdersArray?.length}{" "}
                        </h6>
                      </div>
                      <Link
                        className={`d-flex justify-content-between  align-items-center text-decoration-none  ${styles.nonedit} text-capitalize fs-5 `}
                        to="/changePassword"
                      >
                        Change Password
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : renderedData === "orders" ? (
              <div className={`card shadow w-100 ${styles.rightCard}`}>
                <div className="card-body">
                  <h5>Orders</h5>
                  <hr className={`${styles.hr}`} />{" "}
                  <div className="d-flex flex-column gap-3 w-100">
                    {userOrdersLoading ? (
                      <Loading />
                    ) : userOrders ? (
                      <>
                        {userOrdersArray?.map((order, index) => (
                          <OrderCard key={index} order={order} />
                        ))}
                      </>
                    ) : userOrdersError ? (
                      <ErrorMessage statusCode={userOrdersError} />
                    ) : null}
                  </div>
                  <div>
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
                            className="page-link text-dark bg-outline-dark "
                            onClick={() => {
                              prevPage();
                            }}
                          >
                            {pageNum}
                          </Link>
                        </li>

                        <li className="page-item">
                          <Link
                            className={`page-link text-dark bg-outline-dark ${
                              pageNum === userOrders?.numberOfPages
                                ? "disabled"
                                : ""
                            }`}
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
                </div>
              </div>
            ) : renderedData === "AddressBook" ? (
              <>
                {addressLoading ? (
                  <Loading />
                ) : (
                  <div className={`card shadow w-100 ${styles.rightCard}`}>
                    {addressArray?.length > 0 ? (
                      <div className="card-body">
                        <div className="container">
                          <div className="d-flex justify-content-end">
                            <Link
                              to={"/address/add"}
                              className={`btn ${styles.addBtn}`}
                            >
                              {" "}
                              <i className="fa-solid fa-plus"></i>
                            </Link>
                          </div>
                          <div className="row">
                            {addressArray?.map((address, index) => (
                              <div key={index} className="col-lg-6 ">
                                {" "}
                                <AddressItem
                                  index={index}
                                  addressToRender={address}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="card-body text-capitalize">
                        <div className="container">
                          <div className="d-flex justify-content-end">
                            <Link
                              to={"/address/add"}
                              className={`btn ${styles.addBtn}`}
                            >
                              {" "}
                              <i className="fa-solid fa-plus"></i>
                            </Link>
                          </div>
                          <div className="row">
                            {addressArrayFromUserInfo?.map((address, index) => (
                              <div key={address?._id} className="col-lg-6 mb-4">
                                {" "}
                                <AddressItem
                                  index={index}
                                  addressToRender={address}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default ProfilePage;
