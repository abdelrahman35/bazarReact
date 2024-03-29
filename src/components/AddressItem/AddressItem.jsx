import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAddress } from "../../store/actions/userActions";
import styles from "./AddressItem.module.css";
function AddressItem({ addressToRender, index }) {
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
                  dispatch(deleteAddress(addressToRender?._id));
                }}
                className={`${styles.trashBtn}`}
              >
                <i className="fa fa-trash"></i>
              </button>
              <Link
                to={`/address/edit/${addressToRender._id}`}
                className={`${styles.trashBtn}`}
              >
                <i className="fa-solid fa-pen"></i>
              </Link>
            </span>
          </li>
          <li className={`list-group-item ${styles.item}`}>
            street name: <span>{addressToRender.street}</span>
          </li>
          <li className={`list-group-item ${styles.item}`}>
            city: <span>{addressToRender.city}</span>
          </li>{" "}
          <li className={`list-group-item ${styles.item}`}>
            country: <span>{addressToRender.country}</span>
          </li>
          <li className={`list-group-item ${styles.item}`}>
            phone number: <span>+2{addressToRender.mobile}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AddressItem;
