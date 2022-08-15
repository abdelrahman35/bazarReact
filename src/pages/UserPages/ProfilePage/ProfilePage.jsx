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
function ProfilePage() {
  const [renderedData, setRenderedData] = useState("accountDetails");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading: userLoading, error: userError, userInfo } = userLogin;
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
  const [pageNum, setPageNum] = useState(1);

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
  }, [userInfo, navigate, pageNum]);
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
                  <i class="fa-solid fa-location-dot"></i>{" "}
                  <p className="d-inline ms-1">Address Book</p>
                </div>

                <div
                  onClick={() => {
                    setRenderedData("savedItem");
                  }}
                  className={`${styles["card-title"]}  fs-5 ${styles.title}`}
                >
                  <i className="fa-regular fa-heart"></i>
                  <p className="d-inline ms-2">Saved Item</p>
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
          <div className="col-lg-8 mt-5">
            {renderedData === "accountDetails" ? (
              <div className={`card shadow w-100 ${styles.rightCard}`}>
                <div className="card-body">
                  <h5 className="">Account Overview</h5>
                  <hr className={`${styles.hr}`} />
                  <div className="d-flex justify-content-between mx-5 align-items-center mt-4">
                    <h6 className="card-subtitle mb-3 text-muted fs-5">
                      Hello {userInfo.firstName + " " + userInfo.lastName}
                    </h6>
                    <h6 className="card-subtitle mb-3 text-muted fs-5">
                      email : {userInfo.email}{" "}
                    </h6>
                  </div>
                  <div className="d-flex justify-content-between mx-5 align-items-center mt-4 mb-4">
                    <h6 className="card-subtitle mb-3 text-muted fs-5">
                      Number of Saved Addresses : {userInfo.address.length}{" "}
                    </h6>
                    <h6 className="card-subtitle mb-3 text-muted fs-5">
                      Number of Orders : {userInfo.address.length}{" "}
                    </h6>
                  </div>

                  <Link
                    className={`${styles.btnWarningg} ${styles.changePassword} d-flex justify-content-between px-2 mx-4  align-items-center mt-4 mb-4`}
                    to="/changePassword"
                  >
                    Change Password
                  </Link>
                  <Link
                    className={`${styles.btnWarningg} ${styles.changePassword} d-flex justify-content-between px-2 mx-4  align-items-center mt-4 mb-4`}
                    to="/"
                  >
                    Edit Your Profile
                  </Link>
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
            ) : renderedData === "savedItem" ? (
              <div className={`card shadow w-100 ${styles.rightCard}`}>
                <div className="card-body">
                  <h5>Saved Item</h5>
                  <hr className={`${styles.hr}`} />
                  {/* <div className="d-flex flex-column gap-3 w-100">
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
                  </div> */}
                </div>
              </div>
            ) : renderedData === "AddressBook" ? (
              <div className={`card shadow w-100 ${styles.rightCard}`}>
                <div className="card-body">
                  <h5>Address Book</h5>
                  <hr className={`${styles.hr}`} />
                  {/* <div className="d-flex flex-column gap-3 w-100">
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
                  </div> */}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default ProfilePage;
