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
import { NotificationContainer } from "react-notifications";
import Slider from "react-slick";
import AaibImg from "../../../assets/images/aaib.png";
import ItiImg from "../../../assets/images/iti.png";

function Home() {
  const dispatch = useDispatch();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
  };

  const sponsers = [
    {
      id: 1,
      name: "Arab African International Bank",
      img: AaibImg,
    },
    {
      id: 2,
      name: "Information Technology Institute",
      img: ItiImg,
    },
  ];

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

  return (
    <>
      <section>
        <div className="container-fluid p-0 m-0 mb-5">
          <header className={styles.banner}>
            <div className={`container ${styles.rsw}`}>
              <div className="row justify-content-center justify-content-lg-between  align-items-end  align-items-lg-center ">
                <div className="col-12 col-md-6 col-lg-7">
                  <div className={`${styles.content}`}>
                    <h1 className="text-capitalize">
                      Welcome to another world of aesthetics!
                    </h1>
                    <p>
                      Need a refresh for your home or your workplace? Bazaar is
                      the perfect destination to discover hundreds of
                      high-quality antiques never go out of style.
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
          <div className={`container d-none d-lg-block w-90`}>
            <div className="row mb-0 mb-lg-3  g-4   ">
              <Slider {...settings}>
                {prodcutsArray?.slice(-6).map((product, index) => (
                  <div className="col-lg-4 col-md-6 col-12" key={product?._id}>
                    <ProductCard key={product?._id} product={product} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className={`container d-block d-lg-none `}>
            <div className="row mb-0 mb-lg-3  g-4  ">
              {prodcutsArray?.slice(-6).map((product, index) => (
                <div
                  className="d-flex col-lg-4 col-md-6 col-12 "
                  key={product?._id}
                >
                  <ProductCard key={product?._id} product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={` text-center  ${styles.Recently} mt-5 mb-5`}>
          <div className={`container ${styles.sponserr}`}>
            <div
              className={`  d-flex flex-column justify-content-center align-items-center   ${styles.title}`}
            >
              <h3 className="text-capitalize">sponsored by</h3>
            </div>
            <div className="row mb-0 mb-lg-3  g-4  ">
              <Slider {...settings2}>
                {sponsers.map((sponser, index) => (
                  <div
                    className="{`col-lg-4 col-md-6 col-12 d-flex flex-column justify-content-center aliggn-items-center `}"
                    key={index}
                  >
                    <div className={styles.imgWraap}>
                      <img
                        src={sponser.img}
                        className={`w-20 ${styles.sponser}`}
                        alt={sponser.name}
                      />
                    </div>
                    <h1>{sponser.name}</h1>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <NotificationContainer />
      </section>
    </>
  );
}

export default Home;
