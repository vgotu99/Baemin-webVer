import "./style/ProfileSub.css";
import { useState, useEffect } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ProfileSub = () => {
    const [userData, setUserData] = useState('');
    const nav = useNavigate()
  
    useEffect(() => {
      const currentUser = localStorage.getItem("currentUser");
      if (currentUser) {
        setUserData(JSON.parse(currentUser));
      }

    }, []);


  

  return (
    <div className="profileSub">
      <div>
        <div>{userData ?`더 귀한분, ${userData.nickname}님` : <Button text={'로그인 / 회원가입'} type={'profileSub_join'} onClick={() => nav('/join')}/> }</div>
      </div>
      <h5>회원이 찜한 가게</h5>
      <div>가게1</div>
      <div>가게1</div>
      <div>가게1</div>
      <div>가게1</div>
      <div>더보기..</div>
    </div>
  );
};

export default ProfileSub;
