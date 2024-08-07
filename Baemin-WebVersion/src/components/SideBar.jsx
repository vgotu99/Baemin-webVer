import "./style/SideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBar_logo">
        <img className="logo" src="../public/mainLogo.png" alt="" />
      </div>
      <div className="sideBar_button">
        <div>주소</div>
        <div>알림</div>
        <div>장바구니</div>
        <div>찜</div>
        <div>이벤트</div>
        <div>My 배민</div>
      </div>
      <div className="sideBar_perf">
        <div>환경설정</div>
      </div>
    </div>
  );
};

export default SideBar;
