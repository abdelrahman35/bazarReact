import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UpdateInfo.module.css";
import { updateUserInfo } from "../../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
const UpdateInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [afterUpdateMessage, setAfterUpdateMessage] = useState(null);
  const { error: userError, userInfo } = useSelector(
    (state) => state.userLogin
  );

  const {
    loading: updateLoading,
    error: updateError,
    updated,
    statusCode,
  } = useSelector((state) => state.userUpdated);
  const userOldEmail = userInfo?.email;
  const userOldFirstName = userInfo?.firstName;
  const userOldLastName = userInfo?.lastName;
  const [userData, setUserData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInfo(userData));
  };
  const redirectArrayAfterSuccessUpdate = localStorage.getItem("US")
    ? JSON.parse(localStorage.getItem("US"))
    : [];
  //   US => update success
  useEffect(() => {
    if (!userInfo) {
      navigate("*", { replace: true, state: userError });
    } else if (updateError) {
      navigate("*", { replace: true, state: updateError });
    } else if (
      redirectArrayAfterSuccessUpdate[0] &&
      redirectArrayAfterSuccessUpdate[1] === 200
    ) {
      localStorage.removeItem("US");
      navigate("/", { replace: true, state: updateError });
      setTimeout(() => {
        dispatch({ type: "USER_LOGOUT" });
      }, 0);
    }
  }, [updated, statusCode, updateError, userInfo, userError]);

  return (
    <>
      {updateLoading ? (
        <Loading />
      ) : (
        <div
          className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
        >
          <section className="container w-40 m-auto">
            <Form className=" m-auto mt-5 mb-5" onSubmit={handleSubmit}>
              <div
                className={`d-flex flex-column justify-content-center align-items-center mb-5 ${styles.formHeading}`}
              >
                <i className="fa-solid fa-circle-right"></i>
                <h2 className={` text-capitalize text-center`}>update info</h2>
                <p className="text-capitalize text-center">
                  change user name or email
                </p>
              </div>

              <Form.Group
                className={`mb-3 position-relative ${styles.allInput}`}
                controlId="formBasicfirstName"
              >
                <Form.Control
                  className={`input ${styles.formControl}`}
                  type="text"
                  placeholder="first name:"
                  name="firstName"
                  onChange={(e) => {
                    e.target.value?.length > 0
                      ? setUserData({
                          ...userData,
                          firstName: e.target.value,
                        })
                      : setUserData({
                          ...userData,
                          firstName: userOldFirstName,
                        });
                  }}
                />
                <i className="fa-solid fa-user"></i>
              </Form.Group>
              <Form.Group
                className={`mb-3 position-relative ${styles.allInput}`}
                controlId="formBasiclastName"
              >
                <Form.Control
                  className={`input ${styles.formControl}`}
                  type="text"
                  placeholder="last name:"
                  name="lastName"
                  onChange={(e) => {
                    e.target.value?.length > 0
                      ? setUserData({
                          ...userData,
                          lastName: e.target.value,
                        })
                      : setUserData({
                          ...userData,
                          lastName: userOldLastName,
                        });
                  }}
                />
                <i className="fa-solid fa-user"></i>
              </Form.Group>
              <Form.Group
                className={`mb-3 position-relative ${styles.allInput}`}
                controlId="formBasicemail"
              >
                <Form.Control
                  className={`input ${styles.formControl}`}
                  type="email"
                  placeholder="email:"
                  name="email"
                  onChange={(e) => {
                    e.target.value?.length > 0
                      ? setUserData({
                          ...userData,
                          oldEmail: userOldEmail,
                          newEmail: e.target.value,
                        })
                      : setUserData({
                          ...userData,
                          oldEmail: userOldEmail,
                          newEmail: userOldEmail,
                        });
                  }}
                />
                <i className="fa-solid fa-envelope"></i>
              </Form.Group>

              <div className="d-flex justify-content-center align-content-center">
                <button className={`${styles.btnWarningg}`} type="submit">
                  update
                </button>
              </div>
            </Form>
          </section>{" "}
        </div>
      )}
    </>
  );
};

export default UpdateInfo;
