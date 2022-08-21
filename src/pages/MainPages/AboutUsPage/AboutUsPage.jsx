import React from "react";
import styles from "./AboutUsPage.module.css";
import image1 from "../../../assets/images/imageA.png";

function AboutUsPage() {
  return (
    <>
      <section className={styles.sec}>
        <div className={styles.Banner}>
          <h1 className="ms-5 ms-lg-0">ABOUT BAZAAR !</h1>
        </div>
        <div className={styles.Middle}>
          <div
            className={`  d-flex flex-column justify-content-center align-items-center  ${styles.title}`}
          >
            <h3>About Us </h3>
            <div className={styles.HR}></div>
          </div>
          <p>
            Whether you are dreaming of an aesthetic home that includes precious
            antique items, or wanting your work office to be more vintage and
            classy. Bazaar is an all-in-one place for antique lovers. Discover
            thousands of high-quality valuable items with competitive prices to
            complete the best shopping experience ever!
          </p>
        </div>
        <div className={styles.LastTitle}>
          <div
            className={`  d-flex flex-column justify-content-center align-items-center  ${styles.title}`}
          >
            <h3>Our Team</h3>
            <div className={styles.HR}></div>
          </div>
          <div className=" container d-flex mb-5">
            <div className="row justify-content-center justify-content-lg-between text-center text-md-start align-items-center">
              <div className="col-12 col-md-7">
                <div className={styles.Last}>
                  Our talented artists combine professionalism and attention to
                  details, along with their passion in art and vintage items.
                  Seeking to ensure the best quality antiques Our minds are
                  always fresh and open to come up with new items We focus on
                  diversity in all items to make sure that you find exactly what
                  matches your taste
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div>
                  <img className="w-100 mt-3 mt-md-0" src={image1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUsPage;
