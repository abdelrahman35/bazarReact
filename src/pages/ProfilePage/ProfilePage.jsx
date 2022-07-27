import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProfilePage.module.css";
import { logout } from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading: userLoading, error: userError, userInfo } = userLogin;
  const handleLogout = () => {
    dispatch(logout());
  };
  const test = () => {
    console.log("error");
  };
  return userLoading ? (
    <Loading></Loading>
  ) : userInfo ? (
    <div className={`${styles.page} `}>
      <div className="container">
        <div className="row ">
          <div className="col-lg-4 mt-5">
            <div className={`card w-100 ${styles.leftCard}`}>
              <div className="card-body">
                <div className="card-title m-lg-3 fs-5">
                  <i class="fa-regular fa-user"></i>{" "}
                  <p className="d-inline ms-2">My Bazar Account</p>
                </div>
                <div className="card-title m-lg-3 fs-5">
                  <i className="fa-regular fa-clipboard-list"></i>{" "}
                  <p className="d-inline ms-2">Orders</p>
                </div>
                <div className="card-title m-lg-3 fs-5">
                  <i className="fa-regular fa-heart"></i>{" "}
                  <p className="d-inline ms-1">Saved Items</p>
                </div>
                <div className="card-title m-lg-3 fs-5">
                  <i className="fa-regular fa-clock-rotate-left"></i>{" "}
                  <p className="d-inline ms-1">Recently Added</p>
                </div>

                <hr />
                <Link
                  to="#"
                  className="card-link link-dark text-decoration-none m-lg-3"
                >
                  <button onClick={handleLogout}> Logout</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5">
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="#" className="card-link">
                  Card link
                </Link>
                <Link to="#" className="card-link ">
                  Another link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    navigate("**", { replace: true })
  );
}

export default ProfilePage;
