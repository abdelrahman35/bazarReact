import React from "react";
import FavouriteItem from "../../components/FavouriteItem/FavouriteItem";
const FavouritePage = () => {
  const myTest = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className={`container mt-5 mb-5 `}>
      <div className="row">
        {myTest.map((pro) => (
          <div className="col-lg-4 col-md-6 col-12">
            <FavouriteItem />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritePage;
