import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createReview } from "../../store/actions/productActions";
import { useNavigate } from "react-router-dom";
import styles from "./CreateReview.module.css";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
function CreateReview({ productId }) {
  const navigate = useNavigate();
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const {
    loading: reviewLoading,
    error: reviewError,
    isReviewed,
    statusCode,
  } = useSelector((state) => state.productReview);

  useEffect(() => {
    if (isReviewed && statusCode === 201) {
      navigate(-1, { replace: true });
    }
  }, [isReviewed, statusCode]);

  const submitHandler = () => {
    dispatch(createReview(productId, comment, rate));
  };
  return (
    <>
      {reviewLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <form>
            <div className="mb-3">
              <label className="form-label d-block">Rate</label>
              <i
                className={`fa-solid fa-star ${styles.star1} ${
                  rate >= 1 ? styles.colored : null
                }`}
                onClick={() => {
                  setRate(1);
                }}
              ></i>
              <i
                className={`fa-solid fa-star ${styles.star2} ${
                  rate >= 2 ? styles.colored : null
                }`}
                onClick={(e) => {
                  setRate(2);
                }}
              ></i>
              <i
                className={`fa-solid fa-star ${styles.star3} ${
                  rate >= 3 ? styles.colored : null
                }`}
                onClick={() => {
                  setRate(3);
                }}
              ></i>
              <i
                className={`fa-solid fa-star ${styles.star4} ${
                  rate >= 4 ? styles.colored : null
                }`}
                onClick={() => {
                  setRate(4);
                }}
              ></i>
              <i
                className={`fa-solid fa-star ${styles.star5} ${
                  rate >= 5 ? styles.colored : null
                }`}
                onClick={() => {
                  setRate(5);
                }}
              ></i>

              <label htmlFor="comment" className="form-label d-block">
                Comment
              </label>
              <textarea
                type="text-area"
                className="form-control"
                id="comment"
                rows={5}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
            </div>

            <button
              className={`btn btn-primary ${styles.btnWarningg}`}
              data-bs-dismiss="reviewModal"
              onClick={() => {
                submitHandler();
              }}
            >
              Add Review
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default CreateReview;
