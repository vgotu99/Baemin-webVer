import "./style/StoreInfo.css";
import { stores } from "../components/StoreListData";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StoreInfoHeaderForm from "../components/StoreInfoHeaderForm";
import StoreInfoMenuForm from "../components/StoreInfoMenuForm";
import Button from "../components/Button";

const StoreInfo = () => {
  const [isLiked, setIsLiked] = useState(false);
  // const [star, setStar] = useState([])
  const { id } = useParams();
  const nav = useNavigate()

  const store = stores.find((s) => s.id === parseInt(id));

  useEffect(() => {
    const userLike = JSON.parse(localStorage.getItem("userLike")) || {};
    setIsLiked(userLike[store.id] || false);
  }, [store.id]);

  const onClickLike = () => {
    const newLikeState = !isLiked;
    setIsLiked(newLikeState);

    const userLike = JSON.parse(localStorage.getItem("userLike")) || {};
    userLike[store.id] = newLikeState;
    localStorage.setItem("userLike", JSON.stringify(userLike));
  };

  if (!store) {
    return <div>스토어가 존재하지 않습니다.</div>;
  }

  return (
    <div className="storeInfo">
      <StoreInfoHeaderForm
        onClickLike={onClickLike}
        store={store}
        isLiked={isLiked}
      />
      <StoreInfoMenuForm
        products={store.products}
        store={store}
      />
      <Button onClick={() => nav('/profile/cart')} type={"store_cart"} imgType={"cart"} />
    </div>
  );
};

export default StoreInfo;
