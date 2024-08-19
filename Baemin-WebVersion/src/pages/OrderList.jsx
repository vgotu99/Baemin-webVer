import "./style/OrderList.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import Button from "../components/Button";

const OrderList = () => {
  const [orderData, setOrderData] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isOrderModalOpened, setIsOrderModalOpened] = useState(false);
  const [isReviewModalOpened, setIsReviewModalOpened] = useState(false);
  const [reviewItem, setReviewItem] = useState(null);
  const [starPoint, setStarPoint] = useState(0);
  const [reviewContent, setReviewContent] = useState("");
  const [reviewedItems, setReviewedItems] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    const userOrderList = JSON.parse(localStorage.getItem("userOrderList"));
    if (userOrderList) {
      setOrderData(userOrderList);
    }
  }, []);

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsOrderModalOpened(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setIsOrderModalOpened(false);
  };

  useEffect(() => {
    const savedReviewedItems = JSON.parse(
      localStorage.getItem("reviewedItems") || "{}"
    );
    setReviewedItems(savedReviewedItems);
  }, []);

  const goToReview = (item) => {
    if (!reviewedItems[item.id]) {
      setReviewItem(item);
      setIsReviewModalOpened(true);
      closeModal();
    }
  };

  const handleStarClick = (point) => {
    setStarPoint(point);
  };

  const handleReviewSubmit = () => {
    const review = {
      id: reviewItem.id,
      storeId: reviewItem.storeId,
      storeName: reviewItem.storeName,
      productName: reviewItem.productName,
      starPoint,
      reviewContent,
      writeDate: new Date().toLocaleString(),
    };

    if (!starPoint) {
      setError("은 필수로 입력해주세요!.");
      return;
    }

    const userReview = JSON.parse(localStorage.getItem("userReview") || "[]");
    userReview.push(review);
    localStorage.setItem("userReview", JSON.stringify(userReview));

    const updatedReviewedItems = { ...reviewedItems, [reviewItem.id]: true };
    setReviewedItems(updatedReviewedItems);
    localStorage.setItem("reviewedItems", JSON.stringify(updatedReviewedItems));

    setIsReviewModalOpened(false);
    setReviewItem(null);
    setStarPoint(0);
    setReviewContent("");
    setError("");
  };

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255,255,255,.85)",
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

  console.log(orderData);

  return (
    <div className="orderList">
      <div className="orderList_header">
        <div className="orderList_goToMain">
          <Button
            onClick={() => nav(-1)}
            type={"goToMain"}
            text={"< 돌아가기"}
          />
        </div>
        <div className="header_text">나의 주문내역</div>
      </div>
      <div className="orderList_main">
        {orderData.map((data) => (
          <div
            key={data.orderDate}
            onClick={() => openModal(data)}
            className="orderHistory"
          >
            <div className="text_1">주문일자</div>
            <div className="text_2">{data.orderDate}</div>
            <div className="text_3">자세한 내역을 보시려면 클릭해주세요</div>
          </div>
        ))}
      </div>
      <ReactModal
        ariaHideApp={false}
        isOpen={isOrderModalOpened}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {selectedOrder && (
          <div>
            <div className="modal_header">
              <Button onClick={closeModal} text={"< 닫기"} type={"goToMain"} />
              <h2>주문 상세 내역 ({selectedOrder.orderDate})</h2>
            </div>
            <div className="modal_content">
              {selectedOrder.items.map((item) => (
                <div key={item.id} className="content_box">
                  <div className="content_text">
                    <div className="modal_store_name"># {item.storeName}</div>
                    <div className="modal_product_name">
                      - {item.productName}
                    </div>
                    <div className="modal_product_description">
                      - {item.productDescription}
                    </div>
                    <div className="modal_product_price">
                      - {item.productPrice}원
                    </div>
                  </div>
                  <div className="content_btn">
                    {reviewedItems[item.id] ? (
                      <Button text={"리뷰 작성완료"} type={"doneReview"} />
                    ) : (
                      <Button
                        onClick={() => goToReview(item)}
                        text={`리뷰 작성하기`}
                        type={"goToReview"}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ReactModal>
      <ReactModal
        ariaHideApp={false}
        isOpen={isReviewModalOpened}
        onRequestClose={() => setIsReviewModalOpened(false)}
        style={customStyles}
      >
        {reviewItem && (
          <div className="review-modal">
            <div className="review-modal-header">
              <h2># {reviewItem.storeName}</h2>
              <div className="modal_product_name">
                - {reviewItem.productName}
              </div>
            </div>
            <div className="review-modal-star">
              {[1, 2, 3, 4, 5].map((star) => (
                <img
                  key={star}
                  src={star <= starPoint ? "/starOn.png" : "/starOff.png"}
                  alt={`Star ${star}`}
                  onClick={() => handleStarClick(star)}
                />
              ))}
            </div>
            <textarea
              className="review-modal-content"
              value={reviewContent}
              onChange={(e) => setReviewContent(e.target.value)}
              placeholder="리뷰를 작성해주세요."
            ></textarea>
            {error && (
              <div className="error-message" style={{ color: "red" }}>
                <img src="/starOn.png" />
                <div>{error}</div>
              </div>
            )}
            <Button
              onClick={handleReviewSubmit}
              text={"리뷰 작성완료"}
              type={"modal_btn"}
            />
          </div>
        )}
      </ReactModal>
    </div>
  );
};

export default OrderList;
