import "./style/Profile.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import Button from "../components/Button";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [orderData, setOrderData] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setUserData(JSON.parse(currentUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    nav("/");
  };

  useEffect(() => {
    const userOrderList = JSON.parse(localStorage.getItem("userOrderList"));
    if (userOrderList) {
      setOrderData(userOrderList);
    }
  }, []);

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setIsModalOpened(false);
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

  if (!userData) {
    return (
      <div>
        <p>로그인이 필요합니다.</p>
        <button onClick={() => nav("/join")}>로그인하기</button>
      </div>
    );
  }

  const displayedOrderList = orderData.slice(0,4)

  return (
    <div className="profile">
      <Button onClick={() => nav("/")} type={"join"} imgType={"mainLogo"} />
      <div className="profile_header">
        <div>더 귀한분, {userData.nickname}님</div>
        <div className="profile_btn">
          <Button onClick={() => nav('/orderlist')} type={"profile"} text={"주문내역"} imgType={"orderList"} />
          <Button
            onClick={() => nav("/like")}
            type={"profile"}
            text={"나의찜"}
            imgType={"likeOn"}
          />
          <Button type={"profile"} text={"리뷰관리"} imgType={"star"} />
        </div>
      </div>
      <div className="profile_orderList">
        <div className="text_0">최근 주문내역 👇</div>
        {displayedOrderList.map((data) => (
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
        isOpen={isModalOpened}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {selectedOrder && (
          <div>
            <div className="modal_header">
              <h2>주문 상세 내역 ({selectedOrder.orderDate})</h2>
            </div>
            <div className="modal_content">
              {selectedOrder.items.map((item) => (
                <div key={item.id}>
                  <div className="content_wrapper">
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
                </div>
              ))}
            </div>

            <div className="modal_button_wrapper">
              <Button onClick={closeModal} text={"닫기"} type={"modal_btn"} />
            </div>
          </div>
        )}
      </ReactModal>
      <div className="profile_logOut">
        <Button
          onClick={handleLogout}
          text={"로그아웃"}
          type={"join_mainBtn"}
        />
      </div>
    </div>
  );
};

export default Profile;
