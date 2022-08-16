import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import headerImg from "../../../assets/images/headerImg.png";
import itemCard from "../../../assets/images/Productimage1.png";
import itemCard2 from "../../../assets/images/productimage2.png";
import itemCard3 from "../../../assets/images/productimage3.png";
import itemCard4 from "../../../assets/images/productimage4.png";
import itemCard5 from "../../../assets/images/try.png";
import { ProductCard } from "../../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../store/actions/productActions";

function Home() {
  const dispatch = useDispatch();

  const {
    loading: productsLoading,
    error: productsError,
    products,
  } = useSelector((state) => state.allProducts);
  const prodcutsArray = products?.products;
  const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    dispatch(getAllProducts(pageNum));
  }, [dispatch, pageNum]);

  console.log(products);

  return (
    <>
      <section>
        <div className="container-fluid p-0 m-0 mb-5">
          <header className={styles.banner}>
            <div className={`container ${styles.rsw}`}>
              <div className="row justify-content-center justify-content-lg-between  align-items-end  align-items-lg-center ">
                <div className="col-12 col-md-6 col-lg-7">
                  <div className={`${styles.content}`}>
                    <h1>Create a beautiful user experience in no time</h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available,but the majority have suffered alteration in
                      some form,by injected humour,or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 d-none d-md-block">
                  <img src={headerImg} alt="Logo" />
                </div>
                <div className="col-12 col-md-6 col-lg-5 d-block d-md-none w-50">
                  <img src={itemCard5} alt="Logo" />
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
              <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center align-items-center">
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
              <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
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
              <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center align-items-center">
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
              <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
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
          <div className={`container`}>
            <div className="row mb-0 mb-lg-3  g-4 mt-5 ">
              {prodcutsArray?.slice(-6).map((product, index) => (
                <div
                  className={`col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3 mb-lg-0`}
                  key={index}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
