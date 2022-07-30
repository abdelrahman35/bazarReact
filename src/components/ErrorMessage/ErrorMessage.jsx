import React, { useState, useEffect } from "react";

function ErrorMessage({ statusCode }) {
  console.log(statusCode);
  const [message, setMessage] = useState("");
  useEffect(() => {
    switch (statusCode) {
      case 404:
        setMessage("Not Found Page");
        break;
      case 422:
        setMessage("wrong email or password");
        break;
      case 401:
        setMessage("Invalid Email or Password");
        break;
      default:
        setMessage("");
    }
  }, [statusCode]);
  console.log(message);
  return (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );
}

export default ErrorMessage;
