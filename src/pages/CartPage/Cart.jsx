import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartCard from "../../components/CartCard/CartCard";
import { Link } from "react-router-dom";
const CartPage = () => {
  const {
    loading: productLoading,
    error: productError,
    product,
  } = useSelector((state) => state.oneProduct);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <section className={`${styles.cartSection}`}>
      <div className={`container p-0`}>
        <div className={`row`}>
          {cartItems?.map((item, index) => (
            <CartCard key={index} productFromCart={item} />
          ))}
          {cartItems?.length > 0 ? (
            <div className={`col-12  col-md-5 col-lg-4 `}>
              <h2 className={`${styles.Text2}`}>Order Summary</h2>
              <div className={`   ${styles.Right} `}>
                <div className="d-flex justify-content-between align-items-center ">
                  <div className={` ${styles.first}`}>
                    Subtotal<span>{cartItems?.length}items</span>
                  </div>
                  <p className={` ${styles.second}`}>
                    {cartItems?.reduce(
                      (contedPrice, product) =>
                        contedPrice + product.productPrice * product.qty,
                      0
                    )}
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center ">
                  <p className={` ${styles.first}`}>Shipping</p>
                  <p className={` ${styles.second}`}>Free</p>
                </div>
                <div className="d-flex justify-content-between align-items-center ">
                  <p className={` ${styles.first}`}>Taxes</p>
                  <p className={` ${styles.second}`}>Price Include 14% vat</p>
                </div>
                <div className={`row`}>
                  <button className={`${styles.btnWarningg}`}>CHECK OUT</button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              your cart is empty, please add some products{" "}
              <Link className={`${styles.redirectLink}`} to={"/products"}>
                find some products from here
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartPage;
