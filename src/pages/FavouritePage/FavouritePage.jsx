import React, { useEffect } from "react";
import FavouriteItem from "../../components/FavouriteItem/FavouriteItem";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { favouritesArrayFromLocalStorage } from "../../store/store";
import styles from "./FavouritePage.module.css";
import Loading from "../../components/Loading/Loading";
const FavouritePage = () => {
  const navigate = useNavigate();
  const {
    loading: favLoading,
    error: favError,
    favourites,
  } = useSelector((state) => state.favouritesProducts);
  const { error: userError, userInfo } = useSelector(
    (state) => state.userLogin,
  );
  useEffect(() => {
    if (!userInfo) {
      navigate("*", { replace: true, state: userError });
    }
  }, [favourites]);

  return (
    <>
      {favLoading ? (
        <Loading />
      ) : favourites?.length > 0 ? (
        <div className={`container mt-5 mb-5 `}>
          <div className="row">
            {favourites?.map((product) => (
              <div
                key={product?.product._id}
                className="col-lg-4 col-md-6 col-12"
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
                  <p className="m-0 mb-1 text-capitalize">
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
                  </p>
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
