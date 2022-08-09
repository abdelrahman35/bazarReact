import React, { useState, useEffect } from "react";

function ErrorMessage({ statusCode }) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    switch (statusCode) {
      case 404:
        setMessage("Not Found Page");
        break;
      case 422:
        setMessage("user already exists");
        break;
      case 401:
        setMessage("Invalid Email or Password");
        break;
      default:
        setMessage("");
    }
  }, [statusCode]);
  return (
    <div className="alert " role="alert">
      {message}
    </div>
  );
}

export default ErrorMessage;
