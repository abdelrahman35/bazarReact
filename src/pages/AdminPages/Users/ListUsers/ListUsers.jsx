import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../../components/Loading/Loading";
import { useNavigate } from "react-router";
import styles from "./ListUsers.module.css";
import { getAllUsers } from "../../../../store/actions/userActions";
import MyPagination from "../../../../components/Pagination";
import { Link } from "react-router-dom";
function ListUsers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error: userInfoError, userInfo } = useSelector(
    (state) => state.userLogin
  );
  const { loading, error, users } = useSelector((state) => state.allUsers);
  const usersArray = users?.users;
  // pagination
  const [currPage, setCurrPage] = useState(1);
  const [tagList, setTagList] = useState([]);

  const afterPageClicked = (page_number) => {
    setCurrPage(page_number);
  };
  // useEffect
  useEffect(() => {
    dispatch(getAllUsers(currPage));
  }, [currPage]);
  useEffect(() => {
    if (!userInfo && userInfoError) {
      navigate("*", { replace: true, state: userInfoError });
    } else if (error) {
      navigate("*", { replace: true, state: error });
    }
  }, [userInfo, userInfoError, error]);

  return (
    <div className="mt-5 text-capitalize">
      {loading ? (
        <div
          className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
        >
          <Loading />
        </div>
      ) : users ? (
        <div className="container-fluid">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>email</th>
                <th>admin</th>
                <th>created at</th>
                <th>details</th>
              </tr>
            </thead>
            <tbody>
              {usersArray?.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.firstName + " " + user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.isAdmin ? "yes" : "no"}</td>
                  <td>{user.createdAt}</td>
                  <td>
                    <Link
                      to={`/admin/user/details/${user._id}`}
                      className={`text-decoration-none btn btn-outline-success ${styles.details} `}
                    >
                      details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <MyPagination
              totPages={users?.numberOfPages}
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
    </div>
  );
}

export default ListUsers;
