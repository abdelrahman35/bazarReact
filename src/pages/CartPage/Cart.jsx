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
        <div className={`row w-100`}>
          <div className="col-12  col-md-10 m-md-auto col-lg-8 d-flex align-items-start flex-column m-0 ">
            {cartItems?.map((item, index) => (
              <CartCard key={index} productFromCart={item} />
            ))}
          </div>
          {cartItems?.length > 0 ? (
            <div
              className={`col-12 col-md-9 m-md-auto  col-lg-4 ${styles.Right}`}
            >
              <div className={styles.header}>
                <h2 className={`${styles.Text2}`}>Order Summary</h2>
                <hr />
              </div>
              <div className={styles.content}>
                <div
                  className={`${styles.first} d-flex justify-content-between align-items-center`}
                >
                  <p>
                    Subtotal<span>({cartItems?.length})items</span>
                  </p>
                  <p className={` ${styles.second}`}>
                    {cartItems?.reduce(
                      (contedPrice, product) =>
                        contedPrice + product.productPrice * product.qty,
                      0,
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
              </div>
              <div className={styles.footer}>
                <button className={`${styles.btnWarningg} w-100 m-0`}>
                  CHECK OUT
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className={`container  ${styles.Con}`}>
                <div className="row w-80 justify-content-center align-items-center">
                  <div className={`${styles.component} w-100`}>
                    <p className="m-0 mb-1 text-capitalize">
                      your cart is empty, please add some products
                      <br />
                      <div className="d-flex justify-content-evenly align-items-center">
                        <Link
                          className={`${styles.redirectLink}`}
                          to={"/products"}
                        >
                          find some products from here
                        </Link>
                        <i className="fa-duotone fa-sitemap"></i>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartPage;
