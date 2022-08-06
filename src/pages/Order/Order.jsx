import React, { useEffect } from "react";
// import { createOrder } from "../../store/actions/categoriesActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axiosInstance from "../../network/axiosInstance";

const Order = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading: userLoading, error: userError, userInfo } = userLogin;

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${userInfo?.token}`,
    };

    axiosInstance
      .post(
        "/order",
        {
          payload: {
            products: [
              {
                productId: "62e8dcc16d0f5a029046f9a9",
                quantity: 1,
                name: "High Quality Vase Antique",
                image: "/cb0a3b12-8ab1-4960-93a6-59b0a505ad10.png",
                price: 599,
              },
              {
                productId: "62e8e1686d0f5a029046fa01",
                quantity: 1,
                name: "High Quality camera Antique",
                image: "/edd5e902-0db6-4b96-ad24-d72f96e28ad8.png",
                price: 400,
              },
            ],
            paymentMethod: "card",
            shippingAddress: {
              street: "mohamed beshir",
              city: "Alexandria",
              country: "Egypt",
              phone: "012756422",
              postalCode: "21164",
            },
          },
        },
        { headers },
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, []);

  // const submitHandeler = () => {
  //   dispatch(createOrder());
  // };
  return (
    <div>
      <Link
        to="/payment"
        // type="button"
        // className="btn btn-primary"
        // onClick={() => submitHandeler()}
      >
        Primary
      </Link>
    </div>
  );
};

export default Order;
