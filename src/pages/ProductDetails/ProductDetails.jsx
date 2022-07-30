import React from "react";
import styles from "./ProductDetails.module.css";
import image1 from "../../assets/images/Productimage1.png";

const ProductDetails = () => {
  return (
    <>
      <section>
        <div className={`container d-flex `}>
          <div
            className={`row justify-content-center justify-content-lg-between ${styles.Content}`}
          >
            <div className="col-6 col-md-4">
              <div className={styles.imgcontent}>
                <img src={image1} />
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className={styles.rightcont}>
                <h1 className={styles.title}>High Quailty Vase Antique</h1>
                <div className={styles.price}> EGP 599.99</div>
                <div className={`d-flex ${styles.review} justify-content`}>
                  <i className="fa-regular fa-star ms-3 mt-1"></i>
                  <i className="fa-regular fa-star  mt-1"></i>
                  <i className="fa-regular fa-star  mt-1"></i>
                  <i className="fa-regular fa-star  mt-1"></i>
                  <i className="fa-regular fa-star  mt-1"></i>
                </div>
                <hr />
                <div className={styles.Pdate}>Product Date :24-2010</div>
                <h4>About this item</h4>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  risus dui, mollis eget sodales et, ultrices ac magna. Vivamus
                  vel dapibus dui. Donec tempus, nulla quis pulvinar aliquet,
                  dolor leo auctor quam, et ornare neque sem quis mi. In
                  elementum bibendum quam id pharetra. Quisque quis lacus
                  lectus. Aenean imperdiet quis elit ac commodo. Phasellus quis
                  molestie tellus. In aliquam tellus lacus, vel ullamcorper mi
                  mattis eu. Duis elementum sagittis sapien ac pretium.
                </div>
                <br />
                <p>Quantity:</p>

                <div className="d-flex">
                  <div className={`dropdown ${styles.drop}`}>
                    <button
                      className={`btn dropdown-toggle`}
                      type="button"
                      id="dropdownMenu2"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      1
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenu2"
                    >
                      <li>
                        <button className="dropdown-item" type="button">
                          2
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          3
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          4
                        </button>
                      </li>
                    </ul>
                  </div>
                  <button className={styles.btnWarningg}>Add To Cart</button>{" "}
                  <i className={`fa-solid fa-square-heart ${styles.icon}`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
