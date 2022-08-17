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
    (state) => state.userLogin
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
        <div className={`container mt-5 mb-5`}>
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
        <div className={`container mt-5 mb-5`}>
          your favourites are empty, please add some products{" "}
          <Link className={`${styles.redirectLink}`} to={"/products"}>
            find some products from here
          </Link>
        </div>
      )}
    </>
  );
};

export default FavouritePage;
