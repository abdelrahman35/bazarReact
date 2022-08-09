import styles from "./Cart.module.css";
import { useSelector } from "react-redux";

import CartCard from "../../components/CartCard/CartCard";
const Cart = () => {
  const {
    loading: productLoading,
    error: productError,
    product,
  } = useSelector((state) => state.oneProduct);

  const productQuantity = product?.product?.quantity;
  const quantityArray = Array.from(
    { length: productQuantity },
    (_, index) => index + 1,
  );
  return (
    <section className={`${styles.cartSection}`}>
      <div className={`container p-0`}>
        <div className={`row`}>
          <CartCard />

          <div className={`col-12  col-md-5 col-lg-4 `}>
            <h2 className={`${styles.Text2}`}>Order Summary</h2>
            <div className={`   ${styles.Right} `}>
              <div className="d-flex justify-content-between align-items-center ">
                <p className={` ${styles.first}`}>
                  Subtotal<span>(6items)</span>
                </p>
                <p className={` ${styles.second}`}>3,599.99EGP</p>
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
        </div>
      </div>
    </section>
  );
};

export default Cart;
