import React from "react";
import { Link } from "react-router-dom";
function CheckoutBar({ step1, step2, step3, step4 }) {
  return (
    <nav className="justify-content-center mb-4">
      <div>
        {step1 ? (
          <Link to="/login">
            <p>sign in</p>
          </Link>
        ) : (
          <p className="disabled">sign in</p>
        )}
      </div>

      <div>
        {step2 ? (
          <Link to="/shipping">
            <p>shipping details</p>
          </Link>
        ) : (
          <p disabled>shipping details</p>
        )}
      </div>

      <div>
        {step3 ? (
          <Link to="/payment">
            <p>payment details</p>
          </Link>
        ) : (
          <p disabled>payment details</p>
        )}
      </div>

      <div>
        {step4 ? (
          <Link to="/placeorder">
            <p>place order</p>
          </Link>
        ) : (
          <p disabled>place order</p>
        )}
      </div>
    </nav>
  );
}

export default CheckoutBar;
