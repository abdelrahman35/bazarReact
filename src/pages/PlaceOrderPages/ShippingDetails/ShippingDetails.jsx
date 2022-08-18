import React, { useEffect, useState } from "react";
import CheckoutBar from "../../../components/CheckoutBar/CheckoutBar";
import AddressItem from "../../../components/AddressItem/AddressItem";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import styles from "./ShippingDetails.module.css";
import { setShippingAddress } from "../../../store/actions/cartAction";
function ShippingDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading: addressLoading, address } = useSelector(
    (state) => state.addAddress
  );
  const addressArray = address?.address;
  const {
    loading: userLoading,
    error: userError,
    userInfo,
  } = useSelector((state) => state.userLogin);
  const addressArrayFromUserInfo = userInfo?.address;
  const [shipping, setShipping] = useState({});
  const [addressIsSelected, setAddressIsSelected] = useState(false);

  return (
    <>
      <CheckoutBar step1 />
      <div>
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
                        <>
                          <div className="form-check col-lg-6" key={index}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="shippingDetails"
                              htmlFor="flexRadioDefault1"
                              value={JSON.stringify(address)}
                              onChange={(e) => {
                                setShipping(JSON.parse(e.target.value));
                                setAddressIsSelected(true);
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              <ul className="list-group list-group-flush">
                                <li
                                  className={`list-group-item d-flex justify-content-between${styles.item}`}
                                >
                                  <span className="col-lg-10">
                                    address: <span>#{index + 1}</span>
                                  </span>
                                </li>
                                <li
                                  className={`list-group-item ${styles.item}`}
                                >
                                  street name: <span>{address.street}</span>
                                </li>
                                <li
                                  className={`list-group-item ${styles.item}`}
                                >
                                  city: <span>{address.city}</span>
                                </li>{" "}
                                <li
                                  className={`list-group-item ${styles.item}`}
                                >
                                  country: <span>{address.country}</span>
                                </li>
                                <li
                                  className={`list-group-item ${styles.item}`}
                                >
                                  phone number: <span>+2{address.mobile}</span>
                                </li>
                              </ul>
                            </label>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      {addressArrayFromUserInfo?.map((address, index) => (
                        <>
                          <div
                            className="form-check col-lg-6"
                            key={address._id}
                          >
                            <input
                              className="form-check-input"
                              type="radio"
                              name="shippingDetails"
                              htmlFor="shipping"
                              value={JSON.stringify(address)}
                              onChange={(e) => {
                                setShipping(JSON.parse(e.target.value));
                                setAddressIsSelected(true);
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="shipping"
                            >
                              <ul className="list-group list-group-flush">
                                <li
                                  className={`list-group-item d-flex justify-content-between${styles.item}`}
                                >
                                  <span className="col-lg-10">
                                    address: <span>#{index + 1}</span>
                                  </span>
                                </li>
                                <li
                                  className={`list-group-item ${styles.item}`}
                                >
                                  street name: <span>{address.street}</span>
                                </li>
                                <li
                                  className={`list-group-item ${styles.item}`}
                                >
                                  city: <span>{address.city}</span>
                                </li>{" "}
                                <li
                                  className={`list-group-item ${styles.item}`}
                                >
                                  country: <span>{address.country}</span>
                                </li>
                                <li
                                  className={`list-group-item ${styles.item}`}
                                >
                                  phone number: <span>+2{address.mobile}</span>
                                </li>
                              </ul>
                            </label>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div className="d-flex justify-content-end m-3">
                {addressIsSelected ? (
                  <button
                    className={`${styles.btnWarningg}`}
                    onClick={() => {
                      dispatch(setShippingAddress(shipping));
                      navigate("/paymentmethod", { replace: true });
                    }}
                  >
                    Next
                  </button>
                ) : null}
              </div>
            </div>
          )}
        </>
      </div>
    </>
  );
}

export default ShippingDetails;
