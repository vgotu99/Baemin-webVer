import "./style/Profile.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Profile = ({ switchView }) => {
  const [userData, setUserData] = useState(null);
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

  if (!userData) {
    return (
      <div>
        <p>로그인이 필요합니다.</p>
        <button onClick={() => nav("/join")}>로그인하기</button>
      </div>
    );
  }

  return (
    <div className="profile">
      <Button onClick={() => nav("/")} type={"join"} imgType={"mainLogo"} />
      <div className="profile_header">
        <div>더 귀한분, {userData.nickname}님</div>
        <div className="profile_btn">
          <Button type={"profile"} text={"주문내역"} imgType={"orderList"} />
          <Button type={"profile"} text={"나의찜"} imgType={"love"} />
          <Button type={"profile"} text={"리뷰관리"} imgType={"star"} />
        </div>
      </div>
      <div className="profile_orderList">
        <div>주문내역1</div>
        <div>주문내역2</div>
        <div>주문내역3</div>
        <div>주문내역</div>
        <div>주문내역</div>
      </div>
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
