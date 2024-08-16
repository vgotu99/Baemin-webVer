import "./style/StoreInfo.css";
import { stores } from "../components/StoreList";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import StoreInfoHeaderForm from "../components/StoreInfoHeaderForm";
import StoreInfoMenuForm from "../components/StoreInfoMenuForm";
import Button from "../components/Button";

const StoreInfo = () => {
  const [like, setLike] = useState(0);
  const [order, setOrder] = useState("");
  const { id } = useParams();
  const likeRef = useRef(1);

  const store = stores.find((s) => s.id === parseInt(id));

  const onClickLike = () => {
    setLike(likeRef.current++);

    const userLikeData = { id, like: likeRef.current };
    const userLike = JSON.parse(localStorage.getItem("userLike") || "[]");

    const existIndex = userLike.findIndex((item) => item.id === id);
    console.log(existIndex);

    if (existIndex !== -1) {
      userLike[existIndex].like = userLikeData.like;
    } else {
      userLike.push(userLikeData);
    }
    localStorage.setItem("userLike", JSON.stringify(userLike));
  };

  if (!store) {
    return <div>스토어가 존재하지 않습니다.</div>;
  }

  return (
    <div className="storeInfo">
      <StoreInfoHeaderForm
        onClickLike={onClickLike}
        like={like}
        store={store}
      />
      <StoreInfoMenuForm products={store.products} store={store} />
      <Button type={"store_cart"} imgType={"cart"} />
    </div>
  );
};

export default StoreInfo;
