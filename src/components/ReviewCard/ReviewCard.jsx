import React from "react";
import Rateing from "../Rateing/Rateing";
import styles from "./ReviewCard.module.css";

const ReviewCard = ({ review }) => {
  const d = new Date(review.createdAt);
  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const newDate = date + "/" + month + "/" + year;

  return (
    <>
      <div className="row w-95 m-auto">
        <h3 className={styles.reviewerName}>
          {review.user.firstName + " " + review.user.lastName}
        </h3>
        <div className="d-flex justify-content-start align-items-center gap-2">
          <Rateing rate={review.rating} size={"xs"} />
          <h3 className={`mt-2   ${styles.reviewerRate}`}>{review.rating}</h3>
        </div>
        <h3 className={styles.reviewerDate}>{newDate}</h3>
        <p className={styles.reviewerComment}>{review.comment}</p>
        <hr></hr>
      </div>
    </>
  );
};

export default ReviewCard;
