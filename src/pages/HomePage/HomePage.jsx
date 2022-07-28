import React from "react";
import styles from "./Home.module.css";
import headerImg from "../../assets/images/headerImg.png";
import itemCard from "../../assets/images/itemCard.png";

function Home() {
  return (
    <>
      <section>
        <div className="container-fluid p-0 m-0 mb-5">
          <header className={styles.banner}>
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-7">
                  <div className={styles.content}>
                    <h1>Create a beautiful user experience in no time</h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available,but the majority have suffered alteration in
                      some form,by injected humour,or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                </div>
                <div className="col-5">
                  <img src={headerImg} alt="Logo" />
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className={` text-center  ${styles.deals}`}>
          <div
            className={`  d-flex flex-column justify-content-center align-items-center   ${styles.title}`}
          >
            <h3>BAZAAR DEALS!</h3>
            <div className={styles.HR}></div>
          </div>

          <div className="container">
            <div className="row mb-5">
              <div className="col-6">
                <div className={`row ${styles.cardHome} w-100 h-100 p-5`}>
                  <div className="col-6">
                    <h3>
                      SPICIAL OFFER ON FIRST ORDER <br />
                      UP To 30% OFF
                    </h3>
                  </div>
                  <div className="col-6"></div>
                </div>
              </div>
              <div className="col-6">
                <div className={`row ${styles.cardHome} w-100 h-100 p-5`}>
                  <div className="col-6">
                    {" "}
                    <h3>
                      SPICIAL OFFER ON FIRST ORDER <br />
                      UP To 30% OFF
                    </h3>
                  </div>
                  <div className="col-6"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className={`row ${styles.cardHome} w-100 h-100 p-5`}>
                  <div className="col-6">
                    {" "}
                    <h3>
                      SPICIAL OFFER ON FIRST ORDER <br />
                      UP To 30% OFF
                    </h3>
                  </div>
                  <div className="col-6"></div>
                </div>
              </div>
              <div className="col-6">
                <div className={`row ${styles.cardHome} w-100 h-100 p-5`}>
                  <div className="col-6">
                    {" "}
                    <h3 className="text-start">
                      SPICIAL OFFER ON FIRST ORDER <br />
                      UP To 30% OFF
                    </h3>
                  </div>
                  <div className="col-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={` text-center  ${styles.Recently} mt-5 mb-5`}>
          <div
            className={`  d-flex flex-column justify-content-center align-items-center   ${styles.title}`}
          >
            <h3>Recently Added Products</h3>
            <div className={styles.HR}></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
