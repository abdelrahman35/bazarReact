import React from "react";
import { Link } from "react-router-dom";
function CheckoutBar({ step1, step2, step3 }) {
  return (
    <nav className="justify-content-center mb-4">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          {step1 ? (
            <Link
              className="nav-link active"
              aria-current="page"
              to="/shippingDetails"
            >
              shipping details
            </Link>
          ) : (
            <Link
              className="nav-link disabled"
              aria-current="page"
              to="/shippingDetails"
            >
              shipping details
            </Link>
          )}
        </li>
        <li className="nav-item">
          {step2 ? (
            <Link
              className="nav-link active"
              aria-current="page"
              to="/paymentSelection"
            >
              payment
            </Link>
          ) : (
            <Link
              className="nav-link disabled"
              aria-current="page"
              to="/paymentSelection"
            >
              payment
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default CheckoutBar;
