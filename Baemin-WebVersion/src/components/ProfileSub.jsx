import "./style/ProfileSub.css";
import { stores } from "./StoreListData";
import { useState, useEffect } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ProfileSub = () => {
  const [userData, setUserData] = useState("");
  const [likedStore, setLikedStore] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setUserData(JSON.parse(currentUser));
    }
  }, []);

  useEffect(() => {
    const userLike = JSON.parse(localStorage.getItem("userLike")) || {};
    const likedStore = stores.filter((store) => userLike[store.id]);
    setLikedStore(likedStore);
  }, []);

  const displayedLikedStore = likedStore.slice(0, 5)

  return (
    <div className="profileSub">
      <div>
        {userData ? (
          <div>
            <h4>더 귀한분, {userData.nickname}님</h4>{" "}
            <h5>회원님이 찜한 가게</h5>
            {displayedLikedStore.map((store) => (
              <div key={store.id}>
                <Button
                  onClick={() => nav(`/store/${store.id}`)}
                  text={store.name}
                  type={"profileSub_like"}
                />
              </div>
            ))}
            {likedStore.length > 5 && (
              <Button onClick={() => nav('/like')}
              text={'내가 찜한 가게 더보기..'}
              type={'profileSub_more'}
              />
            )}
          </div>
        ) : (
          <div>
            <Button
              text={"로그인 / 회원가입"}
              type={"profileSub_join"}
              onClick={() => nav("/join")}
            />
            <h4>로그인이 필요합니다</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSub;
