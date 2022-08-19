import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../../components/Loading/Loading";
import { useNavigate } from "react-router";
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
  console.log(users);
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
  }, [userInfo, userInfoError]);

  return (
    <div className="mt-5">
      {loading ? (
        <Loading />
      ) : users ? (
        <div className="container-fluid">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>email</th>
                <th>admin</th>
                <th>created at</th>
              </tr>
            </thead>
            <tbody>
              {usersArray?.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    <Link
                      to={`/admin/user/details/${user._id}`}
                      className="text-dark text-decoration-none"
                    >
                      {user.firstName + " " + user.lastName}
                    </Link>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.isAdmin ? "yes" : "no"}</td>
                  <td>{user.createdAt}</td>
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
