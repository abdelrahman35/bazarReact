import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAddress } from "../../store/actions/userActions";
import styles from "./AddressBook.module.css";
function AddressBook({ address, index }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li
            className={`list-group-item d-flex justify-content-between${styles.item}`}
          >
            <span className="col-lg-10">
              address: <span>#{index + 1}</span>
            </span>
            <span className="col-lg-2">
              <button
                onClick={() => {
                  dispatch(deleteAddress(address?._id));
                }}
                className="btn fa fa-trash"
              ></button>
            </span>
          </li>
          <li className={`list-group-item ${styles.item}`}>
            street name: <span>{address.street}</span>
          </li>
          <li className={`list-group-item ${styles.item}`}>
            city: <span>{address.city}</span>
          </li>{" "}
          <li className={`list-group-item ${styles.item}`}>
            country: <span>{address.country}</span>
          </li>
          <li className={`list-group-item ${styles.item}`}>
            phone number: <span>+2{address.mobile}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AddressBook;
