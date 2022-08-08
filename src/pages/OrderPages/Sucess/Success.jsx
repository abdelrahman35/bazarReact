import React, { useEffect } from "react";
import axiosInstance from "../../../network/axiosInstance";

const Sucess = () => {
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      // authorization: `Bearer ${userInfo?.token}`,
    };

    axiosInstance
      .get("/category", { headers })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div>Sucess</div>
    </>
  );
};

export default Sucess;
