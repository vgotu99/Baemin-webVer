import "./style/Like.css";
import { useState, useEffect } from "react";
import { stores } from "../components/StoreListData";
import { useNavigate } from "react-router-dom";
import StoreListForm from "../components/StoreListForm";
import Button from "../components/Button";

const Like = () => {
  const [likedStore, setLikedStore] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const userLike = JSON.parse(localStorage.getItem("userLike"));
    if (!userLike) {
      setLikedStore("");
    } else {
      const userLike = stores.filter((store) => userLike[store.id]);
      setLikedStore(userLike);
    }
  }, []);

  return (
    <div className="like">
      <div className="like_header">
        <div className="like_goToMain">
          <Button
            onClick={() => nav(-1)}
            type={"goToMain"}
            text={"< 돌아가기"}
          />
        </div>
        <div className="header_text">내가 찜한 가게</div>
      </div>
      <div className="like_main">
        {!likedStore ? (
          <div className="emptyLike">
            <img src="/emptyLike.png" />
            <div>찜한 가게가 없어요.</div>
            <div>마음에 드는 가게를 찜해보세요.</div>
          </div>
        ) : (
        likedStore.map((store) => (
          <div key={store.id}>
            <StoreListForm
              onClick={() => nav(`/store/${store.id}`)}
              type={store.type}
              storeName={store.name}
              star={store.star}
              tip={store.tip}
              lowest={store.lowest}
            />
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default Like;
