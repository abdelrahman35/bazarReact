import React from "react";
import styles from "./Home.module.css";
import headerImg from "../../assets/images/headerImg.png";
import itemCard from "../../assets/images/Productimage1.png";
import itemCard2 from "../../assets/images/productimage2.png";
import itemCard3 from "../../assets/images/productimage3.png";
import itemCard4 from "../../assets/images/productimage4.png";

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
            <div className="row mb-4 mb-lg-3">
              <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                <div
                  className={`row ${styles.cardHome} w-100 h-100 p-5 align-items-end`}
                >
                  <div className="col-6 ">
                    <h4 className="text-start mb-3">
                      SPICIAL OFFER ON FIRST ORDER <br />
                      UP To <small> 30%</small> OFF
                    </h4>
                  </div>
                  <div className="col-6">
                    <img src={itemCard} className="w-80" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div
                  className={`row ${styles.cardHome} w-100 h-100 p-5 align-items-end`}
                >
                  <div className="col-6 ">
                    <h4 className="text-start mb-3">
                      SPICIAL OFFER ON FIRST ORDER <br />
                      UP To <small> 30%</small> OFF
                    </h4>
                  </div>
                  <div className="col-6">
                    <img src={itemCard3} className="w-80" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                <div
                  className={`row ${styles.cardHome} w-100 h-100 p-5 align-items-end`}
                >
                  <div className="col-6 ">
                    <h4 className="text-start mb-3">
                      SPICIAL OFFER ON FIRST ORDER <br />
                      UP To <small> 30%</small> OFF
                    </h4>
                  </div>
                  <div className="col-6">
                    <img src={itemCard2} className="w-80" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div
                  className={`row ${styles.cardHome} w-100 h-100 p-5 align-items-end`}
                >
                  <div className="col-6 ">
                    <h4 className="text-start mb-3">
                      SPICIAL OFFER ON FIRST ORDER <br />
                      UP To <small> 30%</small> OFF
                    </h4>
                  </div>
                  <div className="col-6">
                    <img src={itemCard4} className="w-80" alt="" />
                  </div>
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
          <div className="container">
            <div className="row justify-content-center align-items-center mb-3">
              <div
                className={`col-12 col-md-6 col-lg-4 p-0 d-flex justify-content-center ${styles.coco}`}
              >
                <div className={` ${styles.thecard}`}>
                  <div
                    className={`d-flex flex-column justify-content-center align-items-center ${styles.front}`}
                  >
                    <div className="text-center">
                      <img src={itemCard2} alt="" className="w-90 m-3  " />
                    </div>
                    <div className={styles.cardInfo}>
                      <ul className="list-unstyled d-flex flex-column align-items-center">
                        <li>Products Name : camera 1920</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.back}>
                    <div className={`d-flex flex-column p-3  `}>
                      <div className="text-end">
                        <img src={itemCard2} alt="" className="w-55" />
                      </div>
                      <div className={styles.cardInfo}>
                        <ul className="list-unstyled d-flex flex-column align-items-start">
                          <li>Products Name : camera 1920</li>
                          <li>Model Year : 1920</li>
                          <li> 200 EGP</li>
                        </ul>
                      </div>
                      <div className="d-flex justify-content-evenly w-100">
                        <button className={`${styles.btnWarningg} `}>
                          View Item
                        </button>
                        <button className={styles.btnWarningg}>
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`col-12 col-md-6 col-lg-4 p-0 d-flex justify-content-center ${styles.coco}`}
              >
                {" "}
                <div className={` ${styles.thecard}`}>
                  <div
                    className={`d-flex flex-column justify-content-center align-items-center ${styles.front}`}
                  >
                    <div className="text-center">
                      <img src={itemCard2} alt="" className="w-90 m-3  " />
                    </div>
                    <div className={styles.cardInfo}>
                      <ul className="list-unstyled d-flex flex-column align-items-center">
                        <li>Products Name : camera 1920</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.back}>
                    <div className={`d-flex flex-column p-3 `}>
                      <div className="text-end">
                        <img src={itemCard2} alt="" className="w-55" />
                      </div>
                      <div className={styles.cardInfo}>
                        <ul className="list-unstyled d-flex flex-column align-items-start">
                          <li>Products Name : camera 1920</li>
                          <li>Model Year : 1920</li>
                          <li> 200 EGP</li>
                        </ul>
                      </div>
                      <div className="d-flex justify-content-evenly w-100">
                        <button className={`${styles.btnWarningg} `}>
                          View Item
                        </button>
                        <button className={styles.btnWarningg}>
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`col-12 col-md-6 col-lg-4 p-0 d-flex justify-content-center ${styles.coco}`}
              >
                {" "}
                <div className={` ${styles.thecard}`}>
                  <div
                    className={`d-flex flex-column justify-content-center align-items-center ${styles.front}`}
                  >
                    <div className="text-center">
                      <img src={itemCard2} alt="" className="w-90 m-3  " />
                    </div>
                    <div className={styles.cardInfo}>
                      <ul className="list-unstyled d-flex flex-column align-items-center">
                        <li>Products Name : camera 1920</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.back}>
                    <div className={`d-flex flex-column p-3 `}>
                      <div className="text-end">
                        <img src={itemCard2} alt="" className="w-55" />
                      </div>
                      <div className={styles.cardInfo}>
                        <ul className="list-unstyled d-flex flex-column align-items-start">
                          <li>Products Name : camera 1920</li>
                          <li>Model Year : 1920</li>
                          <li> 200 EGP</li>
                        </ul>
                      </div>
                      <div className="d-flex justify-content-evenly w-100">
                        <button className={`${styles.btnWarningg} `}>
                          View Item
                        </button>
                        <button className={styles.btnWarningg}>
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div
                className={`col-12 col-md-6 col-lg-4 p-0 d-flex justify-content-center ${styles.coco}`}
              >
                <div className={` ${styles.thecard}`}>
                  <div
                    className={`d-flex flex-column justify-content-center align-items-center ${styles.front}`}
                  >
                    <div className="text-center">
                      <img src={itemCard2} alt="" className="w-90 m-3  " />
                    </div>
                    <div className={styles.cardInfo}>
                      <ul className="list-unstyled d-flex flex-column align-items-center">
                        <li>Products Name : camera 1920</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.back}>
                    <div className={`d-flex flex-column p-3  `}>
                      <div className="text-end">
                        <img src={itemCard2} alt="" className="w-55" />
                      </div>
                      <div className={styles.cardInfo}>
                        <ul className="list-unstyled d-flex flex-column align-items-start">
                          <li>Products Name : camera 1920</li>
                          <li>Model Year : 1920</li>
                          <li> 200 EGP</li>
                        </ul>
                      </div>
                      <div className="d-flex justify-content-evenly w-100">
                        <button className={`${styles.btnWarningg} `}>
                          View Item
                        </button>
                        <button className={styles.btnWarningg}>
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`col-12 col-md-6 col-lg-4 p-0 d-flex justify-content-center ${styles.coco}`}
              >
                {" "}
                <div className={` ${styles.thecard}`}>
                  <div
                    className={`d-flex flex-column justify-content-center align-items-center ${styles.front}`}
                  >
                    <div className="text-center">
                      <img src={itemCard2} alt="" className="w-90 m-3  " />
                    </div>
                    <div className={styles.cardInfo}>
                      <ul className="list-unstyled d-flex flex-column align-items-center">
                        <li>Products Name : camera 1920</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.back}>
                    <div className={`d-flex flex-column p-3 `}>
                      <div className="text-end">
                        <img src={itemCard2} alt="" className="w-55" />
                      </div>
                      <div className={styles.cardInfo}>
                        <ul className="list-unstyled d-flex flex-column align-items-start">
                          <li>Products Name : camera 1920</li>
                          <li>Model Year : 1920</li>
                          <li> 200 EGP</li>
                        </ul>
                      </div>
                      <div className="d-flex justify-content-evenly w-100">
                        <button className={`${styles.btnWarningg} `}>
                          View Item
                        </button>
                        <button className={styles.btnWarningg}>
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`col-12 col-md-6 col-lg-4 p-0 d-flex justify-content-center ${styles.coco}`}
              >
                {" "}
                <div className={` ${styles.thecard}`}>
                  <div
                    className={`d-flex flex-column justify-content-center align-items-center ${styles.front}`}
                  >
                    <div className="text-center">
                      <img src={itemCard2} alt="" className="w-90 m-3  " />
                    </div>
                    <div className={styles.cardInfo}>
                      <ul className="list-unstyled d-flex flex-column align-items-center">
                        <li>Products Name : camera 1920</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.back}>
                    <div className={`d-flex flex-column p-3 `}>
                      <div className="text-end">
                        <img src={itemCard2} alt="" className="w-55" />
                      </div>
                      <div className={styles.cardInfo}>
                        <ul className="list-unstyled d-flex flex-column align-items-start">
                          <li>Products Name : camera 1920</li>
                          <li>Model Year : 1920</li>
                          <li> 200 EGP</li>
                        </ul>
                      </div>
                      <div className="d-flex justify-content-evenly w-100">
                        <button className={`${styles.btnWarningg} `}>
                          View Item
                        </button>
                        <button className={styles.btnWarningg}>
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
