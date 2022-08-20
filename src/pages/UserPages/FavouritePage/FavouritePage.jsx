import React, { useEffect } from "react";
import FavouriteItem from "../../../components/FavouriteItem/FavouriteItem";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./FavouritePage.module.css";
import Loading from "../../../components/Loading/Loading";
const FavouritePage = () => {
  const navigate = useNavigate();
  const { loading: favLoading, favourites } = useSelector(
    (state) => state.favouritesProducts,
  );
  const { error: userError, userInfo } = useSelector(
    (state) => state.userLogin,
  );
  useEffect(() => {
    if (!userInfo) {
      navigate("*", { replace: true, state: userError });
    }
  }, [userInfo, userError]);

  return (
    <>
      {favLoading ? (
        <div
          className={`container d-flex justify-content-center align-items-center ${styles.conten}`}
        >
          <Loading />
        </div>
      ) : favourites?.length > 0 ? (
        <div className={`container mt-5 mb-5 `}>
          <div className="row">
            {favourites?.map((product) => (
              <div
                key={product?.product._id}
                className="col-lg-4 col-md-6 col-12 px-2 m-0"
              >
                <FavouriteItem product={product?.product} />
              </div>
            ))}
          </div>
        </div>
      ) : JSON.parse(localStorage.getItem("wishlist"))?.length > 0 &&
        favourites?.length === 0 ? (
        <div className={`container mt-5 mb-5 `}>
          <div className="row">
            {JSON.parse(localStorage.getItem("wishlist"))?.map((product) => (
              <div
                key={product?.product._id}
                className="col-lg-4 col-md-6 col-12 px-2 m-0"
              >
                <FavouriteItem product={product?.product} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <section className={`${styles.cartSection}`}>
            <div className={`container  ${styles.Con}`}>
              <div className="row w-80 justify-content-center align-items-center">
                <div className={`${styles.component} w-100`}>
                  <div className="m-0 mb-1 text-capitalize">
                    your favourites are empty, please add some products <br />
                    <div className="d-flex justify-content-evenly align-items-center">
                      <Link
                        className={`${styles.redirectLink}`}
                        to={"/products"}
                      >
                        find some products from here
                      </Link>
                      <i className="fa-duotone fa-sitemap"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default FavouritePage;
