import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./Checkout";
import styles from "./payment.module.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe(
  "pk_test_51LSyOMAMxeDwFF2GnIEaAajxGJmGSw4ZOSzMufvvMjSfHdQCn55GJF5tLicn2fcSqJQwGjX71cm2nyyawfQkLc3o004oLlDExl",
);

export default function App() {
  const appearance = {
    theme: "night",
    labels: "floating",
  };
  const options = {
    clientSecret:
      "pi_3LTr5XAMxeDwFF2G2RZpKaBl_secret_vQxtWv0Xwq1vpZlGtpyNgZ4xL",
    appearance,
  };

  return (
    <div className={styles.App}>
      <Elements options={options} stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
