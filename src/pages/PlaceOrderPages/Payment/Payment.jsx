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
      "pi_3LUFaaAMxeDwFF2G0HQWm4kF_secret_jgwniT2Mx9RwIEW5V8ymStZ54",
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
