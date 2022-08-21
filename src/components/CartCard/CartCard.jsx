import styles from "./CartCard.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/actions/cartAction";
const CartCard = ({ productFromCart }) => {
  const dispatch = useDispatch();
  const removeFromCartHandler = () => {
    dispatch(removeFromCart(productFromCart.productId));
  };
  const { stock } = useSelector((state) => state.cart);
  const productInStock = stock.filter(
    (product) => product.productId === productFromCart.productId
  );

  const quantityArray = Array.from(
    { length: productInStock[0].stock },
    (_, index) => index + 1
  );

  return (
    <>
      <div
        className={`d-flex flex-column flex-md-row  ${styles.Left} w-100 m-0 px-5 px-md-0 mb-4  justify-content-center align-items-center`}
      >
        <div className={`col-md-3 d-flex justify-content-center`}>
          <img
            src={`https://bazaarshop.s3.eu-west-3.amazonaws.com${productFromCart?.image}`}
            className={`w-100`}
            alt="order img"
          />
        </div>
        <div
          className={`col-md-6 p-0 d-flex flex-column justify-content-center justify-content-md-between  h-85 `}
        >
          <div className="d-flex flex-column  ">
            <p
              className={` m-0 p-0 w-100   col-6 ${styles.title} fs-2 fw-bold text-capitalize`}
            >
              {productFromCart?.name}
            </p>
          </div>
          <div className="d-flex justify-content-start align-items-center gap-4">
            <div className={`col-6 `}>
              <button className={styles.btns}>
                <i className="fa-solid fa-heart me-2"></i>Move to wishlist
              </button>
            </div>
            <div className={`col-6`}>
              <button
                className={`${styles.btns}`}
                onClick={() => {
                  removeFromCartHandler();
                }}
              >
                <i className="fa-solid fa-trash me-2"></i>Remove from cart
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 d-flex flex-row flex-md-column justify-content-center align-items-center mt-4 mt-md-0">
          <p className={`p-2 col-12  w-50 text-center ${styles.title2} m-0`}>
            {productFromCart?.price} EGP
          </p>
          <select
            id="quantity"
            className={`form-select col-12 w-50 ${styles["form-select"]}`}
            aria-label="Default select example"
            value={Number(productFromCart?.quantity)}
            onChange={(e) => {
              if (Number(e.target.value < Number(productFromCart?.quantity))) {
                dispatch(
                  addToCart(
                    productFromCart?.productId,
                    -(
                      Number(productFromCart?.quantity) - Number(e.target.value)
                    )
                  )
                );
              } else if (
                Number(e.target.value > Number(productFromCart?.quantity))
              ) {
                dispatch(
                  addToCart(
                    productFromCart?.productId,
                    Number(e.target.value) - Number(productFromCart?.quantity)
                  )
                );
              }
            }}
          >
            {quantityArray?.map((x, index) => (
              <option key={index} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default CartCard;
