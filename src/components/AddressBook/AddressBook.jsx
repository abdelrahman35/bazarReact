import React from "react";
import styles from "./AddressBook.module.css";
function AddressBook({ address, index }) {
  return (
    <>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className={`list-group-item ${styles.item}`}>
            address: <span>#{index + 1}</span>
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
