import "./style/Review.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Review = () => {
  const [reviewData, setReviewData] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const userReview = JSON.parse(localStorage.getItem("userReview"));
    if (userReview) {
      setReviewData(userReview);
    }
  }, []);

  return (
    <div className="review">
      <div className="review_header">
        <div className="review_goToMain">
          <Button
            onClick={() => nav(-1)}
            type={"goToMain"}
            text={"< 돌아가기"}
          />
        </div>
        <div className="header_text">나의 리뷰내역</div>
      </div>
      <div className="review_main">
        {reviewData.map((data) => (
          <div key={data.id} className="review_item">
            <h2>{data.writeDate}에 작성한 리뷰입니다.</h2>
            <h3 onClick={() => nav(`/store/${data.storeId}`)}>{data.storeName} ></h3>
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                src={star <= data.starPoint ? "/starOn.png" : "/starOff.png"}
                alt={`Star ${star}`}
              />
            ))}
            <div className="review_product_content">{data.reviewContent}</div>
            <div className="review_product_name">{data.productName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
