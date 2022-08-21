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
    (state) => state.addAddress,
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
      <section className={styles.section}>
        <CheckoutBar step1 />
        <div>
          <>
            {addressLoading ? (
              <div
                className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
              >
                <Loading />
              </div>
            ) : (
              <div
                className={`card shadow w-100 ${styles.rightCard} shadow-none border-0`}
              >
                {addressArray?.length > 0 ? (
                  <div className="card-body">
                    <div className="container">
                      <div className="d-flex justify-content-end ">
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
                            <div
                              className="form-check col-lg-6 d-flex align-items-start gap-4 mb-5 "
                              key={address._id}
                            >
                              <input
                                className="form-check-input mt-2"
                                type="radio"
                                name="shippingDetails"
                                id={index}
                                value={JSON.stringify(address)}
                                onChange={(e) => {
                                  setShipping(JSON.parse(e.target.value));
                                  setAddressIsSelected(true);
                                }}
                              />

                              <label
                                className="form-check-label w-100"
                                htmlFor={index}
                              >
                                <ul className="list-group list-group-flush d-flex flex-column justify-content-between gap-3 border border-2 p-4 rounded text-capitalize fs-6 fw-bold">
                                  <li
                                    className={`list-group-item d-flex justify-content-between${styles.item} p-0`}
                                  >
                                    <span className="col-lg-10 fw-bold">
                                      address: <span>#{index + 1}</span>
                                    </span>
                                  </li>
                                  <li
                                    className={`list-group-item ${styles.item} p-0`}
                                  >
                                    street name: <span>{address.street}</span>
                                  </li>
                                  <li
                                    className={`list-group-item ${styles.item} p-0`}
                                  >
                                    city: <span>{address.city}</span>
                                  </li>{" "}
                                  <li
                                    className={`list-group-item ${styles.item} p-0`}
                                  >
                                    country: <span>{address.country}</span>
                                  </li>
                                  <li
                                    className={`list-group-item ${styles.item} p-0`}
                                  >
                                    phone number:{" "}
                                    <span>+2{address.mobile}</span>
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
                          <>
                            <div
                              className="form-check col-lg-6 d-flex align-items-start gap-4 mb-5 "
                              key={address._id}
                            >
                              <input
                                className="form-check-input mt-2"
                                type="radio"
                                name="shippingDetails"
                                id={index}
                                value={JSON.stringify(address)}
                                onChange={(e) => {
                                  setShipping(JSON.parse(e.target.value));
                                  setAddressIsSelected(true);
                                }}
                              />

                              <label
                                className="form-check-label w-100"
                                htmlFor={index}
                              >
                                <ul className="list-group list-group-flush d-flex flex-column justify-content-between gap-3 border border-2 p-4 rounded text-capitalize fs-6 fw-bold">
                                  <li
                                    className={`list-group-item d-flex justify-content-between${styles.item} p-0`}
                                  >
                                    <span className="col-lg-10 fw-bold">
                                      address: <span>#{index + 1}</span>
                                    </span>
                                  </li>
                                  <li
                                    className={`list-group-item ${styles.item} p-0`}
                                  >
                                    street name: <span>{address.street}</span>
                                  </li>
                                  <li
                                    className={`list-group-item ${styles.item} p-0`}
                                  >
                                    city: <span>{address.city}</span>
                                  </li>{" "}
                                  <li
                                    className={`list-group-item ${styles.item} p-0`}
                                  >
                                    country: <span>{address.country}</span>
                                  </li>
                                  <li
                                    className={`list-group-item ${styles.item} p-0`}
                                  >
                                    phone number:{" "}
                                    <span>+2{address.mobile}</span>
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
                <div className="d-flex justify-content-center m-3">
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
      </section>
    </>
  );
}

export default ShippingDetails;
