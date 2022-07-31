import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProfilePage.module.css";
import { logout } from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loading/Loading";
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
  useEffect(() => {
    if (!userInfo) {
      navigate("*", { replace: true });
    }
  }, [userInfo, navigate]);

  return userLoading ? (
    <Loading />
  ) : userError ? (
    <ErrorMessage />
  ) : userInfo ? (
    <div className={`${styles.page}`}>
      <div className={`container `}>
        <div className={`row `}>
          <div className="col-lg-4 mt-5">
            <div className={`card shadow w-100 ${styles.leftCard}`}>
              <div className="card-body">
                <div
                  className={`card-title m-lg-3 fs-5 ${styles.title}`}
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
                  className={`card-title m-lg-3 fs-5 ${styles.title}`}
                >
                  <i className="fa-regular fa-clipboard-list"></i>{" "}
                  <p className="d-inline ms-2">Orders</p>
                </div>
                <div
                  onClick={() => {
                    setRenderedData("savedItems");
                  }}
                  className={`card-title m-lg-3 fs-5 ${styles.title}`}
                >
                  <i className="fa-regular fa-heart"></i>{" "}
                  <p className="d-inline ms-1">Saved Items</p>
                </div>
                <hr className={`${styles.hr}`} />
                <Link to="/" className="text-decoration-none">
                  <p className="link-dark ms-1  m-lg-3 fs-6 ">Address Book</p>
                </Link>
                <Link to="/changePassword" className="text-decoration-none">
                  <p className="link-dark ms-1  m-lg-3 fs-6 ">
                    Change Password
                  </p>
                </Link>
                <hr className={`${styles.hr}`} />

                <button
                  className={`${styles.btnWarningg}`}
                  onClick={handleLogout}
                >
                  {" "}
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5">
            {renderedData === "accountDetails" ? (
              <div className={`card shadow w-100 ${styles.rightCard}`}>
                <div className="card-body">
                  <h5 className="card-title">Account Overview</h5>
                  <hr className={`${styles.hr}`} />{" "}
                  <h6 className="card-subtitle mb-3 text-muted">
                    Hello {userInfo.firstName + " " + userInfo.lastName}
                  </h6>
                  <h6 className="card-subtitle mb-3 text-muted">
                    email : {userInfo.email}{" "}
                  </h6>
                  <h6 className="card-subtitle mb-3 text-muted">
                    Number of Saved Addresses : {userInfo.address.length}{" "}
                  </h6>
                  <h6 className="card-subtitle mb-3 text-muted">
                    Number of Orders : {userInfo.address.length}{" "}
                  </h6>
                </div>
              </div>
            ) : renderedData === "orders" ? (
              <div className={`card shadow w-100 ${styles.rightCard}`}>
                <div className="card-body">
                  <h5 className="card-title">Orders</h5>
                  <hr className={`${styles.hr}`} />{" "}
                </div>
              </div>
            ) : renderedData === "savedItems" ? (
              <div className={`card shadow w-100 ${styles.rightCard}`}>
                <div className="card-body">
                  <h5 className="card-title">Saved Items</h5>
                  <hr className={`${styles.hr}`} />{" "}
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
