import "./style/StoreInfo.css";
import { stores } from "../components/StoreListData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StoreInfoHeaderForm from "../components/StoreInfoHeaderForm";
import StoreInfoMenuForm from "../components/StoreInfoMenuForm";
import Button from "../components/Button";

const StoreInfo = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [cart, setCart] = useState("");
  const { id } = useParams();

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

  const putInCart = () => {
    const products = store.products;
    const cartData = { id, products };
    const userCart = JSON.parse(localStorage.getItem('userCart'))

    userCart.push(cartData)
    localStorage.setItem('userCart', JSON.stringify(userCart))
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
      <StoreInfoMenuForm products={store.products} store={store} putInCart={putInCart}/>
      <Button type={"store_cart"} imgType={"cart"} />
    </div>
  );
};

export default StoreInfo;
