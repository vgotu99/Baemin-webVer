import "./style/StoreInfoHeaderForm.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import Button from "./Button";

const StoreInfoHeaderForm = ({ store, onClickLike, isLiked }) => {
  const [storeReviewedData, setStoreReviewedData] = useState([]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const userReview = JSON.parse(localStorage.getItem("userReview"));

    if (userReview) {
      const filteredReview = userReview.filter(
        (item) => item.storeId === store.id
      );
      setStoreReviewedData(filteredReview);
    }
  }, []);

  console.log(storeReviewedData);

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255,255,255,.5)",
      zIndex: "3",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      padding: "0 50px",
      width: "600px",
      height: "540px",
      top: "calc(50dvh - 250px)",
      left: "calc(50dvw - 325px)",
      borderRadius: "20px",
    },
  };

  return (
    <div className="storeInfoHeaderForm">
      <div className="header_main">
        <div className="main_info1">
          <Button
            onClick={() => nav(-1)}
            type={"goToMain"}
            text={"< 돌아가기"}
          />
          <h2>{store.name}</h2>
          <div onClick={() => openModal()}>
            <img className="img" src="/starOn.png" />
            {store.star}
          </div>
        </div>
        <div className="main_info2">
          <Button type={"info"} imgType={"phone"} />
          <Button
            onClick={onClickLike}
            type={"info"}
            imgType={isLiked ? "likeOn" : "like"}
          />
          <Button type={"info"} imgType={"share"} />
        </div>
      </div>
      <div className="header_sub">
        <div>
          <div>최소주문금액</div>
          <div>{store.lowest}</div>
        </div>
        <div>
          <div>결제방법</div>
          <div>어떤 방법</div>
        </div>
        <div>
          <div>배달시간</div>
          <div>몇분~몇분</div>
        </div>
        <div>
          <div>배달팁</div>
          <div>{store.tip}</div>
        </div>
      </div>

      <ReactModal
        ariaHideApp={false}
        isOpen={isModalOpened}
        onRequestClose={closeModal}
        style={customStyles}
      >
        
        <div className="store_review_modal_header">
          <Button
            onClick={() => closeModal()}
            text={"< 닫기"}
            type={"goToMain"}
          />
          <h2>{store.name}에 대한 리뷰</h2>
        </div>
        {storeReviewedData.map((data) => (
          <div key={data.id}>
            <div className="store_review_modal_content">
              <div className="store_review_modal_writeDate">
                {data.writeDate}
              </div>
              {[1, 2, 3, 4, 5].map((star) => (
                <img
                  key={star}
                  src={star <= data.starPoint ? "/starOn.png" : "/starOff.png"}
                  alt={`Star ${star}`}
                />
              ))}
              <div className="store_review_modal_reviewContent">
                {data.reviewContent}
              </div>
              <div className="store_review_modal_productName">
                {data.productName}
              </div>
            </div>
          </div>
        ))}
      </ReactModal>
    </div>
  );
};

export default StoreInfoHeaderForm;
