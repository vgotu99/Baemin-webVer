import "./style/SideBar.css";
import { useNavigate } from "react-router-dom";

import Button from "./Button";


const SideBar = () => {

  const nav = useNavigate();

  return (
    <div className="sideBar">
      <div className="sideBar_logo">
        <img className="logo" src="/mainLogo.png" alt="" onClick={() => nav('/')}/>
      </div>
      <div className="sideBar_button">
        <Button type={'sideBar'} text={'주소'} imgType={'adress'} />
        <Button type={'sideBar'} text={"알림"} imgType={'alert'}/>
        <Button type={'sideBar'} text={"장바구니"} imgType={'cart'}/>
        <Button type={'sideBar'} text={"찜"} imgType={'like'}/>
        <Button type={'sideBar'} text={"이벤트"} imgType={'event'}/>
        <Button type={'sideBar'} text={"My 배민"} imgType={'profile'}/>
      </div>
      <div className="sideBar_perf">
      <Button type={'sideBar'} text={"환경설정"} imgType={'preference'}/>
      </div>
    </div>
  );
};

export default SideBar;
